import React, { useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CanvasRenderer from './CanvasRenderer';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
`;

// Add styled component for interactive pixels
const InteractivePixel = styled.div`
  position: absolute;
  transition: transform 0.2s ease, filter 0.2s ease;
  
  &:hover {
    transform: ${props => props.$scaleEnabled ? `scale(${props.$scaleValue})` : 'none'};
    filter: ${props => props.$brightnessEnabled ? `brightness(${props.$brightnessValue})` : 'none'};
  }
`;

const Canvas = forwardRef(({ 
  gridDimensions,
  pixelSize, 
  gridGap,
  activeColor,
  onColorChange,
  onDrawStart,
  pixelGrid,
  setPixelGrid,
  setGridDimensions,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  cornerRadius,
  glowEnabled,
  bulbEnabled,
  innerShadowEnabled,
  glowSettings,
  bulbSettings,
  activeTool,
  showGrid,
  mode, // Add mode prop
  interactionSettings, // Add interactionSettings prop
}, ref) => {
  const { width: gridWidth, height: gridHeight } = gridDimensions;
  const [isPanning, setIsPanning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [previousTool, setPreviousTool] = useState('pencil');
  const canvasElementRef = useRef(null);
  const zoomWrapperRef = useRef(null);
  
  const isDrawingRef = useRef(false);
  const drawingTimeoutRef = useRef(null);
  const drawingStartGridRef = useRef(null);
  const lastClickTimeRef = useRef(0);
  const CLICK_THRESHOLD = 200; // milliseconds

  useEffect(() => {
    isDrawingRef.current = isDrawing;
  }, [isDrawing]);

  const handleDrawStart = useCallback(() => {
    if (!isDrawingRef.current) {
      drawingStartGridRef.current = pixelGrid.map(row => [...row]);
      if (drawingTimeoutRef.current) {
        clearTimeout(drawingTimeoutRef.current);
      }
    }
  }, [pixelGrid]);

  const handleDrawEnd = useCallback(() => {
    if (isDrawingRef.current) {
      const hasChanged = JSON.stringify(drawingStartGridRef.current) !== JSON.stringify(pixelGrid);
      if (hasChanged) {
        console.log('Drawing ended, creating history entry');
        onDrawStart();
      }
      drawingStartGridRef.current = null;
    }
  }, [pixelGrid, onDrawStart]);

  const handleSingleClick = useCallback(() => {
    console.log('Single click, creating history entry');
    onDrawStart();
  }, [onDrawStart]);

  useEffect(() => {
    return () => {
      if (drawingTimeoutRef.current) {
        clearTimeout(drawingTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseDown = useCallback((event) => {
    // Disable drawing in interact mode
    if (mode === 'interact') return;

    if (event.button === 2) {
    } else if (activeTool === 'fill') {
      return;
    }
    setIsDrawing(true);
    handleDrawStart();
  }, [activeTool, handleDrawStart, mode]);

  const handleMouseUp = useCallback((event) => {
    // Disable drawing in interact mode
    if (mode === 'interact') return;

    const wasDrawing = isDrawingRef.current;
    const currentTool = activeTool;

    setIsDrawing(false);

    if (currentTool === 'fill' && event.button !== 2) {
      handleSingleClick();
    } else if (wasDrawing && event.button !== 2) {
      const currentTime = Date.now();
      if (currentTime - lastClickTimeRef.current < CLICK_THRESHOLD) {
        handleSingleClick();
      } else {
        handleDrawEnd();
      }
      lastClickTimeRef.current = currentTime;
    }
  }, [activeTool, handleDrawEnd, handleSingleClick, mode]);

  const getCursor = useCallback(() => {
    if (mode === 'interact') return 'pointer';
    if (isPanning) return 'grab';
    switch (activeTool) {
      case 'pencil':
        return 'crosshair';
      case 'eraser':
        return 'crosshair';
      case 'fill':
        return 'crosshair';
      default:
        return 'default';
    }
  }, [isPanning, activeTool, mode]);

  const getCurrentColor = useCallback((isRightClick = false) => {
    if (mode === 'interact' || isRightClick || activeTool === 'eraser') {
      return null;
    }
    return activeColor;
  }, [activeTool, activeColor, mode]);

  const floodFill = useCallback((row, col, targetColor, replacementColor) => {
    if (mode === 'interact') return; // Disable fill in interact mode
    if (row < 0 || row >= gridHeight || col < 0 || col >= gridWidth) return;
    if (targetColor === replacementColor) return;

    const newGrid = pixelGrid.map(r => [...r]);
    const stack = [{row, col}];
    let pixelsChanged = false;

    while (stack.length > 0) {
      const { row: r, col: c } = stack.pop();
      if (r < 0 || r >= gridHeight || c < 0 || c >= gridWidth || newGrid[r]?.[c] !== targetColor) {
        continue;
      }
      pixelsChanged = true;
      newGrid[r][c] = replacementColor;
      stack.push({row: r - 1, col: c}, {row: r + 1, col: c}, {row: r, col: c - 1}, {row: r, col: c + 1});
    }

    if (pixelsChanged) {
      setPixelGrid(newGrid);
    }
  }, [gridWidth, gridHeight, pixelGrid, setPixelGrid, mode]);

  const processInteraction = useCallback((eventData) => {
    const { gridX, gridY, buttons, metaKey } = eventData;
    const isRightClick = buttons === 2;

    if (gridY < 0 || gridY >= gridHeight || gridX < 0 || gridX >= gridWidth) return;

    // Handle interaction mode click effects
    if (mode === 'interact') {
      if (interactionSettings.click.ripple.enabled) {
        // Trigger ripple effect on the pixel
        // This will be handled by the CanvasRenderer
        return;
      }
      return;
    }

    const colorToApply = getCurrentColor(isRightClick);

    if (metaKey) {
      const color = pixelGrid[gridY]?.[gridX];
      if (color) onColorChange(color);
      return;
    }

    if (activeTool === 'fill') {
      if (!isDrawingRef.current && !isRightClick) {
        const targetColor = pixelGrid[gridY]?.[gridX];
        floodFill(gridY, gridX, targetColor, colorToApply);
      }
    } else if (activeTool === 'pencil' || activeTool === 'eraser') {
      if (isDrawingRef.current || isRightClick) {
        if (pixelGrid[gridY]?.[gridX] !== colorToApply) {
          setPixelGrid(currentGrid => {
            const newGrid = currentGrid.map(r => [...r]);
            if (newGrid[gridY]) {
              newGrid[gridY][gridX] = colorToApply;
            }
            return newGrid;
          });
        }
      }
    }
  }, [
    activeTool, gridWidth, gridHeight, 
    getCurrentColor, floodFill, onColorChange,
    pixelGrid, setPixelGrid, mode,
    interactionSettings
  ]);

  const handleMouseLeave = useCallback(() => {
    if (isDrawingRef.current) {
      handleDrawEnd();
      setIsDrawing(false);
    }
  }, [handleDrawEnd]);

  useImperativeHandle(ref, () => ({
    zoomIn: (step = 0.2) => {
      zoomWrapperRef.current?.zoomIn(step);
    },
    zoomOut: (step = 0.2) => {
      zoomWrapperRef.current?.zoomOut(step);
    }
  }));

  return (
    <CanvasContainer ref={canvasElementRef} style={{ cursor: getCursor() }}>
      <TransformWrapper
        ref={zoomWrapperRef}
        disabled={isDrawing}
        minScale={0.1}
        maxScale={10}
        limitToBounds={false}
        wheel={{ step: 0.1 }}
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        centerOnInit={true}
        panning={{ activationKeys: ["Space"], disabled: isDrawing || activeTool === 'fill' }}
      >
        {({ zoomIn, zoomOut, state = { scale: 1, positionX: 0, positionY: 0 }, ...rest }) => (
          <TransformComponent 
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{ cursor: getCursor() }}
          >
            <CanvasRenderer 
              pixelData={pixelGrid}
              gridWidth={gridWidth}
              gridHeight={gridHeight}
              pixelSize={pixelSize}
              gridGap={gridGap}
              showGrid={showGrid}
              cornerRadius={cornerRadius}
              glowEnabled={glowEnabled}
              glowSettings={glowSettings}
              bulbEnabled={bulbEnabled}
              bulbSettings={bulbSettings}
              isDrawing={isDrawing}
              onPixelClick={processInteraction}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onContextMenu={(e) => e.preventDefault()}
              onMouseLeave={handleMouseLeave}
              mode={mode}
              interactionSettings={interactionSettings}
            />
          </TransformComponent>
        )}
      </TransformWrapper>
    </CanvasContainer>
  );
});

export default Canvas; 