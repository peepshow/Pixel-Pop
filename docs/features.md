# Features Guide

PixelPop provides a comprehensive set of features for creating and editing pixel art. This guide details all the available features and how to use them.

## Drawing Tools

### Pencil Tool (P)
- Draw individual pixels with left-click
- Draw continuously by dragging
- Use with Shift key to draw straight lines between points

### Eraser Tool (E)
- Remove pixels with left-click
- Erase continuously by dragging
- Works like the pencil but removes instead of adds

### Fill Tool (F)
- Flood-fill connected areas of the same or similar color
- Click on an area to fill it with the active color
- Only fills contiguous areas (pixels connected horizontally or vertically)

### Select Tool (M)
- Create rectangular selections
- Click and drag to define selection area
- Use with selection operations (copy, paste, cut)

## Selection Operations

### Copy (Ctrl+C / Cmd+C)
- Copies the current selection to the copy buffer
- Works only when there is an active selection
- Maintains transparency information

### Paste (Ctrl+V / Cmd+V)
- Pastes the contents of the copy buffer at the cursor position
- Creates a floating selection that can be moved before placing
- Click to finalize the paste operation

### Cut (Ctrl+X / Cmd+X)
- Combines copy and delete operations
- Copies the selection to the buffer and clears the selected area
- Useful for moving content within the canvas

## Grid Management

### Grid Controls
- Adjust grid width and height in the sidebar
- Toggle grid visibility with the grid button or G key
- Set pixel size and grid gap (spacing between pixels)

### Edge Controls
- Add/remove rows and columns using the buttons around the canvas edges
- Quick way to expand or contract the canvas in specific directions
- Maintains existing artwork while resizing

## Color Management

### Color Picker
- Select drawing colors using the color picker in the sidebar
- Adjust opacity using the slider beneath the color picker
- Recently used colors appear in the color history section

### Background Color
- Set the canvas background color separately from drawing colors
- Supports transparency for export with transparent backgrounds
- Toggle background inclusion during export

## Pixel Effects

### Pixel Shapes
- **Rectangle**: Standard rectangular pixels
- **Circle**: Circular pixels
- **Diamond**: Diamond-shaped pixels
- **Triangle**: Triangular pixels
- **Hexagon**: Hexagonal pixels
- **Custom**: Define your own pixel shape with SVG path data

### Corner Radius
- Add rounded corners to rectangular pixels
- Adjust radius for each corner independently
- Quick presets for common corner radius combinations

### Glow Effect
- Add a glow around pixels
- Customize glow properties:
  - Opacity: Glow transparency
  - Blur: Glow spread distance
  - Size: Overall glow size
  - Spread: Intensity distribution
  - Offset X/Y: Position the glow relative to pixels
  - Blend Mode: How the glow blends with other elements

### Bulb Effect
- Create a light-bulb-like illumination effect
- Customize properties:
  - Intensity: Brightness of the effect
  - Radius: Size of the illumination area
  - Position X/Y: Center point of the light source
  - Color: Color of the light
  - Blend Mode: How the light blends with the pixels

## History and Undo/Redo

### Undo (Ctrl+Z / Cmd+Z)
- Reverts the canvas to its previous state
- Multiple levels of undo supported
- Works for all drawing operations and grid changes

### Redo (Ctrl+Shift+Z / Cmd+Shift+Z)
- Restores previously undone actions
- Available after using undo
- Clears when new actions are performed after an undo

## Export Options

### Export Formats
- **SVG**: Scalable Vector Graphics format
- **PNG**: Raster format with transparency support
- **JPG**: Compressed raster format (no transparency)

### Export Settings
- Scale: Adjust the size of the exported image
- Include Grid: Option to include grid lines in export
- Include Background: Option to include background color
- Apply Effects: Include glow and other effects in export

## File Operations

### Save Project
- Save your work as a .pixelpop project file
- Preserves all settings, effects, and pixel data
- Can be loaded later to continue working

### Load Project
- Open previously saved .pixelpop files
- Restores the complete state of the project
- Includes grid dimensions, colors, and effects

### Import Image
- Import existing images as a starting point
- Automatically converts to pixel art
- Adjust resolution and color count during import

## Rendering Modes

### Canvas Renderer
- Better performance for large grids
- Default rendering mode for most operations
- More efficient for normal editing

### SVG Renderer
- Better quality for certain effects
- Superior export quality
- More precise rendering of custom shapes

## Touch Support

### Touch Drawing
- Draw on touch devices by tapping and dragging
- Multitouch gestures supported:
  - Pinch to zoom
  - Two-finger pan to move around
  - Double-tap for specific operations

### Mobile-Friendly Interface
- Responsive design adapts to different screen sizes
- Touch-optimized controls
- Automatic adjustment of interface elements for touch devices 