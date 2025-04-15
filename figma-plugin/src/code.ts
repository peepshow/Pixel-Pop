// This is the main code that runs in the Figma environment
// It communicates with the UI code through messaging

// Type declarations for Figma API
// In a production environment, you would use @figma/plugin-typings
declare const figma: {
  showUI: (html: string, options: { width: number; height: number }) => void;
  ui: {
    onmessage: (callback: (msg: any) => void) => void;
    resize: (width: number, height: number) => void;
  };
  notify: (message: string) => void;
  closePlugin: () => void;
  createFrame: () => FrameNode;
  createRectangle: () => RectangleNode;
  currentPage: {
    selection: ReadonlyArray<SceneNode>;
  };
  viewport: {
    scrollAndZoomIntoView: (nodes: ReadonlyArray<SceneNode>) => void;
  };
  command?: string;
};

declare const __html__: string;

declare interface SceneNode {
  name: string;
  resize: (width: number, height: number) => void;
  appendChild: (child: SceneNode) => void;
}

// Update Paint type to include opacity which is needed for transparency
interface Paint {
  type: string;
  color?: { r: number; g: number; b: number };
  opacity?: number; // Add opacity property
}

declare interface FrameNode extends SceneNode {
  x: number;
  y: number;
  fills: Paint[];
}

declare interface RectangleNode extends SceneNode {
  x: number;
  y: number;
  cornerRadius: number;
  fills: Paint[];
}

/**
 * Types for message passing between UI and plugin
 */
interface PixelData {
  grid: Array<Array<string | null>>;
  width: number;
  height: number;
  pixelSize: number;
  gridGap: number;
  pixelShape?: string;
  cornerRadius?: number;
  glowEnabled?: boolean;
  glowSettings?: {
    color?: string;
    blur?: number;
    spread?: number;
    intensity?: number;
  };
  totalWidth?: number;
  totalHeight?: number;
  includeGrid?: boolean;
  includeBackground?: boolean;
  backgroundColor?: string;
}

interface MessageCreatePixelArt {
  type: 'create-pixel-art';
  pixelData: PixelData;
}

interface MessageResizeUI {
  type: 'resize-ui';
  width: number;
  height: number;
}

interface MessageNotify {
  type: 'notify';
  message: string;
}

interface MessageCancel {
  type: 'cancel';
}

type Message = 
  | MessageCreatePixelArt 
  | MessageResizeUI 
  | MessageNotify
  | MessageCancel;

/**
 * Helper function to convert color string to RGB values for Figma
 * Supports hex colors (#RGB, #RGBA, #RRGGBB, #RRGGBBAA) and rgba() format
 */
function parseColor(color: string): { r: number; g: number; b: number; a: number } {
  // Default alpha is 1 (fully opaque)
  let r = 0, g = 0, b = 0, a = 1;
  
  // Check if it's an rgba() format
  const rgbaMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)/i);
  if (rgbaMatch) {
    // Convert RGB values from 0-255 to 0-1 range for Figma
    r = parseInt(rgbaMatch[1], 10) / 255;
    g = parseInt(rgbaMatch[2], 10) / 255;
    b = parseInt(rgbaMatch[3], 10) / 255;
    a = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
    return { r, g, b, a };
  }

  // Handle hex format
  // Remove the # if present
  const hex = color.replace(/^#/, '');
  
  if (hex.length === 3) {
    // #RGB format (shorthand)
    r = parseInt(hex[0] + hex[0], 16) / 255;
    g = parseInt(hex[1] + hex[1], 16) / 255;
    b = parseInt(hex[2] + hex[2], 16) / 255;
  } else if (hex.length === 4) {
    // #RGBA format (shorthand)
    r = parseInt(hex[0] + hex[0], 16) / 255;
    g = parseInt(hex[1] + hex[1], 16) / 255;
    b = parseInt(hex[2] + hex[2], 16) / 255;
    a = parseInt(hex[3] + hex[3], 16) / 255;
  } else if (hex.length === 6) {
    // #RRGGBB format
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
  } else if (hex.length === 8) {
    // #RRGGBBAA format
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  
  // Ensure values are in valid range
  r = Math.max(0, Math.min(1, r));
  g = Math.max(0, Math.min(1, g));
  b = Math.max(0, Math.min(1, b));
  a = Math.max(0, Math.min(1, a));
  
  return { r, g, b, a };
}

/**
 * Initial plugin setup
 */
figma.showUI(__html__, { width: 800, height: 700 });

/**
 * Handle messages from the UI
 */
figma.ui.onmessage = (msg: any) => {
  const typedMsg = msg as Message;
  
  switch (typedMsg.type) {
    case 'create-pixel-art':
      createPixelArt(typedMsg.pixelData);
      break;
    
    case 'resize-ui':
      figma.ui.resize(typedMsg.width, typedMsg.height);
      break;
    
    case 'notify':
      figma.notify(typedMsg.message);
      break;
    
    case 'cancel':
      figma.closePlugin();
      break;
  }
};

/**
 * Create pixel art in Figma from pixel data
 */
function createPixelArt(pixelData: PixelData) {
  const { 
    grid, 
    pixelSize = 40, 
    width = grid[0].length, 
    height = grid.length,
    gridGap = 0,
    pixelShape = 'square',
    cornerRadius = 0,
    includeBackground = false
  } = pixelData;
  
  // Create a frame for the pixel art
  const frame = figma.createFrame();
  frame.name = "PixelPop Artwork";
  
  // Set the frame size based on the grid dimensions
  const totalWidth = width * (pixelSize + gridGap) - gridGap;
  const totalHeight = height * (pixelSize + gridGap) - gridGap;
  frame.resize(totalWidth, totalHeight);
  
  // Set frame background if needed
  if (includeBackground && pixelData.backgroundColor) {
    const bgColor = parseColor(pixelData.backgroundColor);
    frame.fills = [{
      type: 'SOLID',
      color: { r: bgColor.r, g: bgColor.g, b: bgColor.b },
      opacity: bgColor.a
    }];
  } else {
    frame.fills = []; // No background
  }
  
  // For large pixel art (more than 1000 pixels), use batched processing
  // to prevent potential performance issues
  const BATCH_SIZE = 500; // Process 500 pixels at a time
  let pixelsToProcess: { x: number; y: number; color: string }[] = [];
  
  // Collect all non-transparent pixels
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Check if grid[y] and grid[y][x] exist before accessing
      if (grid[y] && grid[y][x]) {
        pixelsToProcess.push({ x, y, color: grid[y][x] as string });
      }
    }
  }
  
  // Process pixels in batches
  const totalPixels = pixelsToProcess.length;
  const batches = Math.ceil(totalPixels / BATCH_SIZE);
  
  if (totalPixels > BATCH_SIZE) {
    figma.notify(`Creating ${totalPixels} pixels in ${batches} batches...`);
  }
  
  for (let i = 0; i < batches; i++) {
    const startIdx = i * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, totalPixels);
    const batch = pixelsToProcess.slice(startIdx, endIdx);
    
    batch.forEach(({ x, y, color }) => {
      // Create a rectangle for this pixel
      const rect = figma.createRectangle();
      
      // Position with grid gap
      rect.x = x * (pixelSize + gridGap);
      rect.y = y * (pixelSize + gridGap);
      rect.resize(pixelSize, pixelSize);
      
      // Apply corner radius for rounded pixels
      if (pixelShape === 'rounded' || pixelShape === 'circle') {
        rect.cornerRadius = pixelShape === 'circle' ? pixelSize / 2 : cornerRadius || 4;
      }
      
      // Parse and set the fill color with proper alpha support
      const parsedColor = parseColor(color);
      rect.fills = [{
        type: 'SOLID',
        color: { r: parsedColor.r, g: parsedColor.g, b: parsedColor.b },
        opacity: parsedColor.a
      }];
      
      // Add the rectangle to the frame
      frame.appendChild(rect);
    });
    
    if (batches > 1) {
      figma.notify(`Processed batch ${i + 1}/${batches}`);
    }
  }
  
  // Select the created frame
  figma.currentPage.selection = [frame];
  
  // Zoom to fit the created frame
  figma.viewport.scrollAndZoomIntoView([frame]);
  
  // Notify success
  figma.notify(`Pixel art created successfully with ${totalPixels} pixels!`);
}

// The following function will be used when we implement the import-to-figma command
function handleCommand(command: string) {
  switch (command) {
    case 'create-pixel-art':
      // This command opens the UI to create pixel art
      break;
      
    case 'import-to-figma':
      // This command will import directly to Figma (to be implemented)
      break;
      
    case 'about':
      // Show information about the plugin
      figma.notify("PixelPop: A pixel art creation tool");
      figma.closePlugin();
      break;
  }
}

// Handle the initial command if present
if (figma.command) {
  handleCommand(figma.command);
} 