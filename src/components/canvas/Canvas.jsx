import React, { useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle, memo } from 'react';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CanvasRenderer from './CanvasRenderer';
import SVGRenderer from './SVGRenderer';
import { applyPixelColor, pickColor, applyFill, applyLine } from '../../core/drawingLogic';
import GridOverlay from './GridOverlay';
import { useRendererProps } from '../../hooks/useRendererProps';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  outline: none; /* Remove outline when focused */
`;

// Add styled component for renderers
const RendererWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

// Add styled component for interactive pixels
const InteractivePixel = styled.div`
  position: absolute;
  /* Removed hover effects */
`;

const Canvas = memo(forwardRef(({ 
  gridDimensions,
  pixelSize, 
  gridGap,
  activeColor,
  activeColorRef,
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
  glowSettings,
  bulbSettings,
  activeTool,
  showGrid,
  mode,
  interactionSettings,
  rendererType = 'canvas', // New prop to switch between renderers
  pixelShape,
  customShape,
  backgroundColor
}, ref) => {
  console.log('[Canvas] Received props: bulbEnabled:', bulbEnabled, ', bulbSettings:', bulbSettings);
  const { width: gridWidth, height: gridHeight } = gridDimensions;
  const [isPanning, setIsPanning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [previousTool, setPreviousTool] = useState('pencil');
  const canvasElementRef = useRef(null);
  const canvasRendererRef = useRef(null);
  const svgElementRef = useRef(null);
  const zoomWrapperRef = useRef(null);
  const lastPositionRef = useRef({ x: -1, y: -1 });
  
  // Create empty visibleArea object for SVG renderer
  const visibleArea = { startX: 0, endX: gridWidth, startY: 0, endY: gridHeight };
  
  const isDrawingRef = useRef(false);
  const drawingTimeoutRef = useRef(null);
  const drawingStartGridRef = useRef(null);
  const lastClickTimeRef = useRef(0);
  const wheelTimeoutRef = useRef(null);
  const CLICK_THRESHOLD = 200; // milliseconds

  // Group renderer props using the custom hook
  const { commonProps, effectProps, svgProps } = useRendererProps({
    pixelGrid,
    gridWidth,
    gridHeight,
    pixelSize,
    gridGap,
    showGrid,
    mode,
    cornerRadius,
    pixelShape,
    customShape,
    glowEnabled,
    glowColor: activeColorRef.current,
    glowSettings,
    bulbEnabled,
    bulbSettings,
    backgroundColor,
    visibleArea,
  });

  useEffect(() => {
    isDrawingRef.current = isDrawing;
  }, [isDrawing]);

  // Add keyboard event listeners for SPACE key
  const spaceKeyPressedRef = useRef(false);
  const cmdKeyPressedRef = useRef(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !isDrawing) {
        spaceKeyPressedRef.current = true;
        setIsPanning(true);
      } else if (e.metaKey) { // CMD key on Mac
        cmdKeyPressedRef.current = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        spaceKeyPressedRef.current = false;
        setIsPanning(false);
      } else if (e.key === 'Meta') { 
        cmdKeyPressedRef.current = false;
      }
    };
    
    // Ensure modifier keys are reset when window loses focus
    const handleBlur = () => {
      cmdKeyPressedRef.current = false;
      spaceKeyPressedRef.current = false;
      setIsPanning(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isDrawing]);

  const getCurrentColor = useCallback((isRightClick = false) => {
    if (isRightClick || activeTool === 'eraser') {
      return null;
    }
    return activeColorRef.current;
  }, [activeTool, activeColorRef]);

  // Process interaction (drawing, erasing, etc.)
  const processInteraction = useCallback((eventData) => {
    if (mode === 'preview') return;

    const { gridX, gridY, buttons } = eventData;
    if (gridX < 0 || gridX >= gridWidth || gridY < 0 || gridY >= gridHeight) return;

    const isRightClick = buttons === 2;

    // Explicitly handle CMD key color sampling here
    if (cmdKeyPressedRef.current) {
      // When CMD is held, always sample color regardless of active tool
      const color = pickColor(pixelGrid, gridX, gridY);
      if (color) {
        onColorChange(color);
      }
      return; // Important: immediately return to prevent other actions
    }

    // Only reach here if CMD key is NOT pressed
    if (activeTool === 'colorPicker') {
      const color = pickColor(pixelGrid, gridX, gridY);
      if (color) onColorChange(color);
      return;
    }
    
    // Get the most current color directly from the ref at the time of interaction
    const colorToApply = isRightClick || activeTool === 'eraser' ? null : activeColorRef.current;

    if (activeTool === 'fill') {
      // Apply fill only if it's not a right-click.
      // The calling function (handleCanvasMouseUp or handlePixelInteraction) ensures this is triggered on the correct mouse action.
      if (!isRightClick) {
        const newGrid = applyFill(pixelGrid, gridX, gridY, colorToApply);
        if (newGrid !== pixelGrid) {
          setPixelGrid(newGrid);
          onDrawStart();
        }
      }
    } else if (activeTool === 'pencil' || activeTool === 'eraser') {
      // --- DEBUG: Check pixelGrid before applying color ---
      if (!pixelGrid) {
        console.error("[Canvas processInteraction] pixelGrid is undefined before calling applyPixelColor!");
        return; // Stop execution if grid is undefined
      }
      // --- END DEBUG ---
      const newGrid = applyPixelColor(pixelGrid, gridX, gridY, colorToApply);
      if (newGrid !== pixelGrid) {
        setPixelGrid(newGrid);
      }
    }
  }, [
    activeTool, gridWidth, gridHeight, 
    onColorChange, pixelGrid, setPixelGrid, 
    mode, onDrawStart, activeColorRef, cmdKeyPressedRef
  ]);

  const handleDrawLine = useCallback((x0, y0, x1, y1, isRightClick) => {
    if (mode === 'preview') return;
    
    const colorToApply = isRightClick || activeTool === 'eraser' ? null : activeColorRef.current;
    
    const newGrid = applyLine(pixelGrid, x0, y0, x1, y1, colorToApply);
    if (newGrid !== pixelGrid) {
      setPixelGrid(newGrid);
    }
  }, [pixelGrid, setPixelGrid, mode, activeTool, activeColorRef]);

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
        onDrawStart();
      }
      drawingStartGridRef.current = null;
    }
  }, [pixelGrid, onDrawStart]);

  const handleSingleClick = useCallback(() => {
    onDrawStart();
  }, [onDrawStart]);

  useEffect(() => {
    return () => {
      if (drawingTimeoutRef.current) {
        clearTimeout(drawingTimeoutRef.current);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseDown = useCallback((coords) => {
    // Skip processing ONLY if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    
    const { gridX, gridY, buttons } = coords;
    lastPositionRef.current = { x: gridX, y: gridY };
    
    // Always set drawing state TRUE on mouse down for consistent pan/zoom disabling.
    // This ensures the react-zoom-pan-pinch library is disabled even during CMD+click sampling.
    setIsDrawing(true);
    handleDrawStart();

    // Handle CMD+Click sampling immediately on mousedown
    if (cmdKeyPressedRef.current) {
        processInteraction(coords); // ProcessInteraction handles the CMD check internally
        return; // Don't proceed with other tool logic if CMD is pressed
    }
    
    // Only process the drawing interaction (pencil/eraser) if CMD is NOT pressed.
    if (activeTool === 'pencil' || activeTool === 'eraser') {
      processInteraction(coords); 
    }
  }, [mode, activeTool, handleDrawStart, processInteraction, spaceKeyPressedRef, cmdKeyPressedRef]);

  const handleCanvasMouseMove = useCallback((coords) => {
    // Skip processing ONLY if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    
    // Only run if currently drawing
    if (!isDrawingRef.current) return;
    
    const { gridX, gridY, buttons } = coords;
    const { x: lastX, y: lastY } = lastPositionRef.current;
    
    // Don't process drawing move if CMD is held (color sampling is handled on click)
    if (cmdKeyPressedRef.current) return;

    if ((activeTool === 'pencil' || activeTool === 'eraser') && 
        (lastX !== gridX || lastY !== gridY)) {
      const isRightClick = buttons === 2;
      handleDrawLine(lastX, lastY, gridX, gridY, isRightClick);
      lastPositionRef.current = { x: gridX, y: gridY };
    }
  }, [mode, activeTool, handleDrawLine, isDrawingRef, spaceKeyPressedRef, cmdKeyPressedRef]);

  const handleCanvasMouseUp = useCallback((coords) => {
    // Skip processing ONLY if space key is pressed for panning 
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    const { gridX, gridY, buttons } = coords;
    const wasDrawing = isDrawingRef.current;

    // Only process fill tool interaction if CMD key is NOT pressed
    if (!cmdKeyPressedRef.current && activeTool === 'fill' && buttons !== 2) {
      processInteraction(coords);
    }
    
    // Always reset the drawing state on mouse up, regardless of CMD key state
    // This is crucial to exit the drawing state correctly and re-enable pan/zoom.
    setIsDrawing(false);
    if (wasDrawing) {
      // Only finalize the drawing history if CMD wasn't pressed during the interaction.
      // Color sampling via CMD+click should not create a history entry.
      // We check cmdKeyPressedRef directly here as handleDrawEnd depends on it.
      if (!cmdKeyPressedRef.current) { 
          handleDrawEnd();
      }
    }
    lastPositionRef.current = { x: -1, y: -1 };

  }, [mode, activeTool, processInteraction, handleDrawEnd, spaceKeyPressedRef, cmdKeyPressedRef]);

  const handleCanvasMouseLeave = useCallback(() => {
    // Skip processing if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    if (isDrawingRef.current) {
      handleDrawEnd();
      setIsDrawing(false);
    }
    lastPositionRef.current = { x: -1, y: -1 };
  }, [mode, handleDrawEnd, spaceKeyPressedRef]);

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
      case 'colorPicker':
        return 'eyedropper';
      default:
        return 'default';
    }
  }, [isPanning, activeTool, mode]);

  // Handler for pixel interactions in SVG renderer
  const handlePixelInteraction = useCallback((coords) => {
    // Skip processing if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (coords && coords.gridX >= 0) {
      // Let processInteraction handle CMD override, fill, and colorPicker.
      // Call processInteraction first, it will handle CMD and return if needed.
      processInteraction(coords);
      
      // If CMD wasn't pressed and processInteraction didn't return,
      // handle pencil/eraser specific logic.
      if (!cmdKeyPressedRef.current) { // Check CMD key again here
          if (activeTool === 'pencil' || activeTool === 'eraser') {
            // Initiate drawing on click
            handleMouseDown(coords);
            // End drawing immediately for single clicks
            handleCanvasMouseUp(coords);
          }
      }
    }
  }, [activeTool, processInteraction, handleMouseDown, handleCanvasMouseUp, spaceKeyPressedRef, cmdKeyPressedRef]);

  // Custom wheel event handler to improve panning experience
  const handleWheel = useCallback((event) => {
    // Don't handle wheel events if drawing or if Ctrl/Cmd is pressed (library handles zoom)
    if (isDrawingRef.current || event.ctrlKey || event.metaKey) {
      return;
    }

    // Prevent default browser scrolling behavior
    event.preventDefault();
    event.stopPropagation();
    
    // If the transform wrapper isn't ready yet, do nothing
    if (!zoomWrapperRef.current) return;
    
    // Set panning state temporarily for cursor feedback
    setIsPanning(true);
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    // Reset panning state after a short delay
    wheelTimeoutRef.current = setTimeout(() => {
      setIsPanning(false);
    }, 150);
    
    // The pan amount depends on the delta values and current scale
    const { scale } = zoomWrapperRef.current.state;
    const sensitivity = 1.5; // Increased sensitivity for better panning
    
    // Pan the view based on scroll direction
    const deltaX = event.deltaX * sensitivity;
    const deltaY = event.deltaY * sensitivity;
    
    // Use the library's pan method if available, fallback to setTransform
    if (zoomWrapperRef.current.setPointToPan) {
      zoomWrapperRef.current.setPointToPan(
        zoomWrapperRef.current.state.positionX - deltaX / scale,
        zoomWrapperRef.current.state.positionY - deltaY / scale
      );
    } else if (zoomWrapperRef.current.setTransform) {
      zoomWrapperRef.current.setTransform(
        zoomWrapperRef.current.state.positionX - deltaX / scale,
        zoomWrapperRef.current.state.positionY - deltaY / scale,
        scale
      );
    }
  }, [isDrawingRef]);

  // Add handler to focus the canvas on click
  const handleContainerClick = useCallback((e) => {
    // Focus the canvas container when clicked
    if (canvasElementRef.current && e.target === canvasElementRef.current) {
      canvasElementRef.current.focus();
    }
  }, []);

  // Focus the canvas when component mounts
  useEffect(() => {
    if (canvasElementRef.current) {
      canvasElementRef.current.focus();
    }
  }, []);

  // --- NEW: Prevent default context menu --- 
  useEffect(() => {
    const preventContextMenu = (event) => {
      event.preventDefault();
    };
    
    // Attempt to get the underlying DOM node of the TransformComponent
    const zoomElement = zoomWrapperRef.current?.instance.contentComponent;

    if (zoomElement) {
      zoomElement.addEventListener('contextmenu', preventContextMenu);
    }

    return () => {
      if (zoomElement) {
        zoomElement.removeEventListener('contextmenu', preventContextMenu);
      }
    };
  }, []); // Run only once on mount

  // Expose methods to parent component through ref
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      if (zoomWrapperRef.current) {
        zoomWrapperRef.current.zoomIn(0.2);
      }
    },
    zoomOut: () => {
      if (zoomWrapperRef.current) {
        zoomWrapperRef.current.zoomOut(0.2);
      }
    },
    // Need to expose SVG reference for export functionality
    svgRef: svgElementRef,
    exportPNG: () => {
      if (canvasRendererRef.current && canvasRendererRef.current.exportPNG) {
        canvasRendererRef.current.exportPNG();
      }
    }
  }), [zoomWrapperRef, canvasRendererRef, svgElementRef]);

  return (
    <CanvasContainer 
      ref={canvasElementRef} 
      style={{ cursor: getCursor() }} 
      onWheel={handleWheel}
      tabIndex={0} /* Make container focusable */
      onClick={handleContainerClick}
      onMouseDown={() => {
        if (canvasElementRef.current) {
          canvasElementRef.current.focus();
        }
      }}
    >
      <TransformWrapper
        ref={zoomWrapperRef}
        disabled={isDrawing}
        minScale={0.1}
        maxScale={10}
        limitToBounds={false}
        wheel={{ 
          step: 0.1,
          smoothStep: 0.01
        }}
        doubleClick={{ disabled: true }} // Disable double-click zooming
        pan={{
          disabled: isDrawing || activeTool === 'fill' || cmdKeyPressedRef.current,
          activationKeys: ["Space"], // Enable Space key for panning
          paddingSize: 0,
          lockAxisX: false,
          lockAxisY: false,
          velocity: false
        }}
        options={{
          limitToBounds: false,
          minScale: 0.1,
          maxScale: 10,
          transformEnabled: true,
          disabled: isDrawing || cmdKeyPressedRef.current, // Also disable general transformations
          panningEnabled: true
        }}
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, state = { scale: 1, positionX: 0, positionY: 0 }, ...rest }) => (
          <TransformComponent 
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{ cursor: getCursor() }}
          >
            <RendererWrapper>
              {rendererType === 'canvas' ? (
                <>
                {/* {console.log('[Canvas] Passing to CanvasRenderer, effectProps.bulbEnabled:', effectProps.bulbEnabled)} */}
                <CanvasRenderer
                  ref={canvasRendererRef}
                  {...commonProps}
                  {...effectProps}
                  // Map the handlers in Canvas.jsx to the prop names expected by CanvasRenderer
                  onMouseDown={handleMouseDown}       // Pass handleMouseDown as onMouseDown
                  onMouseUp={handleCanvasMouseUp}     // Pass handleCanvasMouseUp as onMouseUp
                  onMouseLeave={handleCanvasMouseLeave} // Pass handleCanvasMouseLeave as onMouseLeave
                  onMouseMove={handleCanvasMouseMove} // Pass handleCanvasMouseMove as onMouseMove
                  spaceKeyPressed={spaceKeyPressedRef.current}
                />
                </>
              ) : (
                <SVGRenderer
                  ref={svgElementRef}
                  key={`svg-renderer-${activeColorRef.current || 'default'}-${rendererType}`}
                  {...commonProps}
                  {...effectProps}
                  {...svgProps}
                  // Pass the correct handlers with the names SVGRenderer expects
                  onCanvasMouseDown={handleMouseDown} // Pass handleMouseDown from Canvas as onCanvasMouseDown
                  onCanvasMouseUp={handleCanvasMouseUp} // Pass handleCanvasMouseUp from Canvas as onCanvasMouseUp
                  onCanvasMouseLeave={handleCanvasMouseLeave} // Pass handleCanvasMouseLeave from Canvas as onCanvasMouseLeave
                  onCanvasMouseMove={handleCanvasMouseMove} // Pass handleCanvasMouseMove from Canvas as onCanvasMouseMove
                  // SVGRenderer seems to use onClick for simple clicks
                  // We need to decide if Canvas.jsx should handle this or if processInteraction covers it.
                  // For now, let's pass a handler that triggers processInteraction for simple clicks.
                  onClick={handlePixelInteraction} // Pass handlePixelInteraction from Canvas as onClick
                  activeTool={activeTool}
                />
              )}
            </RendererWrapper>
          </TransformComponent>
        )}
      </TransformWrapper>
    </CanvasContainer>
  );
}));

export default Canvas; 