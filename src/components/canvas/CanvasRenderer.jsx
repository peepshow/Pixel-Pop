import { useEffect, useRef, memo, useCallback, useState } from 'react';
import styled from 'styled-components';

// Optimize canvas rendering styles
const CanvasElement = styled.canvas`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: crisp-edges;
  touch-action: none; // Prevent touch scrolling while drawing
`;

// Extract corner radius drawing logic
const drawRoundedPixel = (ctx, xPos, yPos, pixelSize, cornerRadius) => {
  const maxRadius = pixelSize / 2;
  const topLeftRadius = Math.min((pixelSize * cornerRadius.topLeft) / 100, maxRadius);
  const topRightRadius = Math.min((pixelSize * cornerRadius.topRight) / 100, maxRadius);
  const bottomLeftRadius = Math.min((pixelSize * cornerRadius.bottomLeft) / 100, maxRadius);
  const bottomRightRadius = Math.min((pixelSize * cornerRadius.bottomRight) / 100, maxRadius);

  ctx.beginPath();
  ctx.moveTo(xPos + topLeftRadius, yPos);
  
  // Top edge and top-right corner
  ctx.lineTo(xPos + pixelSize - topRightRadius, yPos);
  ctx.arcTo(
    xPos + pixelSize, yPos,
    xPos + pixelSize, yPos + topRightRadius,
    topRightRadius
  );
  
  // Right edge and bottom-right corner
  ctx.lineTo(xPos + pixelSize, yPos + pixelSize - bottomRightRadius);
  ctx.arcTo(
    xPos + pixelSize, yPos + pixelSize,
    xPos + pixelSize - bottomRightRadius, yPos + pixelSize,
    bottomRightRadius
  );
  
  // Bottom edge and bottom-left corner
  ctx.lineTo(xPos + bottomLeftRadius, yPos + pixelSize);
  ctx.arcTo(
    xPos, yPos + pixelSize,
    xPos, yPos + pixelSize - bottomLeftRadius,
    bottomLeftRadius
  );
  
  // Left edge and top-left corner
  ctx.lineTo(xPos, yPos + topLeftRadius);
  ctx.arcTo(
    xPos, yPos,
    xPos + topLeftRadius, yPos,
    topLeftRadius
  );
  
  ctx.closePath();
};

// Extract grid drawing logic
const drawGrid = (ctx, width, height, gridWidth, gridHeight, pixelSize, gridGap) => {
  ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
  ctx.lineWidth = 1;

  // Calculate cell size (including gap)
  const cellSize = pixelSize + gridGap;

  // Batch vertical lines
  ctx.beginPath();
  for (let x = 0; x <= gridWidth; x++) {
    const xPos = x * cellSize - 0.5;
    ctx.moveTo(xPos, 0);
    ctx.lineTo(xPos, height);
  }
  ctx.stroke();

  // Batch horizontal lines
  ctx.beginPath();
  for (let y = 0; y <= gridHeight; y++) {
    const yPos = y * cellSize - 0.5;
    ctx.moveTo(0, yPos);
    ctx.lineTo(width, yPos);
  }
  ctx.stroke();
};

// Extract glow drawing logic
const drawGlowingPixel = (ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius) => {
  // Save context state
  ctx.save();
  
  const alpha = Math.min(glowSettings.opacity / 100, 2.0);
  const spread = (glowSettings.spread / 100) * pixelSize; // Convert spread to pixels
  const blur = glowSettings.size;
  const offsetX = glowSettings.offsetX;
  const offsetY = glowSettings.offsetY;

  // Create a temporary canvas for the glow effect
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  
  // Make the temp canvas larger to accommodate the glow
  const padding = Math.max(blur * 3, Math.abs(offsetX), Math.abs(offsetY));
  tempCanvas.width = pixelSize + spread * 2 + (padding * 2);
  tempCanvas.height = pixelSize + spread * 2 + (padding * 2);
  
  // Center position in temp canvas, accounting for spread
  const centerX = padding + spread;
  const centerY = padding + spread;

  // Draw the base shape with spread
  tempCtx.fillStyle = color;
  if (cornerRadius.enabled) {
    drawRoundedPixel(
      tempCtx, 
      centerX - spread/2, 
      centerY - spread/2, 
      pixelSize + spread,
      cornerRadius
    );
    tempCtx.fill();
  } else {
    tempCtx.fillRect(
      centerX - spread/2,
      centerY - spread/2,
      pixelSize + spread,
      pixelSize + spread
    );
  }

  // Create a blurred version
  const blurCanvas = document.createElement('canvas');
  const blurCtx = blurCanvas.getContext('2d');
  blurCanvas.width = tempCanvas.width;
  blurCanvas.height = tempCanvas.height;

  // Apply the blur
  blurCtx.filter = `blur(${blur}px)`;
  blurCtx.globalAlpha = alpha;
  blurCtx.drawImage(tempCanvas, 0, 0);

  // Draw the glow onto the main canvas
  ctx.globalCompositeOperation = 'lighter';
  ctx.drawImage(
    blurCanvas, 
    xPos - padding - spread/2 + offsetX,
    yPos - padding - spread/2 + offsetY
  );

  // Reset composite operation and draw the actual pixel
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = color;
  if (cornerRadius.enabled) {
    drawRoundedPixel(ctx, xPos, yPos, pixelSize, cornerRadius);
    ctx.fill();
  } else {
    ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
  }

  // Restore context
  ctx.restore();
};

// Cache for bulb gradients
const bulbGradientCache = new Map();

const getBulbGradient = (ctx, width, height, settings) => {
  if (!settings) return null;

  // Create cache key from settings
  const key = `${width}-${height}-${settings.intensity}-${settings.radius}-${settings.positionX}-${settings.positionY}-${settings.color}-${settings.blend}`;
  
  if (bulbGradientCache.has(key)) {
    return bulbGradientCache.get(key);
  }

  // Create temporary canvas for the gradient
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');

  // Calculate gradient center point based on position settings
  const centerX = (settings.positionX / 100) * width;
  const centerY = (settings.positionY / 100) * height;
  
  // Calculate radius based on the pixel size and settings
  const maxDimension = Math.max(width, height);
  const gradientRadius = (maxDimension * settings.radius) / 100;

  // Create radial gradient
  const gradient = tempCtx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, gradientRadius
  );

  // Convert intensity to alpha value (0-1)
  const alpha = settings.intensity / 100;

  // Add color stops with custom color
  gradient.addColorStop(0, `${settings.color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');

  // Draw gradient
  tempCtx.fillStyle = gradient;
  tempCtx.fillRect(0, 0, width, height);

  // Cache the result
  bulbGradientCache.set(key, tempCanvas);
  
  // Limit cache size
  if (bulbGradientCache.size > 50) {
    const firstKey = bulbGradientCache.keys().next().value;
    bulbGradientCache.delete(firstKey);
  }

  return tempCanvas;
};

const drawBulbEffect = (ctx, xPos, yPos, pixelSize, color, bulbSettings) => {
  if (!bulbSettings) return;

  // Save context state
  ctx.save();

  // Get bulb gradient
  const bulbCanvas = getBulbGradient(ctx, pixelSize, pixelSize, bulbSettings);
  if (!bulbCanvas) return;

  // Set blend mode and alpha
  ctx.globalCompositeOperation = bulbSettings.blend;
  ctx.globalAlpha = 1; // Ensure full opacity for the effect

  // Draw the bulb effect
  ctx.drawImage(bulbCanvas, xPos, yPos);

  // Restore context
  ctx.restore();
};

const drawPixel = (ctx, xPos, yPos, pixelSize, color, cornerRadius, glowEnabled, glowSettings, bulbEnabled, bulbSettings) => {
  // Draw glow effect if enabled
  if (glowEnabled) {
    drawGlowingPixel(ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius);
  }

  // Draw the base pixel
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  ctx.fillStyle = color;
  if (cornerRadius.enabled) {
    drawRoundedPixel(ctx, xPos, yPos, pixelSize, cornerRadius);
    ctx.fill();
  } else {
    ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
  }
  ctx.restore();

  // Draw bulb effect if enabled and settings exist
  if (bulbEnabled && bulbSettings) {
    drawBulbEffect(ctx, xPos, yPos, pixelSize, color, bulbSettings);
  }
};

// Memoize the component to prevent unnecessary re-renders
const CanvasRenderer = memo(({
  gridWidth,
  gridHeight,
  pixelSize,
  gridGap,
  pixelData,
  showGrid,
  isDrawing,
  onPixelClick,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  style,
  cornerRadius,
  glowEnabled,
  glowSettings,
  bulbEnabled,
  bulbSettings,
  mode,
  interactionSettings
}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [hoveredPixel, setHoveredPixel] = useState(null);

  // Initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    ctxRef.current = ctx;
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

  // Enhanced render function
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid if enabled
    if (showGrid) {
      drawGrid(ctx, canvas.width, canvas.height, gridWidth, gridHeight, pixelSize, gridGap);
    }

    // Draw pixels
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        const color = pixelData[y]?.[x];
        if (!color) continue;

        // Calculate the cell position
        const cellSize = pixelSize + gridGap;
        // Center the pixel in the cell when there's a gap
        const xPos = x * cellSize + (gridGap / 2);
        const yPos = y * cellSize + (gridGap / 2);

        // Save context state
        ctx.save();

        // Apply hover effects in interact mode
        if (mode === 'interact' && 
            hoveredPixel && 
            hoveredPixel.gridX === x && 
            hoveredPixel.gridY === y) {
          
          // Apply scale effect
          if (interactionSettings.hover.scale.enabled) {
            const scale = interactionSettings.hover.scale.value;
            const centerX = xPos + pixelSize / 2;
            const centerY = yPos + pixelSize / 2;
            ctx.translate(centerX, centerY);
            ctx.scale(scale, scale);
            ctx.translate(-centerX, -centerY);
          }

          // Apply brightness effect
          if (interactionSettings.hover.brightness.enabled) {
            ctx.filter = `brightness(${interactionSettings.hover.brightness.value})`;
          }
        }

        // Draw the pixel with all effects
        drawPixel(
          ctx, 
          xPos, 
          yPos, 
          pixelSize, 
          color, 
          cornerRadius, 
          glowEnabled, 
          glowSettings,
          bulbEnabled,
          bulbSettings
        );

        // Restore context state
        ctx.restore();
      }
    }
  }, [
    gridWidth, gridHeight, pixelSize, gridGap,
    pixelData, showGrid, cornerRadius,
    glowEnabled, glowSettings,
    bulbEnabled, bulbSettings,
    mode, hoveredPixel, 
    interactionSettings
  ]);

  // Make sure canvas dimensions are properly set
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const expectedWidth = gridWidth * (pixelSize + gridGap) - gridGap;
      const expectedHeight = gridHeight * (pixelSize + gridGap) - gridGap;
      
      if (canvas.width !== expectedWidth) {
        canvas.width = expectedWidth;
      }
      if (canvas.height !== expectedHeight) {
        canvas.height = expectedHeight;
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
  const handleClick = useCallback((event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const coords = getGridCoordinates(offsetX, offsetY);
    if (onPixelClick) {
      onPixelClick({ 
        ...coords,
        buttons: event.buttons,
        metaKey: event.metaKey 
      });
    }
  }, [getGridCoordinates, onPixelClick]);

  // Handle hover effects
  const handleMouseMove = useCallback((event) => {
    if (mode !== 'interact') {
      if (isDrawing) {
        const { offsetX, offsetY } = event.nativeEvent;
        const coords = getGridCoordinates(offsetX, offsetY);
        if (onPixelClick) {
          onPixelClick({ 
            ...coords,
            buttons: event.buttons,
            metaKey: event.metaKey 
          });
        }
      }
      return;
    }

    const { offsetX, offsetY } = event.nativeEvent;
    const coords = getGridCoordinates(offsetX, offsetY);
    setHoveredPixel(coords);
  }, [isDrawing, mode, onPixelClick, getGridCoordinates]);

  // Simplified pixel click handler (removed ripple effect)
  const handlePixelClick = useCallback((event) => {
    if (mode !== 'interact') {
      handleClick(event);
      return;
    }
    
    // Removed ripple effect code - this is now a placeholder for future click effects
    console.log('Interactive click - ripple effect removed');
    
  }, [mode, handleClick]);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <CanvasElement
      ref={canvasRef}
      width={gridWidth * (pixelSize + gridGap) - gridGap}
      height={gridHeight * (pixelSize + gridGap) - gridGap}
      onClick={handlePixelClick}
      onMouseMove={handleMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={(e) => {
        setHoveredPixel(null);
        onMouseLeave(e);
      }}
      onContextMenu={handleContextMenu}
      style={style}
    />
  );
});

export default CanvasRenderer; 