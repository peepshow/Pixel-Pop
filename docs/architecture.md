# Core Architecture

PixelPop is built with a modular React component architecture that separates concerns between rendering, UI controls, and state management.

## Component Structure

### Top-Level Components

- **App.jsx**: Main application container that manages global state and coordinates interactions between components
- **Canvas.jsx**: Core drawing surface with zoom/pan capabilities using react-zoom-pan-pinch
- **Sidebar.jsx**: Controls panel for tools, settings, and effects with multiple sections
- **Header.jsx**: Application header with file operations and menu

### Rendering System

PixelPop supports two rendering methods that can be switched at runtime:

- **CanvasRenderer.jsx**: Canvas-based rendering implementation
  - Better performance for large grids
  - More efficient for frequent updates
  - Simpler implementation for basic features
  
- **SVGRenderer.jsx**: SVG-based rendering implementation
  - Better for effects and visual quality
  - More precise scaling
  - Superior export quality
  
Both renderers implement the same interface and are interchangeable.

### UI Component Hierarchy

```
App
├── Header
│   ├── Title
│   └── NavMenu
├── MainContent
│   ├── Sidebar
│   │   ├── ToolSection
│   │   ├── ColorSection
│   │   ├── GridSettings
│   │   └── EffectsSection
│   └── CanvasWrapper
│       ├── Canvas
│       │   ├── CanvasRenderer or SVGRenderer
│       │   ├── GridOverlay
│       │   └── SelectionOverlay
│       └── GridEdgeControls
└── Modals (as needed)
    ├── ExportModal
    ├── CustomShapeModal
    └── ImageCropModal
```

## State Management

PixelPop uses React's built-in state management with useState, useCallback, and useRef. The state is organized into several key categories:

### Core State Categories

1. **Pixel Grid State**
   - `pixelGrid`: 2D array representing the artwork
   - `gridDimensions`: Width and height of the grid
   - `pixelSize`: Size of each pixel in px
   - `gridGap`: Gap between pixels in px

2. **Tool State**
   - `activeTool`: Current selected tool (pencil, eraser, fill, select)
   - `activeColor`: Current color for drawing
   - `colorHistory`: Recently used colors

3. **UI State**
   - `mode`: Current mode (edit, preview)
   - `showGrid`: Grid visibility toggle
   - `rendererType`: Current renderer ('canvas' or 'svg')

4. **Selection State**
   - `selectionArea`: Current selection coordinates
   - `copyBuffer`: Copied pixel data

5. **Effects State**
   - `cornerRadius`: Corner radius settings
   - `glowEnabled` & `glowSettings`: Glow effect state
   - `bulbEnabled` & `bulbSettings`: Bulb effect state
   - `pixelShape`: Shape of pixels (rectangle, circle, etc.)

6. **History State**
   - `history`: Stack of previous states for undo
   - `redoStack`: Stack of undone states for redo

## Data Flow

1. **User Interaction**: User interacts with the canvas or sidebar
2. **Event Handling**: Events are captured by specific components
3. **State Updates**: App component updates relevant state
4. **Rendering**: Changes flow down to child components through props
5. **Visual Feedback**: UI updates to reflect the new state

## Props Passing Pattern

PixelPop follows a consistent pattern for props passing:

- **Data props**: Current state values
- **Handler props**: Callback functions for state changes
- **Configuration props**: Settings that affect behavior

## Custom Hooks

Several custom hooks are used to encapsulate related functionality:

- **useHistory**: Manages undo/redo functionality
- **useColorManagement**: Handles color selection and history
- **useEffectState**: Manages pixel effect settings
- **useRendererProps**: Creates props objects for renderers

## File Structure

```
pixel-pop/
├── src/
│   ├── components/
│   │   ├── canvas/             # Drawing-related components
│   │   │   ├── Canvas.jsx      # Main canvas container
│   │   │   ├── CanvasRenderer.jsx
│   │   │   ├── SVGRenderer.jsx
│   │   │   ├── GridOverlay.jsx
│   │   │   └── SelectionOverlay.jsx
│   │   ├── sidebar/            # UI control components
│   │   │   └── Sidebar.jsx
│   │   └── modals/             # Modal dialogs
│   │       ├── ExportModal.jsx
│   │       └── CustomShapeModal.jsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── useHistory.js
│   │   └── useEffectState.js
│   ├── utils/                  # Utility functions
│   │   ├── colorUtils.js
│   │   └── fileUtils.js
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Entry point
└── package.json
``` 