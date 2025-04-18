import { useEffect, useRef, memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { hexToRgba } from '../../utils/colorUtils';
import {
  drawRoundedPixel,
  drawCirclePixel,
  drawDiamondPixel,
  drawTrianglePixel,
  drawHexagonPixel,
  drawGrid,
  drawGlowingPixel,
  drawGlowLayer,
  drawCrispPixel,
  drawBulbEffect,
  getBulbGradient,
  drawCustomShape,
  drawPixel,
  bulbGradientCache
} from '../../utils/canvasEffects';

// Optimize canvas rendering styles
const CanvasContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  touch-action: none; /* Disable browser touch behaviors */
`;

const CanvasElement = styled.canvas`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: crisp-edges;
  touch-action: none; // Prevent touch scrolling while drawing
  background-color: ${props => props.$backgroundColor || 'rgba(240, 240, 240, 1)'};
  pointer-events: auto; // Ensure mouse events are captured
`;

// Memoize the component to prevent unnecessary re-renders
const CanvasRenderer = memo(({
  gridWidth,
  gridHeight,
  pixelSize,
  gridGap,
  pixelData,
  showGrid,
  isDrawing,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onMouseMove,
  style,
  cornerRadius,
  glowEnabled,
  glowSettings,
  bulbEnabled,
  bulbSettings,
  mode,
  interactionSettings,
  pixelShape = 'rectangle',
  customShape,
  backgroundColor = '#f0f0f0',
  activeMode,
  spaceKeyPressed = false
}) => {
  const canvasRef = useRef(null);
  const offscreenCanvasRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const pixelSizeRef = useRef(pixelSize);
  const gridGapRef = useRef(gridGap);
  
  // Store previous values to detect changes
  const prevPixelSizeRef = useRef(pixelSize);
  const prevGridGapRef = useRef(gridGap);
  const prevGridWidthRef = useRef(gridWidth);
  const prevGridHeightRef = useRef(gridHeight);

  // Initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
  }, []);

  // Export function
  const exportPNG = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary canvas for export
    const exportCanvas = document.createElement('canvas');
    const exportCtx = exportCanvas.getContext('2d', { alpha: true });
    
    // Set dimensions to match the grid
    exportCanvas.width = gridWidth * (pixelSize + gridGap) - gridGap;
    exportCanvas.height = gridHeight * (pixelSize + gridGap) - gridGap;
    
    // Copy the current canvas content
    exportCtx.drawImage(canvas, 0, 0);
    
    // Convert to PNG with full quality
    const dataURL = exportCanvas.toDataURL('image/png', 1.0);
    
    // Create download link
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = dataURL;
    link.click();
  }, [gridWidth, gridHeight, pixelSize, gridGap]);

  // Expose export function to parent
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.exportPNG = exportPNG;
    }
  }, [exportPNG]);

  // Main render function (simplified example, actual structure might differ)
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Background color
    ctx.fillStyle = backgroundColor || 'rgba(0,0,0,0)'; // Use prop or transparent
    ctx.fillRect(0, 0, width, height);

    // Draw Grid if enabled
    if (showGrid) {
      drawGrid(ctx, width, height, gridWidth, gridHeight, pixelSize, gridGap);
    }

    const cellSize = pixelSize + gridGap;

    // --- Glow Rendering Pass --- 
    if (glowEnabled) {
        console.log('[CanvasRenderer] Rendering glow effect with settings:', glowSettings);
        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                const color = pixelData[y]?.[x];
                if (color) {
                    const xPos = x * cellSize + (gridGap / 2);
                    const yPos = y * cellSize + (gridGap / 2);
                    drawGlowLayer(ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius, pixelShape);
                }
            }
        }
    } else {
        console.log('[CanvasRenderer] Glow effect is disabled');
    }

    // --- Crisp Pixel Rendering Pass --- 
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const color = pixelData[y]?.[x];
            if (color) {
                const xPos = x * cellSize + (gridGap / 2);
                const yPos = y * cellSize + (gridGap / 2);
                drawCrispPixel(ctx, xPos, yPos, pixelSize, color, cornerRadius, pixelShape);
            }
        }
    }
    
    // --- Bulb Effect Rendering Pass --- 
    if (bulbEnabled) {
      for (let y = 0; y < gridHeight; y++) {
          for (let x = 0; x < gridWidth; x++) {
               const color = pixelData[y]?.[x];
               if (color) { 
                   const xPos = x * cellSize + (gridGap / 2);
                   const yPos = y * cellSize + (gridGap / 2);
                   drawBulbEffect(ctx, xPos, yPos, pixelSize, bulbSettings, pixelShape, cornerRadius);
               }
          }
      }
    }

  }, [
    gridWidth, gridHeight, pixelSize, gridGap,
    pixelData, showGrid, cornerRadius,
    glowEnabled, glowSettings,
    bulbEnabled, bulbSettings,
    pixelShape, customShape,
    backgroundColor
  ]);

  // Make sure canvas dimensions are properly set
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const expectedWidth = gridWidth * (pixelSize + gridGap);
      const expectedHeight = gridHeight * (pixelSize + gridGap);
      
      // Log dimensions for debugging
      console.log(`[CanvasRenderer Size Effect] Current: ${canvas.width}x${canvas.height}, Expected: ${expectedWidth}x${expectedHeight}, GridGap: ${gridGap}`);

      // Use Math.round to avoid potential floating point issues, though unlikely here
      const roundedExpectedWidth = Math.round(expectedWidth);
      const roundedExpectedHeight = Math.round(expectedHeight);
      
      if (canvas.width !== roundedExpectedWidth) {
        console.log(`[CanvasRenderer Size Effect] Setting width: ${roundedExpectedWidth}`);
        canvas.width = roundedExpectedWidth;
      }
      if (canvas.height !== roundedExpectedHeight) {
        console.log(`[CanvasRenderer Size Effect] Setting height: ${roundedExpectedHeight}`);
        canvas.height = roundedExpectedHeight;
      }
    }
  }, [gridWidth, gridHeight, pixelSize, gridGap]);

  // Run render on changes
  useEffect(() => {
    render();
  }, [render]);

  // Extract common grid coordinate calculation
  const getGridCoordinates = (offsetX, offsetY) => {
    const cellSize = pixelSize + gridGap;
    const gridX = Math.floor(offsetX / cellSize);
    const gridY = Math.floor(offsetY / cellSize);
    return {
      gridX: Math.max(0, Math.min(gridX, gridWidth - 1)),
      gridY: Math.max(0, Math.min(gridY, gridHeight - 1)),
      offsetX: gridX * cellSize + (gridGap / 2),
      offsetY: gridY * cellSize + (gridGap / 2)
    };
  };

  // Memoize event handlers
  const handleContextMenu = useCallback((event) => {
    // Only prevent default, don't calculate coords or call handlers here
    event.preventDefault();
  }, []);

  // Handle mouse move 
  const handleMouseMove = useCallback((event) => {
    if (mode === 'preview') return;
    // Check if mouse button is pressed (buttons property is non-zero)
    if (event.buttons !== 0 && onMouseMove) {
      const { offsetX, offsetY } = event.nativeEvent;
      const coords = getGridCoordinates(offsetX, offsetY);
      // Pass calculated coords object to the handler from Canvas.jsx
      onMouseMove({ 
        ...coords, 
        buttons: event.buttons,
        metaKey: event.metaKey,
        originalEvent: event // Pass original event if needed by parent
      });
    }
  }, [mode, onMouseMove, getGridCoordinates, gridWidth, gridHeight]);

  // Add MouseDown handler that calculates coords
  const handleMouseDown = useCallback((event) => {
    if (mode === 'preview') return;
    if (onMouseDown) {
      const { offsetX, offsetY } = event.nativeEvent;
      const coords = getGridCoordinates(offsetX, offsetY);
      // Pass calculated coords object
      onMouseDown({ 
        ...coords, 
        buttons: event.buttons,
        metaKey: event.metaKey,
        originalEvent: event
      });
    }
  }, [mode, onMouseDown, getGridCoordinates, gridWidth, gridHeight]);

  // Add MouseUp handler that calculates coords
  const handleMouseUp = useCallback((event) => {
    if (mode === 'preview') return;
    if (onMouseUp) {
      const { offsetX, offsetY } = event.nativeEvent;
      const coords = getGridCoordinates(offsetX, offsetY);
       // Pass calculated coords object
      onMouseUp({ 
        ...coords, 
        buttons: event.buttons,
        metaKey: event.metaKey,
        originalEvent: event
      });
    }
  }, [mode, onMouseUp, getGridCoordinates, gridWidth, gridHeight]);

  // Add MouseLeave handler that respects preview mode
  const handleMouseLeave = useCallback((event) => {
    if (mode === 'preview') return;
    // MouseLeave typically doesn't need coords, just pass event if handler exists
    if (onMouseLeave) onMouseLeave(event);
  }, [mode, onMouseLeave]);

  // Track if we're in a multi-touch gesture
  const multiTouchRef = useRef(false);
  const touchTimeoutRef = useRef(null);
  
  // Add Touch event handlers that map to mouse events
  const handleTouchStart = useCallback((event) => {
    if (mode === 'preview') return;
    
    // Always prevent default to stop browser behaviors
    event.preventDefault();
    
    // Clear any existing timeout
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    
    // Track multi-touch state
    if (event.touches.length > 1) {
      multiTouchRef.current = true;
      return; // Don't initiate painting for multi-touch
    }
    
    // Add a small delay to detect if another finger is added (for pinch gesture)
    touchTimeoutRef.current = setTimeout(() => {
      // Only proceed if we're still in a single-touch state
      if (!multiTouchRef.current && onMouseDown) {
        // Get the first touch point
        const touch = event.touches[0];
        // Calculate position relative to canvas
        const rect = event.target.getBoundingClientRect();
        const offsetX = touch.clientX - rect.left;
        const offsetY = touch.clientY - rect.top;
        
        // Scale the offset coordinates based on the canvas element's displayed size vs. actual size
        const scaleX = rect.width / event.target.width;
        const scaleY = rect.height / event.target.height;
        
        const scaledOffsetX = offsetX / scaleX;
        const scaledOffsetY = offsetY / scaleY;
        
        const coords = getGridCoordinates(scaledOffsetX, scaledOffsetY);
        
        // Map to mousedown event with left mouse button pressed (1)
        onMouseDown({
          ...coords,
          buttons: 1, // Simulate left mouse button
          metaKey: false, // Touch doesn't have metaKey
          originalEvent: event
        });
      }
      touchTimeoutRef.current = null;
    }, 20); // Short 20ms delay to detect multi-touch
  }, [mode, onMouseDown, getGridCoordinates]);

  const handleTouchMove = useCallback((event) => {
    if (mode === 'preview') return;
    
    // Always prevent default to stop browser behaviors
    event.preventDefault();
    
    // Don't process touch moves during multi-touch
    if (multiTouchRef.current || event.touches.length > 1) {
      multiTouchRef.current = true; // Ensure flag is set if we detect multiple touches
      return;
    }
    
    if (onMouseMove) {
      // Get the first touch point
      const touch = event.touches[0];
      // Calculate position relative to canvas
      const rect = event.target.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      
      // Scale the offset coordinates based on the canvas element's displayed size vs. actual size
      const scaleX = rect.width / event.target.width;
      const scaleY = rect.height / event.target.height;
      
      const scaledOffsetX = offsetX / scaleX;
      const scaledOffsetY = offsetY / scaleY;
      
      const coords = getGridCoordinates(scaledOffsetX, scaledOffsetY);
      
      // Map to mousemove event with left mouse button pressed (1)
      onMouseMove({
        ...coords,
        buttons: 1, // Simulate left mouse button being pressed during move
        metaKey: false,
        originalEvent: event
      });
    }
  }, [mode, onMouseMove, getGridCoordinates]);

  const handleTouchEnd = useCallback((event) => {
    if (mode === 'preview') return;
    
    // Always prevent default to stop browser behaviors
    event.preventDefault();
    
    // Reset multi-touch state if all fingers are lifted
    if (event.touches.length === 0) {
      multiTouchRef.current = false;
    }
    
    // Don't trigger mouseUp during multi-touch gesture
    if (multiTouchRef.current) {
      return;
    }
    
    if (onMouseUp) {
      // For touch end, we need to use the last known position
      // since touches array will be empty
      let offsetX = 0;
      let offsetY = 0;
      
      // If there are any touches remaining, use the first one
      if (event.changedTouches.length > 0) {
        const touch = event.changedTouches[0];
        const rect = event.target.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        
        // Scale the offset coordinates based on the canvas element's displayed size vs. actual size
        const scaleX = rect.width / event.target.width;
        const scaleY = rect.height / event.target.height;
        
        offsetX = offsetX / scaleX;
        offsetY = offsetY / scaleY;
      }
      
      const coords = getGridCoordinates(offsetX, offsetY);
      
      // Map to mouseup event
      onMouseUp({
        ...coords,
        buttons: 0, // No buttons pressed
        metaKey: false,
        originalEvent: event
      });
    }
  }, [mode, onMouseUp, getGridCoordinates]);

  const handleTouchCancel = useCallback((event) => {
    if (mode === 'preview') return;
    
    // Treat touch cancel like mouse leave
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, [mode, onMouseLeave]);

  // Make sure we clean up the timeout on unmount
  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <CanvasContainer>
      <canvas 
        ref={canvasRef} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onContextMenu={handleContextMenu} // Keep this to prevent default
        style={style}
        width={gridWidth * (pixelSize + gridGap) - gridGap} 
        height={gridHeight * (pixelSize + gridGap) - gridGap}
      />
    </CanvasContainer>
  );
});

export default CanvasRenderer; 