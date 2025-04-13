import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the marching ants animation
const marchingAnts = keyframes`
  to {
    stroke-dashoffset: -8; // Adjust based on dash array length
  }
`;

// Styled component for the overlay div
const SelectionRect = styled.div`
  position: absolute;
  border: 1px dashed white;
  box-shadow: 0 0 0 1px black; // Create an inner black border for contrast
  pointer-events: none; // Allow clicks to pass through to the canvas
  mix-blend-mode: difference; // Helps visibility on different backgrounds
  stroke-dasharray: 4 4; // Dashed line pattern (4px line, 4px gap)
  animation: ${marchingAnts} 0.5s linear infinite;
  z-index: 10; // Ensure it's above the canvas content but below UI elements
`;

const SelectionOverlay = ({ 
  selectionArea, // { x1, y1, x2, y2 } in grid coordinates
  gridDimensions, // { width, height }
  pixelSize, 
  gridGap,
  zoomScale = 1 // Current zoom scale from react-zoom-pan-pinch
}) => {

  const styles = useMemo(() => {
    if (!selectionArea) return { display: 'none' };

    const { x1, y1, x2, y2 } = selectionArea;
    
    // Calculate dimensions in pixels, including gaps
    const cellSize = pixelSize + gridGap;
    const left = x1 * cellSize;
    const top = y1 * cellSize;
    const width = (x2 - x1 + 1) * cellSize;
    const height = (y2 - y1 + 1) * cellSize;
    
    // Adjust border based on zoom scale to maintain visibility
    // For simplicity, we'll use mix-blend-mode and box-shadow mostly
    // const borderWidth = Math.max(1, 1 / zoomScale);

    return {
      display: 'block',
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
      // border: `${borderWidth}px dashed white` // Adjusting border dynamically can be tricky
    };
  }, [selectionArea, pixelSize, gridGap, zoomScale]);

  if (!selectionArea) {
    return null;
  }

  return <SelectionRect style={styles} />;
};

export default React.memo(SelectionOverlay); 