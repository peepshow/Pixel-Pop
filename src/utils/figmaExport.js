/**
 * Utility functions for exporting PixelPop pixel art to Figma
 */

/**
 * Determines if the Export to Figma option should be shown.
 * In production, this would check if we're in a Figma environment,
 * but for now it always returns true to allow testing.
 * @returns {boolean} True if the Export to Figma option should be shown
 */
export const isRunningInFigma = () => {
  // Always return true to enable the Figma export button in the UI
  return true;
};

/**
 * Formats pixel grid data for export to Figma
 * @param {Array} pixelGrid - 2D array of pixel colors (null for transparent)
 * @param {Object} options - Export options
 * @param {Object} options.gridDimensions - Width and height of the grid in pixels
 * @param {number} options.pixelSize - Size of each pixel in px
 * @param {number} options.gridGap - Gap between pixels in px
 * @param {string} options.pixelShape - Shape of pixels ('square', 'circle', 'rounded', 'custom')
 * @param {number} options.cornerRadius - Corner radius for rounded pixels
 * @param {boolean} options.glowEnabled - Whether glow effect is enabled
 * @param {Object} options.glowSettings - Glow effect settings
 * @returns {Object} Formatted data ready for Figma export
 */
export const formatPixelDataForFigma = (pixelGrid, options) => {
  const {
    gridDimensions,
    pixelSize,
    gridGap,
    pixelShape = 'square',
    cornerRadius = 0,
    glowEnabled = false,
    glowSettings = {}
  } = options;

  // Calculate the actual size of each grid cell (pixel + gap)
  const cellSize = pixelSize + gridGap;
  
  return {
    grid: pixelGrid,
    width: gridDimensions.width,
    height: gridDimensions.height,
    pixelSize,
    gridGap,
    pixelShape,
    cornerRadius,
    glowEnabled,
    glowSettings,
    totalWidth: gridDimensions.width * cellSize - gridGap,
    totalHeight: gridDimensions.height * cellSize - gridGap
  };
};

/**
 * Exports pixel art to Figma via clipboard
 * @param {Array} pixelGrid - 2D array of pixel colors (null for transparent)
 * @param {Object} options - Export options
 * @returns {Promise} Promise that resolves when data is copied to clipboard
 */
export const exportToFigma = (pixelGrid, options) => {
  return new Promise((resolve, reject) => {
    try {
      // Format the data for Figma
      const figmaData = formatPixelDataForFigma(pixelGrid, options);
      
      // Convert to JSON string with nice formatting for better readability
      const jsonString = JSON.stringify(figmaData, null, 2);
      
      // Create a prefixed string to identify this as PixelPop data
      const clipboardContent = `PIXELPOP_FIGMA_DATA:${jsonString}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(clipboardContent)
        .then(() => {
          console.log('Pixel art data copied to clipboard');
          resolve({ 
            success: true,
            message: 'Pixel art data copied to clipboard. Paste in the PixelPop Figma plugin.'
          });
        })
        .catch(error => {
          console.error('Failed to copy to clipboard:', error);
          reject(new Error('Failed to copy to clipboard. Please try again.'));
        });
    } catch (error) {
      reject(error);
    }
  });
};

// Export all functions as named exports
export default {
  isRunningInFigma,
  formatPixelDataForFigma,
  exportToFigma
}; 