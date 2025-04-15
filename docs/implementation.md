# Implementation Details

This document provides technical details on how key features in PixelPop are implemented.

## Coordinate Systems

PixelPop uses multiple coordinate systems that are transformed between as needed:

1. **Grid Coordinates** (gridX, gridY)
   - Integer indices into the pixel grid
   - Used for logical operations (draw, erase, fill)
   - Range from (0,0) to (gridWidth-1, gridHeight-1)

2. **Canvas/SVG Coordinates** (x, y)
   - Pixel positions in the rendering context
   - Account for pixel size and grid gap
   - Used for actual rendering operations

3. **Screen Coordinates** (clientX, clientY)
   - Browser window coordinates for user input
   - Transformed to grid coordinates for processing interactions

4. **Transformable Coordinates**
   - Coordinates affected by zoom and pan
   - Handled by the react-zoom-pan-pinch library

### Coordinate Conversion Example

```javascript
// In Canvas.jsx or SVGRenderer.jsx
const getGridCoordinates = useCallback((e) => {
  // Get raw screen coordinates
  const rect = svgElement.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;
  
  // Account for current zoom scale
  const scaleX = svgRect.width / totalWidth;
  const normalizedX = relX / scaleX;
  
  // Convert to grid indices
  const cellSize = pixelSize + gridGap;
  const gridX = Math.floor(normalizedX / cellSize);
  const gridY = Math.floor(normalizedY / cellSize);
  
  return { gridX, gridY, buttons: e.buttons };
}, [gridWidth, gridHeight, pixelSize, gridGap, totalWidth, totalHeight]);
```

## Rendering Implementation

### Canvas Renderer

The Canvas Renderer uses an HTML5 Canvas element for drawing pixels:

1. **Initialization**
   - Creates a canvas element sized to fit the grid
   - Sets up the rendering context (2D)
   - Initializes event listeners

2. **Rendering Process**
   - Clears the canvas
   - Draws the background (if enabled)
   - Iterates through the pixel grid and draws each pixel
   - Applies effects (glow, etc.) using multiple canvas layers
   - Renders the final composite to the screen

3. **Performance Optimizations**
   - Uses `requestAnimationFrame` for smooth updates
   - Only redraws when necessary
   - Uses offscreen canvases for effects

### SVG Renderer

The SVG Renderer uses SVG elements for vector-based rendering:

1. **Initialization**
   - Creates an SVG container with appropriate viewBox
   - Sets up defs section for reusable elements (filters, patterns)
   - Creates groups for different layer types

2. **Rendering Process**
   - Generates an SVG structure with groups for:
     - Background elements
     - Pixel elements
     - Effect elements
     - Overlay elements
   - Uses SVG filters for effects like glow
   - Renders custom shapes using SVG path data

3. **SVG Generation**
   - Creates SVG elements for each pixel
   - Applies appropriate attributes and styles
   - Handles different pixel shapes through appropriate SVG primitives or path data

## Event Handling

### Mouse Events

Mouse events are handled through a coordinated system:

1. **Raw Event Capture**
   - Canvas/SVG elements capture mousedown, mousemove, mouseup events
   - Events are normalized across browsers

2. **Coordinate Processing**
   - Screen coordinates are converted to grid coordinates
   - Zoom and pan transformations are accounted for

3. **Event Delegation**
   - Events are passed to the appropriate handler based on active tool
   - Tool-specific logic determines how to process the interaction

4. **State Updates**
   - Changes are applied to the pixel grid state
   - History state is updated for undo/redo

### Touch Events

Touch events require special handling:

1. **Touch to Mouse Mapping**
   - Touch events (touchstart, touchmove, touchend) are mapped to equivalent mouse events
   - Touch coordinates are converted appropriately

2. **Gesture Recognition**
   - Pinch gestures are detected for zooming
   - Pan gestures are detected for moving the canvas
   - preventDefault() is used selectively to allow both drawing and navigation

3. **Multi-touch Management**
   - Multiple simultaneous touches are tracked
   - First touch is typically used for drawing
   - Additional touches are used for gestures

## Pixel Grid Implementation

The pixel grid is implemented as a 2D array:

```javascript
// Simplified example of pixel grid structure
const pixelGrid = [
  [null, { color: 'rgba(255,0,0,1)' }, null, ...],
  [null, null, { color: 'rgba(0,0,255,0.5)' }, ...],
  ...
];
```

1. **Grid Creation**
   - Created with specified dimensions
   - Null values represent transparent pixels
   - Object values contain pixel properties (color, etc.)

2. **Grid Manipulation**
   - Direct access for single-pixel operations
   - Batch operations for fill, selections, etc.
   - Grid is immutable for history tracking (new copies created on change)

## Selection System

The selection system uses the following approach:

1. **Selection State**
   - Stores selection area in state: `{ startX, startY, endX, endY }`
   - Null when no selection is active

2. **Selection Overlay**
   - Visual indicator rendered above the pixel grid
   - Shows selection bounds and handles

3. **Copy/Paste Implementation**
   - Copy: Extracts pixel data from the selected region to copyBuffer
   - Paste: Places copyBuffer data at cursor position
   - Cut: Combines copy with clearing the selected area

## Zoom and Pan Implementation

Zooming and panning are implemented using `react-zoom-pan-pinch`:

1. **TransformWrapper Component**
   - Wraps the canvas to provide zoom/pan capabilities
   - Configurable with min/max scale, pan limits, etc.

2. **Zoom Controls**
   - Direct methods exposed through refs: `zoomIn()`, `zoomOut()`
   - Wheel event handling for mouse wheel zoom

3. **Pan Controls**
   - Space key + drag for panning
   - Touch gestures for mobile panning
   - Controller methods for programmatic panning

## Effects Implementation

### Shape Rendering

Different pixel shapes are implemented using:

1. **Canvas Shapes**
   - Built-in canvas drawing methods for standard shapes
   - Custom path generation for complex shapes

2. **SVG Shapes**
   - SVG primitives (rect, circle) for standard shapes
   - Path data for custom shapes
   - Shape creation function generates appropriate elements

```javascript
// Simplified example of shape creation in SVGRenderer
const createShapePath = (x, y, size, shape, cornerRadius) => {
  switch (shape) {
    case 'circle':
      return `<circle cx="${x + size/2}" cy="${y + size/2}" r="${size/2}" />`;
    case 'rectangle':
      // Handle corner radius if enabled
      if (cornerRadius.enabled) {
        // Generate rectangle with rounded corners
      }
      return `<rect x="${x}" y="${y}" width="${size}" height="${size}" />`;
    // Other shapes...
  }
};
```

### Glow Effect

The glow effect is implemented differently in each renderer:

1. **Canvas Glow**
   - Uses multiple canvas layers
   - Applies shadow effects with configurable blur and color
   - Composite operations for blending

2. **SVG Glow**
   - Uses SVG filters (feGaussianBlur, feColorMatrix)
   - Filter chain for complex effects
   - Applied through filter attributes on elements

## Export Implementation

### SVG Export

SVG export uses the following process:

1. Generate an SVG string representation of the current state
2. Apply appropriate attributes and styles
3. Create a Blob and URL for download

### PNG/JPG Export

Raster export follows these steps:

1. Render the current state to a canvas (possibly at higher resolution)
2. Apply effects and scaling
3. Convert the canvas to a data URL
4. Create a download link with the appropriate format

## History and Undo/Redo

The history system uses a stack-based approach:

1. **History Stack**
   - Array of previous pixel grid states
   - Each edit pushes a new state
   - Limited by maxHistorySize

2. **Redo Stack**
   - Stores states that were undone
   - Cleared when a new edit is made after undo

3. **State Snapshots**
   - Complete copies of the pixel grid
   - Created after each significant action
   - Memory-efficient cloning for performance

## Touch and Mobile Support

Mobile support is implemented through:

1. **Responsive Design**
   - Flexible layout using CSS Grid and Flexbox
   - Media queries for different device sizes

2. **Touch Event Handling**
   - Custom touch event handlers translate touch to appropriate actions
   - PreventDefault() used selectively to allow both drawing and native gestures
   - Touch coordinate mapping accounts for page zoom and positioning 