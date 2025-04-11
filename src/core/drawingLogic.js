/**
 * Creates a new grid with the specified pixel colored.
 * @param {Array<Array<string|null>>} grid The current pixel grid.
 * @param {number} x The x-coordinate of the pixel.
 * @param {number} y The y-coordinate of the pixel.
 * @param {string|null} color The color to apply.
 * @returns {Array<Array<string|null>>} A new grid instance with the pixel updated.
 */
export const applyPixelColor = (grid, x, y, color) => {
  // Check bounds
  if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) {
    return grid; // Return original grid if out of bounds
  }

  // Avoid mutation: Create a new grid and row
  const newGrid = grid.map(row => [...row]);
  
  // Only update if the color is different to prevent unnecessary re-renders
  if (newGrid[y][x] !== color) {
    newGrid[y][x] = color;
    return newGrid;
  }
  
  return grid; // Return original grid if color is the same
};

/**
 * Picks the color from the specified grid coordinates.
 * @param {Array<Array<string|null>>} grid The current pixel grid.
 * @param {number} x The x-coordinate.
 * @param {number} y The y-coordinate.
 * @returns {string|null} The color at the coordinates, or null if out of bounds or empty.
 */
export const pickColor = (grid, x, y) => {
  if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) {
    return null; // Out of bounds
  }
  return grid[y][x];
};

/**
 * Performs a flood fill on a grid.
 * @param {Array<Array<string|null>>} grid The current pixel grid.
 * @param {number} startX The starting x-coordinate.
 * @param {number} startY The starting y-coordinate.
 * @param {string|null} fillColor The color to fill with.
 * @returns {Array<Array<string|null>>} A new grid instance with the area filled, or the original grid if no change is needed.
 */
export const applyFill = (grid, startX, startY, fillColor) => {
  console.log(`[applyFill] Start: (${startX},${startY}), FillColor: ${fillColor}`); // Log Start
  const gridHeight = grid.length;
  if (gridHeight === 0) return grid;
  const gridWidth = grid[0].length;
  if (gridWidth === 0) return grid;

  // Check bounds for starting point
  if (startY < 0 || startY >= gridHeight || startX < 0 || startX >= gridWidth) {
    console.log("[applyFill] Start point out of bounds");
    return grid; 
  }

  const targetColor = grid[startY][startX];
  console.log(`[applyFill] Target Color: ${targetColor}`); // Log Target Color

  // If the target color is the same as the fill color, no work needed.
  if (targetColor === fillColor) {
    console.log("[applyFill] Target color matches fill color, no change.");
    return grid;
  }

  // Create a mutable copy of the grid for the fill operation
  const newGrid = grid.map(row => [...row]);
  
  // Stack for non-recursive flood fill
  const stack = [{ x: startX, y: startY }];
  let pixelsChanged = false;
  let iterations = 0; // Safety counter

  while (stack.length > 0) {
    iterations++;
    // Increase safety margin for iterations
    if (iterations > gridWidth * gridHeight * 4) { 
        console.error("[applyFill] Exceeded max iterations, breaking loop.");
        break;
    }
        
    const { x, y } = stack.pop();

    // Check bounds FIRST, then check if the current pixel matches the TARGET color
    if (y < 0 || y >= gridHeight || x < 0 || x >= gridWidth || newGrid[y][x] !== targetColor) {
      continue; // Skip if out of bounds or not the color we want to fill
    }

    // If we reach here, it's a valid pixel matching the target color.
    // Change its color:
    newGrid[y][x] = fillColor;
    if (!pixelsChanged) {
        console.log("[applyFill] First pixel change detected.");
        pixelsChanged = true; // Set flag on the first change
    }

    // Push valid neighbors onto the stack
    stack.push({ x: x + 1, y: y });
    stack.push({ x: x - 1, y: y });
    stack.push({ x: x, y: y + 1 });
    stack.push({ x: x, y: y - 1 });
  }

  console.log(`[applyFill] Finished. Pixels changed: ${pixelsChanged}, Iterations: ${iterations}`); // Log Finish & Iterations
  // Return the new grid only if pixels were actually changed
  return pixelsChanged ? newGrid : grid;
};

/**
 * Draws a line on the grid using Bresenham's line algorithm.
 * @param {Array<Array<string|null>>} grid The current pixel grid.
 * @param {number} x0 Starting x-coordinate.
 * @param {number} y0 Starting y-coordinate.
 * @param {number} x1 Ending x-coordinate.
 * @param {number} y1 Ending y-coordinate.
 * @param {string|null} color The color to draw the line with.
 * @returns {Array<Array<string|null>>} A new grid instance with the line drawn.
 */
export const applyLine = (grid, x0, y0, x1, y1, color) => {
  const gridHeight = grid.length;
  if (gridHeight === 0) return grid;
  const gridWidth = grid[0].length;
  if (gridWidth === 0) return grid;

  let currentGrid = grid;
  let pixelsChanged = false;

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;

  let currentX = x0;
  let currentY = y0;

  while (true) {
    // Apply color to the current point using applyPixelColor to handle bounds checks and immutability
    const nextGrid = applyPixelColor(currentGrid, currentX, currentY, color);
    if (nextGrid !== currentGrid) {
        pixelsChanged = true;
        currentGrid = nextGrid;
    }

    // Check if we've reached the end point
    if (currentX === x1 && currentY === y1) break;

    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      currentX += sx;
    }
    if (e2 < dx) {
      err += dx;
      currentY += sy;
    }
    
    // Safety break to prevent infinite loops in case of error
    if (Math.abs(currentX - x0) > dx * 2 || Math.abs(currentY - y0) > dy * 2) {
        console.error("Breaking line algorithm loop unexpectedly");
        break;
    }    
  }

  return currentGrid; // Return the final grid (might be the original if no pixels changed)
}; 