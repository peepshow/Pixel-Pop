# Pixel Pop

Pixel Pop is a web-based pixel art creation tool built using React and Vite. It provides a rich set of features for creating and editing pixel art, including:

- Drawing, erasing, and filling pixels
- Color picker and color history
- Multiple pixel shapes (rectangle, circle, diamond, triangle, hexagon, custom)
- Special effects (glow, bulb)
- Export as PNG, JPG, or SVG
- Save and load projects

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Multiple Renderers**: Switch between Canvas and SVG rendering
- **Grid Controls**: Easily resize the pixel grid and adjust pixel size
- **Flexible Tools**: Pencil, eraser, fill bucket, and color picker
- **Special Effects**: Add glow and bulb effects to your pixel art
- **Custom Shapes**: Create your own pixel shapes with the shape editor
- **Export Options**: Export your art with customizable settings
- **Keyboard Shortcuts**: Increase productivity with keyboard shortcuts

## Testing

PixelPop includes a comprehensive test suite using Vitest and React Testing Library.

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

For more details on testing, see the [Testing Documentation](./src/test/README.md).

## Project Structure

- `src/components/`: React components
- `src/hooks/`: Custom React hooks
- `src/core/`: Core application logic
- `src/utils/`: Utility functions
- `src/styles/`: Global styles
- `src/test/`: Test configuration and documentation

## License

[MIT License](LICENSE)
