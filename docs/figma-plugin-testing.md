# Testing the PixelPop Figma Plugin

This guide outlines how to test the PixelPop Figma plugin integration. Follow these steps to ensure proper functionality between the web app and Figma.

## Prerequisites

Before testing, ensure you have:

1. A local development setup of PixelPop
2. Figma Desktop App installed
3. All dependencies installed (`npm install`)

## Building the Plugin for Testing

1. Start the development build for the Figma plugin:
   ```bash
   npm run dev:figma
   ```
   This will compile the plugin code and watch for changes.

2. The build process uses Vite to create:
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
3. Verify the placeholder UI appears correctly
4. Test the "Test Notification" button - it should show a notification in Figma
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

3. Export to Figma:
   - Click the Export button in the toolbar
   - In the Export modal, look for the "Export to Figma" button
   - If it's not visible, make sure you're testing with the modified code

4. If the "Export to Figma" button is not visible, you can simulate the Figma environment:
   - Temporarily add this code to `index.html` in the head section:
     ```html
     <script>
       window.figmaIntegration = {
         exportToFigma: function(data) { 
           console.log('Figma export data:', data);
           alert('Export to Figma triggered with data. Check console.');
         },
         isFigmaPlugin: true
       };
     </script>
     ```
   - Refresh the page and try exporting again

5. With the Figma plugin properly set up, the export process should:
   - Send pixel data to the Figma plugin
   - Create a frame in Figma with rectangles for each pixel
   - Match colors and positions from the web app

## Troubleshooting

If the plugin doesn't appear in Figma:
- Make sure the `manifest.json` is correctly formatted
- Check that the build process completed successfully (no errors in console)
- Ensure the `dist` directory contains the compiled `code.js` and `ui.html` files

If the export button doesn't appear:
- Check that the `figmaExport.js` utility is correctly imported
- Verify that the detection logic for the Figma environment is working
- Look for errors in the browser console

If the export fails:
- Check browser console for error messages
- Verify that the data format matches what the plugin expects
- Make sure the communication channel between the web app and plugin is working

## Development Tips

1. Use live reloading with Vite:
   ```bash
   npm run dev:figma
   ```

2. Monitor the console output for both:
   - The Figma plugin console (accessible via Figma's developer tools)
   - Your web browser's console when testing the web app

3. After making changes to the plugin code:
   - The code will automatically rebuild thanks to Vite's watch mode
   - In Figma, you'll need to refresh the plugin by right-clicking and selecting "Run Last Plugin" (or use Ctrl+Alt+P)

## Next Steps

After successful testing, consider implementing:

1. Two-way communication - allow importing from Figma back to PixelPop
2. Support for larger pixel art grids (optimization)
3. Advanced Figma feature integration (components, variants, etc.)

---

Report any issues or suggestions for improvement to the PixelPop development team. 