import { useState, useCallback } from 'react';

// Initial grid creation logic (can be moved to a util if needed)
const createInitialGrid = (width, height) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid[i] = new Array(width).fill(null);
  }
  return grid;
};

export const useArtworkState = (initialWidth = 32, initialHeight = 32, setLastActionType) => {
  // Rename the internal setter
  const [gridDimensions, setInternalGridDimensions] = useState({ width: initialWidth, height: initialHeight });
  const [pixelGrid, setPixelGrid] = useState(() => createInitialGrid(initialWidth, initialHeight));
  const [pixelSize, setPixelSize] = useState(24);
  const [gridGap, setGridGap] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('rgba(240, 240, 240, 1)'); // Default background

  // Callback to handle dimension changes, ENSURING GRID RESETS
  const updateGridDimensions = useCallback((newWidth, newHeight) => {
    setInternalGridDimensions({ width: newWidth, height: newHeight });
    // Reset pixelGrid when dimensions change via this specific function
    setPixelGrid(createInitialGrid(newWidth, newHeight)); 
    if (setLastActionType) setLastActionType('grid_reset'); // Notify reset if needed
  }, [setLastActionType]);

  // NEW: Callback to handle dimension changes WHILE PRESERVING CONTENT
  const resizeGrid = useCallback((newWidth, newHeight) => {
    const oldWidth = gridDimensions.width;
    const oldHeight = gridDimensions.height;

    if (newWidth === oldWidth && newHeight === oldHeight) return; // No change

    const newGrid = Array(newHeight).fill(null).map(() => Array(newWidth).fill(null));

    // Copy existing content
    const copyWidth = Math.min(oldWidth, newWidth);
    const copyHeight = Math.min(oldHeight, newHeight);

    for (let y = 0; y < copyHeight; y++) {
      for (let x = 0; x < copyWidth; x++) {
        newGrid[y][x] = pixelGrid[y]?.[x] || null;
      }
    }

    setInternalGridDimensions({ width: newWidth, height: newHeight });
    setPixelGrid(newGrid);
    if (setLastActionType) setLastActionType('grid_change'); // Notify resize for history

  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions, setLastActionType]);

  return {
    gridDimensions,
    setGridDimensions: updateGridDimensions, // Wrapper that resets grid
    resizeGrid, // <<< Export the new resizing function
    setInternalGridDimensions, // Direct setter without reset
    pixelGrid,
    setPixelGrid,
    pixelSize,
    setPixelSize,
    gridGap,
    setGridGap,
    backgroundColor,
    setBackgroundColor,
  };
}; 