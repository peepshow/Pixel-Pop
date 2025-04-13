/**
 * Calculates all integer coordinates for a line between two points
 * using Bresenham's line algorithm.
 * Handles all slopes (horizontal, vertical, diagonal, and others).
 *
 * @param {number} x0 Starting x-coordinate.
 * @param {number} y0 Starting y-coordinate.
 * @param {number} x1 Ending x-coordinate.
 * @param {number} y1 Ending y-coordinate.
 * @returns {Array<{x: number, y: number}>} An array of coordinate objects {x, y}
 * representing the pixels on the line.
 */
export const getLinePixels = (x0, y0, x1, y1) => {
  const pixels = [];
  const dx = Math.abs(x1 - x0);
  const dy = -Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx + dy; // error value e_xy
  let x = x0;
  let y = y0;

  while (true) {
    pixels.push({ x, y });

    if (x === x1 && y === y1) break;

    const e2 = 2 * err;
    if (e2 >= dy) { // e_xy+e_x >= 0
      if (x === x1) break; // Prevent overshoot if endpoint reached on x step
      err += dy;
      x += sx;
    }
    if (e2 <= dx) { // e_xy+e_y <= 0
      if (y === y1) break; // Prevent overshoot if endpoint reached on y step
      err += dx;
      y += sy;
    }
  }

  return pixels;
}; 