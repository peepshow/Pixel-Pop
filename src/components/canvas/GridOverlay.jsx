import React from 'react';
import styled from 'styled-components';

const GridOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
  opacity: ${props => props.$showGrid ? 1 : 0};
  transition: opacity 0.2s ease;
`;

/**
 * GridOverlay component - shows grid lines as a separate layer
 * This is a performance optimization to avoid redrawing grid lines with each pixel update
 */
const GridOverlay = React.forwardRef(({ showGrid }, ref) => {
  return (
    <GridOverlayContainer ref={ref} $showGrid={showGrid}>
      {/* Grid lines are now rendered in the renderers for better alignment */}
    </GridOverlayContainer>
  );
});

export default GridOverlay; 