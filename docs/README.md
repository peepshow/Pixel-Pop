# PixelPop Documentation

PixelPop is a powerful pixel art creation tool that enables users to create, edit, and export pixel art with various tools and effects.

## Documentation Contents

This documentation is organized into several sections for easy navigation:

1. [Core Architecture](./architecture.md) - Overview of the component structure and state management
2. [Features Guide](./features.md) - Detailed description of all available features
3. [Implementation Details](./implementation.md) - Technical details about rendering, events, and coordinate systems
4. [Extending PixelPop](./extending.md) - Guide for adding new tools and features
5. [Troubleshooting](./troubleshooting.md) - Common issues and solutions

## Getting Started

PixelPop uses React with a combination of Canvas and SVG rendering to provide a flexible and powerful pixel art editor. The application is built with a component-based architecture that separates concerns between the UI, rendering, and state management.

### Key Components Overview

- **Canvas System**: Handles drawing, zooming, and panning
- **Tool System**: Manages different interaction modes (draw, erase, fill, select)
- **Effects System**: Applies visual effects to pixels (glow, shapes, etc.)
- **History System**: Provides undo/redo capabilities
- **Export System**: Allows saving artwork in various formats

### Technology Stack

- React for UI and state management
- Canvas and SVG for rendering
- Styled Components for styling
- React Zoom Pan Pinch for transformations

See the individual documentation pages for more detailed information on each aspect of the application. 