/**
 * Convert hex color string to rgba string.
 * @param {string} hex - Hex color string (e.g., #RRGGBB or #RGB).
 * @param {number} [alpha=1] - Alpha value (0-1).
 * @returns {string} RGBA color string.
 */
export const hexToRgba = (hex, alpha = 1) => {
  let cleanHex = hex.charAt(0) === '#' ? hex.substring(1) : hex;
  
  // Handle shorthand hex (#RGB)
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  // Ensure alpha is within valid range
  const validAlpha = Math.max(0, Math.min(1, alpha));
  
  return `rgba(${r}, ${g}, ${b}, ${validAlpha})`;
};

/**
 * Convert rgba color string to hex color string (#RRGGBB).
 * Ignores the alpha channel.
 * @param {string} rgba - RGBA color string (e.g., rgba(r, g, b, a)).
 * @returns {string} Hex color string (#RRGGBB).
 */
export const rgbaToHex = (rgba) => {
  const match = rgba.match(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?(\d*\.?\d+))?\)/);
  if (!match) return '#000000'; // Return black on invalid input
  
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Gets the opacity value from an rgba string.
 * @param {string} rgba - RGBA color string.
 * @returns {number} Opacity value (0-1), defaults to 1 if alpha is missing.
 */
export const getRgbaOpacity = (rgba) => {
  const match = rgba.match(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?(\d*\.?\d+))?\)/);
  return match && match[4] !== undefined ? parseFloat(match[4]) : 1;
};

/**
 * Updates the opacity (alpha) value in an rgba or rgb color string, or converts hex to rgba.
 * @param {string} color - Input color string (rgba, rgb, or hex).
 * @param {number} opacity - New opacity value (0-1).
 * @returns {string} RGBA color string with updated opacity.
 */
export const updateRgbaOpacity = (color, opacity) => {
  const validOpacity = Math.max(0, Math.min(1, opacity));
  if (color.startsWith('rgba')) {
    return color.replace(/rgba\((\d+), ?(\d+), ?(\d+)(?:, ?[\d\.]+)?\)/, `rgba($1, $2, $3, ${validOpacity})`);
  } else if (color.startsWith('rgb')) {
    return color.replace(/rgb\((\d+), ?(\d+), ?(\d+)\)/, `rgba($1, $2, $3, ${validOpacity})`);
  } else if (color.startsWith('#')) {
    return hexToRgba(color, validOpacity);
  }
  // Return original color if format is unrecognized
  return color; 
};

// Function to convert RGB values to Hex format
export const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16); // Ensure integer before converting
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}; 