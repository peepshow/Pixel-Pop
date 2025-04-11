/**
 * Utility functions for handling filenames with dimensions
 */

/**
 * Appends dimensions to a filename in the format "filename_WIDTHxHEIGHT"
 * @param {string} name - The base filename
 * @param {number} width - The width dimension
 * @param {number} height - The height dimension
 * @returns {string} The formatted filename with dimensions
 */
export const formatFilenameWithDimensions = (name, width, height) => {
  // Remove any existing dimensions
  const baseName = name.replace(/_\d+x\d+$/, '');
  return `${baseName}_${width}x${height}`;
};

/**
 * Removes the dimensions suffix from a filename
 * @param {string} name - The filename with dimensions
 * @returns {string} The filename without dimensions
 */
export const stripDimensionsFromFilename = (name) => {
  return name.replace(/_\d+x\d+$/, '');
};

/**
 * Extracts dimensions from a filename
 * @param {string} name - The filename with dimensions
 * @returns {Object|null} An object with width and height, or null if no dimensions found
 */
export const getDimensionsFromFilename = (name) => {
  const match = name.match(/_(\d+)x(\d+)$/);
  if (match) {
    return {
      width: parseInt(match[1]),
      height: parseInt(match[2])
    };
  }
  return null;
}; 