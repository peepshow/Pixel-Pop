# PixelPop Figma Plugin

A Figma plugin for importing pixel art created with the PixelPop web application.

## Overview

This plugin allows you to bring your pixel art creations from the [PixelPop Web App](https://peepshow.github.io/pixel-pop) directly into Figma as vector objects. Each pixel becomes a rectangle in Figma, allowing for further customization in your designs.

## Features

- **Import from PixelPop**: Export your pixel art from PixelPop and paste it directly into the plugin
- **Test Import**: Try the plugin with a sample pixel art heart
- **Preserve Properties**: Maintains pixel colors, positions, and relative sizes
- **Vector Output**: Creates each pixel as a rectangle that can be further modified in Figma

## How to Use

1. Create your pixel art in the [PixelPop Web App](https://peepshow.github.io/pixel-pop)
2. Click the Export button in the toolbar
3. Choose "Export to Figma" in the export dialog
4. The pixel art data is copied to your clipboard
5. Open the PixelPop plugin in Figma
6. Paste the data (Ctrl/Cmd+V) into the textarea
7. Click the "Process Pasted Data" button
8. Your pixel art will appear in your Figma design as a frame containing rectangles

## Development

### File Structure

- `src/code.ts` - The plugin's main code that runs in Figma
- `src/ui/` - The UI components and code
  - `index.html` - The HTML structure for the plugin UI
  - `ui.js` - The JavaScript code for the UI functionality

### Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Build the plugin with `npm run figma:build`
4. In Figma desktop app, go to Plugins > Development > Import plugin from manifest
5. Select the `manifest.json` file from the `figma-plugin` directory

### Development Workflow

- Run `npm run dev:figma` to start a development build with auto-reload
- Make changes to the UI in `src/ui/` files
- Make changes to the plugin code in `src/code.ts`
- The build will update automatically

## License

This plugin is part of the PixelPop project and is licensed under the MIT License. 