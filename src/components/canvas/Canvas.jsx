import React, { useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle, memo } from 'react';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CanvasRenderer from './CanvasRenderer';
import SVGRenderer from './SVGRenderer';
import { applyPixelColor, pickColor, applyFill, applyLine } from '../../core/drawingLogic';
import GridOverlay from './GridOverlay';
import { useRendererProps } from '../../hooks/useRendererProps';
import { getLinePixels } from '../../utils/drawingUtils';
import SelectionOverlay from './SelectionOverlay';

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
  backgroundColor,
  shiftKeyPressedRef,
  lineStartPoint,
  setLineStartPoint,
  selectionArea,
  setSelectionArea,
  copyBuffer
}, ref) => {
  console.log('[Canvas] Received props: bulbEnabled:', bulbEnabled, ', bulbSettings:', bulbSettings);
  const { width: gridWidth, height: gridHeight } = gridDimensions;
  const [isPanning, setIsPanning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const isSelectingRef = useRef(false);
  const selectionStartCoordRef = useRef(null);
  const [previousTool, setPreviousTool] = useState('pencil');
  const canvasElementRef = useRef(null);
  const canvasRendererRef = useRef(null);
  const svgElementRef = useRef(null);
  const zoomWrapperRef = useRef(null);
  const [currentZoomScale, setCurrentZoomScale] = useState(1);
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
    if (gridX < 0 || gridX >= gridWidth || gridY < 0 || gridY >= gridHeight) {
        setLineStartPoint(null);
        return;
    }

    const isRightClick = buttons === 2;
    const isShiftPressed = shiftKeyPressedRef.current;

    // Handle CMD+Click color sampling (takes precedence)
    if (cmdKeyPressedRef.current) {
      const color = pickColor(pixelGrid, gridX, gridY);
      if (color) {
        onColorChange(color);
      }
      setLineStartPoint(null);
      setSelectionArea(null);
      return; 
    }

    // --- Straight Line Logic --- 
    if (isShiftPressed && lineStartPoint && (activeTool === 'pencil' || activeTool === 'eraser')) {
        console.log("Drawing line from", lineStartPoint, "to", { gridX, gridY });

        const linePixels = getLinePixels(lineStartPoint.x, lineStartPoint.y, gridX, gridY);
        const colorToApply = isRightClick || activeTool === 'eraser' ? null : activeColorRef.current;

        // Create a new grid copy to apply changes
        const newGrid = pixelGrid.map(row => [...row]);
        let changed = false;

        linePixels.forEach(point => {
            if (point.x >= 0 && point.x < gridWidth && point.y >= 0 && point.y < gridHeight) {
                if (newGrid[point.y][point.x] !== colorToApply) {
                    newGrid[point.y][point.x] = colorToApply;
                    changed = true;
                }
            }
        });

        if (changed) {
            setPixelGrid(newGrid); 
            // Trigger history push *after* grid update for the whole line
            onDrawStart(); 
        }

        // Reset after drawing line? NO! Set start point to the *current* point for chaining.
        setLineStartPoint({ x: gridX, y: gridY }); 
        setSelectionArea(null);
        return; // Prevent single pixel drawing
    }

    // --- If Selection Tool is active, don't proceed with drawing tools --- 
    if (activeTool === 'select') {
        return; 
    }

    // --- Clear Selection if using other tools --- 
    if (selectionArea) {
        console.log("Clearing selection due to non-select tool action");
        setSelectionArea(null);
    }

    // --- Normal Interaction (Single Pixel, Fill, Color Pick) --- 
    let currentToolProcessed = false;

    if (activeTool === 'colorPicker') {
      const color = pickColor(pixelGrid, gridX, gridY);
      if (color) onColorChange(color);
      setLineStartPoint(null);
      currentToolProcessed = true;
      return;
    }

    const colorToApplyOnClick = isRightClick || activeTool === 'eraser' ? null : activeColorRef.current;

    if (activeTool === 'fill') {
      if (!isRightClick) {
        const newGrid = applyFill(pixelGrid, gridX, gridY, colorToApplyOnClick);
        if (newGrid !== pixelGrid) {
          setPixelGrid(newGrid);
          onDrawStart(); 
        }
      }
      setLineStartPoint(null);
      currentToolProcessed = true;
    } else if (activeTool === 'pencil' || activeTool === 'eraser') {
      const newGrid = applyPixelColor(pixelGrid, gridX, gridY, colorToApplyOnClick);
      if (newGrid !== pixelGrid) {
        setPixelGrid(newGrid);
      }
      currentToolProcessed = true;
    }

    // --- Set Line Start Point --- 
    if (!isShiftPressed && (activeTool === 'pencil' || activeTool === 'eraser')) {
        console.log("Setting line start point:", { gridX, gridY });
        setLineStartPoint({ x: gridX, y: gridY });
    } else if (!isShiftPressed) {
        setLineStartPoint(null); 
    }

  }, [
    activeTool, gridWidth, gridHeight, 
    onColorChange, pixelGrid, setPixelGrid, 
    mode, onDrawStart, activeColorRef, cmdKeyPressedRef, 
    shiftKeyPressedRef, lineStartPoint, setLineStartPoint,
    getLinePixels, setSelectionArea, selectionArea
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
    
    // --- NEW: Handle Selection Start --- 
    if (activeTool === 'select') {
        // Check if clicking outside an existing selection to potentially clear first? Maybe not needed.
        console.log("Selection started at:", coords);
        isSelectingRef.current = true;
        setIsSelecting(true);
        selectionStartCoordRef.current = { x: coords.gridX, y: coords.gridY };
        // DON'T setSelectionArea here - wait for mouse move
        setIsDrawing(false); 
        return; 
    }
    
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
  }, [mode, activeTool, handleDrawStart, processInteraction, spaceKeyPressedRef, cmdKeyPressedRef, setSelectionArea, setIsSelecting]);

  const handleCanvasMouseMove = useCallback((coords) => {
    // Skip processing ONLY if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    
    const { gridX, gridY, buttons } = coords;

    // --- NEW: Handle Selection Drag --- 
    if (isSelectingRef.current && selectionStartCoordRef.current) {
        const start = selectionStartCoordRef.current;
        // Check if mouse actually moved (simple check)
        if (coords.gridX !== start.x || coords.gridY !== start.y) {
          // Normalize coordinates: x1 <= x2, y1 <= y2
          const x1 = Math.min(start.x, coords.gridX);
          const y1 = Math.min(start.y, coords.gridY);
          const x2 = Math.max(start.x, coords.gridX);
          const y2 = Math.max(start.y, coords.gridY);
          
          // Update selection area state continuously
          setSelectionArea({ x1, y1, x2, y2 });
        } else {
          // If mouse hasn't moved from start, ensure a minimal 1x1 selection is shown
          // or clear it if it exists but shouldn't?
          // Let's just ensure it shows the initial 1x1 if needed
          if (!selectionArea || selectionArea.x1 !== start.x || selectionArea.y1 !== start.y || selectionArea.x2 !== start.x || selectionArea.y2 !== start.y) {
            setSelectionArea({ x1: start.x, y1: start.y, x2: start.x, y2: start.y });
          }
        }
        return; // Don't proceed with drawing logic
    }
    
    // Existing drawing logic
    if (!isDrawingRef.current) return;
    
    // Don't process drawing move if CMD is held (color sampling is handled on click)
    if (cmdKeyPressedRef.current) return;

    if ((activeTool === 'pencil' || activeTool === 'eraser') && 
        (gridX !== lastPositionRef.current.x || gridY !== lastPositionRef.current.y)) {
      const isRightClick = buttons === 2;
      handleDrawLine(lastPositionRef.current.x, lastPositionRef.current.y, gridX, gridY, isRightClick);
      lastPositionRef.current = { x: gridX, y: gridY };
    }
  }, [mode, activeTool, handleDrawLine, isDrawingRef, spaceKeyPressedRef, cmdKeyPressedRef, setSelectionArea, selectionArea]);

  const handleCanvasMouseUp = useCallback((coords) => {
    // Skip processing ONLY if space key is pressed for panning 
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    const { gridX, gridY, buttons } = coords;
    const wasDrawing = isDrawingRef.current;
    const wasSelecting = isSelectingRef.current;

    // --- UPDATED: Handle Selection End / Paste on Click --- 
    if (wasSelecting && selectionStartCoordRef.current) {
        const start = selectionStartCoordRef.current;
        const isClick = (start.x === gridX && start.y === gridY);

        if (isClick) {
            // --- Handle Click with Select Tool --- 
            if (copyBuffer) {
                // Buffer exists: PASTE
                console.log(`Pasting content at (${gridX}, ${gridY})`);
                const { width: bufferWidth, height: bufferHeight, data: bufferData } = copyBuffer;
                
                const newGrid = pixelGrid.map(row => [...row]);
                let changed = false;

                for (let dy = 0; dy < bufferHeight; dy++) {
                    for (let dx = 0; dx < bufferWidth; dx++) {
                        const targetX = gridX + dx;
                        const targetY = gridY + dy;
                        if (targetX >= 0 && targetX < gridWidth && targetY >= 0 && targetY < gridHeight) {
                            if (newGrid[targetY][targetX] !== bufferData[dy][dx]) {
                                newGrid[targetY][targetX] = bufferData[dy][dx];
                                changed = true;
                            }
                        }
                    }
                }

                if (changed) {
                    setPixelGrid(newGrid);
                    onDrawStart(); // Trigger history
                }
                // Ensure selection is cleared after paste
                setSelectionArea(null);
            } else {
                // No buffer: CLEAR selection on click
                console.log("Selection click - clearing area");
                setSelectionArea(null);
            }
        } else {
            // --- Handle Drag Release with Select Tool --- 
            // Finalize the selection rectangle
            const x1 = Math.min(start.x, gridX);
            const y1 = Math.min(start.y, gridY);
            const x2 = Math.max(start.x, gridX);
            const y2 = Math.max(start.y, gridY);
            console.log("Selection drag end - setting area:", { x1, y1, x2, y2 });
            setSelectionArea({ x1, y1, x2, y2 });
        }
        
        // Reset selection state regardless of click/drag/paste
        isSelectingRef.current = false;
        setIsSelecting(false);
        selectionStartCoordRef.current = null;
        setIsDrawing(false); 
        return; // Prevent drawing logic after selection/paste action
    }

    // Existing drawing/fill logic (only runs if not selecting)
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

  }, [
      mode, activeTool, processInteraction, handleDrawEnd, spaceKeyPressedRef, 
      cmdKeyPressedRef, setSelectionArea, setIsSelecting, 
      copyBuffer, pixelGrid, setPixelGrid, onDrawStart, gridWidth, gridHeight // <-- Add new dependencies for paste logic
  ]);

  const handleCanvasMouseLeave = useCallback(() => {
    // Skip processing if space key is pressed for panning
    if (spaceKeyPressedRef.current) return;
    
    if (mode === 'preview') return;
    if (isDrawingRef.current) {
      handleDrawEnd();
      setIsDrawing(false);
    }
    // --- NEW: Reset selection state on leave --- 
    if (isSelectingRef.current) {
        console.log("Clearing selection on mouse leave");
        // If selection was in progress, finalize it based on last known coord? Or just cancel?
        // Let's just cancel for now.
        setSelectionArea(null); // Clear the visual
        isSelectingRef.current = false;
        setIsSelecting(false);
        selectionStartCoordRef.current = null;
    }
    lastPositionRef.current = { x: -1, y: -1 };
  }, [mode, handleDrawEnd, spaceKeyPressedRef, setSelectionArea, setIsSelecting]);

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

  // Callback for react-zoom-pan-pinch state changes
  const onTransformed = useCallback((state) => {
    setCurrentZoomScale(state.scale);
    // We could potentially use state.positionX/Y for other calculations if needed
  }, []);

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
        disabled={isDrawing || isSelecting}
        minScale={0.1}
        maxScale={10}
        limitToBounds={false}
        wheel={{ 
          step: 0.1,
          smoothStep: 0.01,
          disabled: isDrawing || isSelecting
        }}
        doubleClick={{ disabled: true }}
        pan={{ 
          disabled: isDrawing || isSelecting || !spaceKeyPressedRef.current,
          velocityEqualToMove: true,
          activationKeys: ["Space"]
        }}
        options={{
          limitToBounds: false,
          minScale: 0.1,
          maxScale: 10,
          transformEnabled: !(isDrawing || isSelecting),
          disabled: isDrawing || isSelecting,
          panningEnabled: !isDrawing && !isSelecting
        }}
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        centerOnInit={true}
        onPanningStart={() => setIsPanning(true)}
        onPanningStop={() => setIsPanning(false)}
        onZoomStop={(ref) => setCurrentZoomScale(ref.state.scale)}
        onTransformed={onTransformed}
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
              {showGrid && (
                <GridOverlay 
                  gridWidth={gridWidth}
                  gridHeight={gridHeight}
                  pixelSize={pixelSize}
                  gridGap={gridGap}
                />
              )}
              <SelectionOverlay 
                selectionArea={selectionArea}
                gridDimensions={gridDimensions}
                pixelSize={pixelSize}
                gridGap={gridGap}
                zoomScale={currentZoomScale}
              />
            </RendererWrapper>
          </TransformComponent>
        )}
      </TransformWrapper>
    </CanvasContainer>
  );
}));

export default Canvas; 