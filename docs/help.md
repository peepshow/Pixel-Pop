## PixelPop Help

Welcome to PixelPop! Here's a quick guide to help you get started with creating pixel art.

### 1. Getting Started

*   **Interface Overview:**
    *   **Navbar** Set your file name, import images, save and load PixelPop projects, and export options.
    *   **Canvas:** The main area where you create your art.
    *   **Sidebar:** Contains primary tools and controls for colors, grid settings, effects and rendering options.
*   **Creating a New Canvas:** When you start, you'll have a default 32x32px canvas. You can adjust its size and the size using the Grid Controls in the sidebar or the edge controls around the canvas.

### 2. Drawing Basics

*   **Pencil Tool (P):** Click to draw single pixels, or click and drag to draw lines. Hold `Shift` while clicking two points to draw a straight line between them.
*   **Eraser Tool (E):** Click or drag to remove pixels.
*   **Fill Tool (F):** Click on an area of connected pixels of the same color to fill it with the currently selected color.
*   **Selecting Colors:** Use the Color Picker in the sidebar. You can also adjust the opacity (transparency) using the slider below the picker. Recently used colors are shown below.

### 3. Working with the Canvas

*   **Resizing:**
    *   Use the `Width` and `Height` inputs in the sidebar's Grid Controls section.
    *   Click the `+`/`-` buttons on the edges of the canvas to add or remove single rows/columns.
*   **Grid:**
    *   Toggle grid line visibility using the Grid button or the `G` key.
    *   Adjust `Pixel Size` and `Grid Gap` (spacing between pixels) in the sidebar.
*   **Zooming & Panning:**
    *   Use the zoom buttons or your mouse wheel to zoom in/out.
    *   On touch devices, use pinch-to-zoom.
    *   Pan around the canvas by middle-mouse-dragging or using two-finger drag on touch devices.

### 4. Selection and Editing

*   **Select Tool (M):** Click and drag to draw a rectangular selection box.
*   **Copy (Ctrl/Cmd+C):** Copies the pixels inside the selection.
*   **Cut (Ctrl/Cmd+X):** Copies the selected pixels and then removes them from the canvas.
*   **Click:** Pastes the copied pixels onto the canvas. You can paste repeatadly. 

### 5. Adding Effects

PixelPop offers several visual effects, adjustable in the sidebar:

*   **Pixel Shapes:** Change pixels from squares to circles, diamonds, etc. Even add custom SVG code to create your own shapes
*   **Corner Radius:** Round the corners of square pixels.
*   **Glow/Bulb:** Add glow or light-bulb effects around pixels.

*(For detailed settings, explore the 'Effects' section in the sidebar)*

### 6. Saving, Loading, and Exporting

*   **Saving Projects:** Use `File > Save Project` to save your entire work (grid, pixels, effects) as a `.pixelpop` file.
*   **Loading Projects:** Use `File > Load Project` to open a saved `.pixelpop` file.
*   **Importing Images:** Use `File > Import Image` to bring an existing image onto the canvas (it will be pixelated).
*   **Exporting Your Art:**
    *   Go to the `Export` section in the sidebar or use `File > Export`.
    *   Choose a format: `SVG` (scalable vector), `PNG` (raster with transparency), or `JPG` (compressed raster).
    *   Adjust options like `Scale`, whether to `Include Grid`, `Include Background`, or `Apply Effects`.

### 7. Troubleshooting Common Issues

*   **Drawing tools not working?**
    *   Ensure the correct tool is selected in the toolbar.
    *   Check that your selected color isn't the same as the background or completely transparent.
    *   Make sure you are clicking/dragging *inside* the canvas grid area.
*   **Canvas blank or not updating?**
    *   Try switching between the `Canvas` and `SVG` renderers (often in Settings or a dedicated button).
    *   Check if grid dimensions or pixel size/gap are set to zero or invalid values.
    *   Look for errors in your browser's developer console (usually F12).
*   **Export problems?**
    *   Double-check your export settings (format, scale, included elements).
    *   Try exporting in a different format (e.g., PNG instead of SVG).
    *   Look for errors in the browser console during the export attempt.
*   **Undo/Redo not working as expected?**
    *   Remember that performing a new action after undoing will clear the "redo" history.
    *   If it consistently fails, check the browser console for errors.

*(For more detailed troubleshooting, please refer to the full [Troubleshooting Guide](./troubleshooting.md))* 