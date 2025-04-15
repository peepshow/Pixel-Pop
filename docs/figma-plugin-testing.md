# Testing the PixelPop Figma Plugin

This guide outlines how to test the PixelPop Figma plugin integration. Follow these steps to ensure proper functionality between the web app and Figma.

## Prerequisites

Before testing, ensure you have:

1. A local development setup of PixelPop
2. Figma Desktop App installed
3. All dependencies installed (`npm install`)

## Building the Plugin for Testing

1. Build the Figma plugin:
   ```bash
   npm run build:figma
   ```
   This will compile the plugin code into the dist directory.

2. For development with auto-reload:
   ```bash
   npm run dev:figma
   ```

3. The build process creates:
   - `figma-plugin/dist/code.js` - The Figma plugin code
   - `figma-plugin/dist/ui.html` - The plugin UI

## Installing the Plugin in Figma

1. Open the Figma Desktop App
2. Create a new design file or open an existing one
3. Right-click in the canvas and select **Plugins > Development > Import plugin from manifest...**
4. Navigate to your PixelPop project directory and select `figma-plugin/manifest.json`
5. The plugin should now appear in your Development plugins list

## Testing Standalone Plugin

Test the basic functionality of the plugin in Figma:

1. In Figma, go to **Plugins > Development > PixelPop**
2. The plugin UI should load in a panel
3. Verify the UI appears correctly with:
   - Clear instructions
   - Textarea for pasting data
   - "Process Pasted Data" button
   - "Import Test Data" button
4. Test the "Import Test Data" button - it should create a heart shape in Figma
5. Test the "Close Plugin" button - it should close the plugin panel

## Testing Web App to Figma Integration

To test the export from the web app to Figma:

1. Run the PixelPop web app:
   ```bash
   npm run dev
   ```

2. Create a pixel art piece in the web app
   - Draw some pixels using the Pencil tool
   - Try different colors and patterns
   - Include transparent/semi-transparent pixels if possible

3. Export to Figma:
   - Click the Export button in the toolbar
   - In the Export modal, select "Export to Figma"
   - This should copy the pixel data to your clipboard
   - A confirmation message should appear

4. Import to Figma:
   - Open the PixelPop plugin in Figma
   - Paste (Ctrl/Cmd+V) the copied data into the textarea
   - Click the "Process Pasted Data" button
   - Verify that the pixel art appears in Figma as a frame containing rectangles
   - Check that colors and transparency are preserved correctly

## Testing Color and Transparency

To specifically test color and transparency handling:

1. Create a pixel art with various color formats:
   - Solid colors (#RGB or #RRGGBB)
   - Colors with transparency (rgba or #RGBA or #RRGGBBAA)
   - Different levels of opacity

2. Export to Figma and verify that:
   - All colors appear correctly
   - Transparency levels are preserved
   - No black rectangles appear where colored ones should be

## Troubleshooting

If the plugin doesn't appear in Figma:
- Make sure the `manifest.json` is correctly formatted
- Check that the build process completed successfully (no errors in console)
- Ensure the `dist` directory contains the compiled `code.js` and `ui.html` files

If the textarea doesn't appear in the plugin:
- Check that the build is looking at the right source file (src/ui.html)
- Verify that the vite.config.js is correctly configured
- Rebuild the plugin and reload in Figma

If color or transparency isn't working:
- Check the color parsing function in code.ts
- Test with different color formats to isolate the issue
- Look for errors in the Figma console (accessible from the plugin menu)

## Development Tips

1. Use live reloading with Vite:
   ```bash
   npm run dev:figma
   ```

2. Monitor the console output for both:
   - The Figma plugin console (accessible via the plugin menu > "Open Console")
   - Your web browser's console when testing the web app

3. After making changes to the plugin code:
   - The code will automatically rebuild if using dev:figma
   - In Figma, you'll need to refresh the plugin by right-clicking and selecting "Run Last Plugin" (or use Ctrl+Alt+P)

4. If updating the UI layout:
   - Consider adjusting the height in code.ts if content is being cut off
   - The current height is set to 700px, which should be sufficient for most content

## Next Steps

After successful testing, consider implementing:

1. Support for more pixel shapes (currently supports square, rounded, and circle)
2. Additional options for export, such as creating components or auto-layout frames
3. Performance optimizations for very large pixel art pieces

---

Report any issues or suggestions for improvement to the PixelPop development team. 