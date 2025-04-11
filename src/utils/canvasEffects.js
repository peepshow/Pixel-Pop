import { hexToRgba } from './colorUtils';

// Cache for bulb gradients
export const bulbGradientCache = new Map();

// Extract corner radius drawing logic
export const drawRoundedPixel = (ctx, xPos, yPos, pixelSize, cornerRadius) => {
  const maxRadius = pixelSize;
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
export const drawGrid = (ctx, width, height, gridWidth, gridHeight, pixelSize, gridGap) => {
  ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
  ctx.lineWidth = 1;

  // Calculate cell size (including gap)
  const cellSize = pixelSize + gridGap;

  // Batch vertical lines
  ctx.beginPath();
  for (let x = 0; x <= gridWidth; x++) {
    const xPos = x * cellSize;
    ctx.moveTo(xPos, 0);
    ctx.lineTo(xPos, height);
  }
  ctx.stroke();

  // Batch horizontal lines
  ctx.beginPath();
  for (let y = 0; y <= gridHeight; y++) {
    const yPos = y * cellSize;
    ctx.moveTo(0, yPos);
    ctx.lineTo(width, yPos);
  }
  ctx.stroke();
};

// Extract circle drawing logic
export const drawCirclePixel = (ctx, xPos, yPos, pixelSize) => {
  const radius = pixelSize / 2;
  const centerX = xPos + radius;
  const centerY = yPos + radius;
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.closePath();
};

// Extract diamond drawing logic
export const drawDiamondPixel = (ctx, xPos, yPos, pixelSize) => {
  const halfSize = pixelSize / 2;
  const centerX = xPos + halfSize;
  const centerY = yPos + halfSize;
  
  ctx.beginPath();
  ctx.moveTo(centerX, yPos); // Top
  ctx.lineTo(xPos + pixelSize, centerY); // Right
  ctx.lineTo(centerX, yPos + pixelSize); // Bottom
  ctx.lineTo(xPos, centerY); // Left
  ctx.closePath();
};

// Extract triangle drawing logic
export const drawTrianglePixel = (ctx, xPos, yPos, pixelSize) => {
  ctx.beginPath();
  ctx.moveTo(xPos + pixelSize / 2, yPos); // Top
  ctx.lineTo(xPos + pixelSize, yPos + pixelSize); // Bottom right
  ctx.lineTo(xPos, yPos + pixelSize); // Bottom left
  ctx.closePath();
};

// Extract hexagon drawing logic
export const drawHexagonPixel = (ctx, xPos, yPos, pixelSize) => {
  const radius = pixelSize / 2;
  const centerX = xPos + radius;
  const centerY = yPos + radius;
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = i * Math.PI / 3;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
};

// Extract glow drawing logic
export const drawGlowingPixel = (ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius, pixelShape = 'rectangle') => {
  // --- Settings --- 
  const opacity = (glowSettings.opacity || 0) / 100;
  const spreadAmount = (glowSettings.spread || 0) / 100 * pixelSize; // Original spread calculation
  const visualSpreadMultiplier = 2.0; // Multiplier to visually increase spread - INCREASED
  const visualSpread = spreadAmount * visualSpreadMultiplier;
  const blurRadius = glowSettings.size || 0;
  const offsetX = glowSettings.offsetX || 0;
  const offsetY = glowSettings.offsetY || 0;
  const blendMode = glowSettings.blendMode || 'source-over'; 

  // --- Temporary Canvas Setup ---
  // Padding needs to account for the potentially larger visual spread
  const padding = Math.max(blurRadius * 2, Math.abs(offsetX), Math.abs(offsetY), visualSpread); // Ensure padding covers visual spread
  const tempCanvasWidth = pixelSize + visualSpread * 2 + padding * 2;
  const tempCanvasHeight = pixelSize + visualSpread * 2 + padding * 2;
  
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = tempCanvasWidth;
  tempCanvas.height = tempCanvasHeight;

  // --- 1. Draw Spread Shape on Temp Canvas --- 
  // Position uses padding + visualSpread
  const shapeX = padding + visualSpread;
  const shapeY = padding + visualSpread;
  const shapeSize = pixelSize + visualSpread; // Use visualSpread for size
  
  tempCtx.fillStyle = color;
  // Drawing logic uses shapeSize and offsets based on visualSpread/2
  switch (pixelShape) {
    case 'circle':
      drawCirclePixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'diamond':
      drawDiamondPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'triangle':
      drawTrianglePixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'hexagon':
      drawHexagonPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'rectangle':
    default:
      if (cornerRadius?.enabled) {
        // Note: Corner radius calculation is based on original pixelSize, but applied to shapeSize.
        // This might need adjustment if corner appearance differs significantly.
        drawRoundedPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize, cornerRadius);
        tempCtx.fill();
      } else {
        tempCtx.fillRect(shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize, shapeSize);
      }
      break;
  }

  // --- 2. Apply Blur In Place on Temp Canvas --- 
  if (blurRadius > 0) {
      tempCtx.globalCompositeOperation = 'copy';
      tempCtx.filter = `blur(${blurRadius / 2}px)`;
      tempCtx.drawImage(tempCanvas, 0, 0);
      tempCtx.filter = 'none';
      tempCtx.globalCompositeOperation = 'source-over';
  }

  // --- 3. Draw Glow Layer on Main Canvas --- 
  ctx.save();
  ctx.globalCompositeOperation = blendMode;
  ctx.globalAlpha = opacity;
  
  // Calculate draw position based on aligning centers
  const drawX = xPos + offsetX - visualSpread - padding;
  const drawY = yPos + offsetY - visualSpread - padding;
  
  ctx.drawImage(tempCanvas, drawX, drawY);
  ctx.restore();

  // --- 4. Draw Crisp Top Layer --- 
  ctx.save(); // Save again before drawing top layer
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  ctx.fillStyle = color; // Ensure correct fill color
  switch (pixelShape) {
    case 'circle':
      drawCirclePixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'diamond':
      drawDiamondPixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'triangle':
      drawTrianglePixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'hexagon':
      drawHexagonPixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'rectangle':
    default:
      if (cornerRadius?.enabled) {
        drawRoundedPixel(ctx, xPos, yPos, pixelSize, cornerRadius);
        ctx.fill();
      } else {
        ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
      }
      break;
  }
  ctx.restore(); // Restore after drawing top layer
};

// Refactored to create a per-pixel, shaped gradient
export const getBulbGradient = (ctx, pixelSize, settings, pixelShape, cornerRadius) => {
  // Create cache key including shape info
  const cornerKey = cornerRadius?.enabled ? JSON.stringify(cornerRadius) : 'none';
  const cacheKey = `${pixelSize}-${JSON.stringify(settings)}-${pixelShape}-${cornerKey}`;
  
  if (bulbGradientCache.has(cacheKey)) {
    return bulbGradientCache.get(cacheKey);
  }

  // Create a temporary canvas sized for one pixel
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = pixelSize;
  tempCanvas.height = pixelSize;

  // --- 1. Draw the mask shape --- 
  // Draw shapes at 0,0 relative to the tempCanvas
  tempCtx.fillStyle = '#ffffff'; // Use any opaque color for the mask shape
  switch (pixelShape) {
      case 'circle':
          drawCirclePixel(tempCtx, 0, 0, pixelSize);
          tempCtx.fill();
          break;
      case 'diamond':
          drawDiamondPixel(tempCtx, 0, 0, pixelSize);
          tempCtx.fill();
          break;
      case 'triangle':
          drawTrianglePixel(tempCtx, 0, 0, pixelSize);
          tempCtx.fill();
          break;
      case 'hexagon':
          drawHexagonPixel(tempCtx, 0, 0, pixelSize);
          tempCtx.fill();
          break;
      case 'rectangle':
      default:
          if (cornerRadius?.enabled) {
              drawRoundedPixel(tempCtx, 0, 0, pixelSize, cornerRadius);
              tempCtx.fill();
          } else {
              tempCtx.fillRect(0, 0, pixelSize, pixelSize);
          }
          break;
  }

  // --- 2. Apply gradient using source-in --- 
  tempCtx.globalCompositeOperation = 'source-in';

  // Calculate gradient parameters relative to pixelSize
  const centerX = (settings.positionX / 100) * pixelSize;
  const centerY = (settings.positionY / 100) * pixelSize;
  const radius = (settings.radius / 100) * pixelSize; // Radius based on pixel size
  const color = settings.color || '#ffffff';
  const intensity = (settings.intensity || 0) / 100;

  const gradient = tempCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
  gradient.addColorStop(0, hexToRgba(color, intensity)); 
  gradient.addColorStop(1, hexToRgba(color, 0));       

  tempCtx.fillStyle = gradient;
  tempCtx.fillRect(0, 0, pixelSize, pixelSize); // Fill the whole temp canvas

  // Reset composite operation just in case
  tempCtx.globalCompositeOperation = 'source-over';

  // --- 3. Cache and return --- 
  // Optional: Limit cache size
  if (bulbGradientCache.size > 100) { // Limit cache to e.g., 100 entries
      const firstKey = bulbGradientCache.keys().next().value;
      bulbGradientCache.delete(firstKey);
  }
  bulbGradientCache.set(cacheKey, tempCanvas);
  return tempCanvas;
};

// Refactored to draw the per-pixel gradient canvas
export const drawBulbEffect = (ctx, xPos, yPos, pixelSize, settings, pixelShape, cornerRadius) => {
  if (!settings) return; 

  const blendMode = settings.blendMode || 'screen';

  // Get per-pixel shaped gradient canvas
  const gradientCanvas = getBulbGradient(ctx, pixelSize, settings, pixelShape, cornerRadius);

  // Draw the gradient overlay at the pixel position
  ctx.save();
  ctx.globalCompositeOperation = blendMode;
  ctx.drawImage(gradientCanvas, xPos, yPos);
  ctx.restore();
};

// Function to draw a custom shape from SVG path
export const drawCustomShape = (ctx, xPos, yPos, pixelSize, customShape) => {
  if (!customShape?.path) return false;
  
  try {
    // Create a temporary SVG with the custom path
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", pixelSize);
    svg.setAttribute("height", pixelSize);
    svg.setAttribute("viewBox", customShape.viewBox || "0 0 100 100");
    
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", customShape.path);
    path.setAttribute("fill", "black");
    svg.appendChild(path);
    
    // Convert SVG to a data URL
    const svgString = new XMLSerializer().serializeToString(svg);
    const dataURL = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
    
    // Create an image and draw it on the canvas when loaded
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, xPos, yPos, pixelSize, pixelSize);
    };
    img.src = dataURL;
    
    return true;
  } catch (error) {
    console.error("Error drawing custom shape:", error);
    return false;
  }
};

// Draw a single pixel with the specified properties
export const drawPixel = (ctx, xPos, yPos, pixelSize, color, cornerRadius, glowEnabled, glowSettings, bulbEnabled, bulbSettings, pixelShape = 'rectangle', customShape) => {
  if (glowEnabled && glowSettings) {
    // Glow effect handles drawing the base pixel + glow
    drawGlowingPixel(ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius, pixelShape);
  } else {
    // If glow is NOT enabled, draw the base pixel normally
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = color;
    
    let shapeDrawn = false;
    if (pixelShape === 'custom' && customShape?.path) {
      shapeDrawn = drawCustomShape(ctx, xPos, yPos, pixelSize, customShape);
    }
    
    if (!shapeDrawn) {
      switch (pixelShape) {
        case 'circle':
          drawCirclePixel(ctx, xPos, yPos, pixelSize);
          ctx.fill();
          break;
        case 'diamond':
          drawDiamondPixel(ctx, xPos, yPos, pixelSize);
          ctx.fill();
          break;
        case 'triangle':
          drawTrianglePixel(ctx, xPos, yPos, pixelSize);
          ctx.fill();
          break;
        case 'hexagon':
          drawHexagonPixel(ctx, xPos, yPos, pixelSize);
          ctx.fill();
          break;
        case 'rectangle':
        default:
          // Check cornerRadius here ONLY if glow is disabled
          if (cornerRadius?.enabled) { // Use optional chaining for safety
            drawRoundedPixel(ctx, xPos, yPos, pixelSize, cornerRadius);
            ctx.fill();
          } else {
            ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
          }
          break;
      }
    }
    ctx.restore();
  }

  // Draw bulb effect (always after base pixel/glow is drawn)
  if (bulbEnabled && bulbSettings) {
    drawBulbEffect(ctx, xPos, yPos, pixelSize, bulbSettings, pixelShape, cornerRadius);
  }
};

// Function to draw ONLY the glow layer
export const drawGlowLayer = (ctx, xPos, yPos, pixelSize, color, glowSettings, cornerRadius, pixelShape = 'rectangle') => {
  // --- Settings --- 
  const opacity = (glowSettings.opacity || 0) / 100;
  const spreadAmount = (glowSettings.spread || 0) / 100 * pixelSize;
  const visualSpreadMultiplier = 2.0; 
  const visualSpread = spreadAmount * visualSpreadMultiplier;
  const blurRadius = glowSettings.size || 0;
  const offsetX = glowSettings.offsetX || 0;
  const offsetY = glowSettings.offsetY || 0;
  const blendMode = glowSettings.blendMode || 'source-over'; 

  // --- Temporary Canvas Setup ---
  const padding = Math.max(blurRadius * 2, Math.abs(offsetX), Math.abs(offsetY), visualSpread);
  const tempCanvasWidth = pixelSize + visualSpread * 2 + padding * 2;
  const tempCanvasHeight = pixelSize + visualSpread * 2 + padding * 2;
  
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = tempCanvasWidth;
  tempCanvas.height = tempCanvasHeight;

  // --- 1. Draw Spread Shape on Temp Canvas --- 
  const shapeX = padding + visualSpread;
  const shapeY = padding + visualSpread;
  const shapeSize = pixelSize + visualSpread;
  
  tempCtx.fillStyle = color;
  switch (pixelShape) {
    case 'circle':
      drawCirclePixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'diamond':
      drawDiamondPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'triangle':
      drawTrianglePixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'hexagon':
      drawHexagonPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize);
      tempCtx.fill();
      break;
    case 'rectangle':
    default:
      if (cornerRadius?.enabled) {
        drawRoundedPixel(tempCtx, shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize, cornerRadius);
        tempCtx.fill();
      } else {
        tempCtx.fillRect(shapeX - visualSpread/2, shapeY - visualSpread/2, shapeSize, shapeSize);
      }
      break;
  }

  // --- 2. Apply Blur In Place on Temp Canvas --- 
  if (blurRadius > 0) {
      tempCtx.globalCompositeOperation = 'copy';
      tempCtx.filter = `blur(${blurRadius / 2}px)`; 
      tempCtx.drawImage(tempCanvas, 0, 0);
      tempCtx.filter = 'none';
      tempCtx.globalCompositeOperation = 'source-over';
  }

  // --- 3. Draw Glow Layer on Main Canvas --- 
  ctx.save();
  ctx.globalCompositeOperation = blendMode;
  ctx.globalAlpha = opacity;
  const drawX = xPos + offsetX - visualSpread - padding;
  const drawY = yPos + offsetY - visualSpread - padding;
  ctx.drawImage(tempCanvas, drawX, drawY);
  ctx.restore();
};

// Function to draw ONLY the crisp pixel layer
export const drawCrispPixel = (ctx, xPos, yPos, pixelSize, color, cornerRadius, pixelShape = 'rectangle') => {
  ctx.save(); 
  ctx.globalCompositeOperation = 'source-over'; // Ensure normal drawing
  ctx.globalAlpha = 1; 
  ctx.fillStyle = color;
  
  switch (pixelShape) {
    case 'circle':
      drawCirclePixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'diamond':
      drawDiamondPixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'triangle':
      drawTrianglePixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'hexagon':
      drawHexagonPixel(ctx, xPos, yPos, pixelSize);
      ctx.fill();
      break;
    case 'rectangle':
    default:
      if (cornerRadius?.enabled) {
        drawRoundedPixel(ctx, xPos, yPos, pixelSize, cornerRadius);
        ctx.fill();
      } else {
        ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
      }
      break;
  }
  ctx.restore();
}; 