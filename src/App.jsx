import { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Canvas from './components/canvas/Canvas'
import Sidebar from './components/sidebar/Sidebar'
import GridEdgeControls from './components/canvas/GridEdgeControls'
import NavMenu from './components/navigation/NavMenu'
import ImageCropModal from './components/modals/ImageCropModal'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  padding-right: 330px; /* Account for sidebar width */
  margin-top: 60px; /* Account for fixed header height */
`

const CanvasWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary);
  width: 100%;
`

const Header = styled.header`
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* Fixed height for header */
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100; /* Ensure header is above sidebar */
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

const MAX_HISTORY_LENGTH = 256;

function App() {
  const canvasRef = useRef(null);

  const [gridDimensions, setGridDimensions] = useState({ width: 32, height: 32 });
  const [pixelSize, setPixelSize] = useState(24);
  const [gridGap, setGridGap] = useState(0);
  const [activeColor, setActiveColorState] = useState('#FF0000');
  const [colorHistory, setColorHistory] = useState(['#FF0000']);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [lastActionType, setLastActionType] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [isInitialized, setIsInitialized] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [importImageUrl, setImportImageUrl] = useState(null);

  // Add pixel effects state
  const [cornerRadius, setCornerRadius] = useState({
    enabled: false,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  });
  const [glowEnabled, setGlowEnabled] = useState(false);
  const [bulbEnabled, setBulbEnabled] = useState(false);
  const [innerShadowEnabled, setInnerShadowEnabled] = useState(false);

  // Glow effect state
  const [glowSettings, setGlowSettings] = useState({
    size: 5,
    opacity: 50,
    spread: 50,
    offsetX: 0,
    offsetY: 0
  });

  // Bulb effect state
  const [bulbSettings, setBulbSettings] = useState({
    intensity: 50,
    radius: 100,
    positionX: 50,
    positionY: 50,
    color: '#ffffff',
    blend: 'overlay'
  });

  // Lifted pixelGrid state
  const [pixelGrid, setPixelGrid] = useState(() => {
    const { width, height } = gridDimensions;
    const grid = [];
    for (let i = 0; i < height; i++) {
      grid[i] = new Array(width).fill(null);
    }
    return grid;
  });

  // --- Add state for tools ---
  const [activeTool, setActiveTool] = useState('pencil'); // Default tool
  const [showGrid, setShowGrid] = useState(true); // Default grid state
  const [pickerColor, setPickerColor] = useState(activeColor); // Temp color for picker input

  // --- NEW: Add state for interaction mode ---
  const [mode, setMode] = useState('edit'); // 'edit' or 'interact'

  // --- REFINED: Interaction settings state with specific controls ---
  const [interactionSettings, setInteractionSettings] = useState({
    hover: {
      scale: {
        enabled: false,
        value: 1.2 // Default scale factor (120%)
      },
      brightness: {
        enabled: false,
        value: 1.3 // Default brightness factor (130%)
      }
    },
    click: {
      // Simplified click effects structure - removed ripple for later reimplementation
      enabled: false
      // New click effects will be implemented here
    }
  });

  // --- Update pickerColor when activeColor changes externally ---
  useEffect(() => {
    setPickerColor(activeColor);
  }, [activeColor]);

  // Initialize history with the initial grid state
  useEffect(() => {
    if (!isInitialized) {
      const initialGrid = pixelGrid.map(row => [...row]);
      setHistory([{ 
        pixelGrid: initialGrid, 
        gridDimensions: { ...gridDimensions },
        type: 'initial' 
      }]);
      setCurrentHistoryIndex(0);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Add effect to handle history entries for drawing operations
  useEffect(() => {
    if (lastActionType === 'draw' && isInitialized) {
      const newHistoryEntry = {
        pixelGrid: pixelGrid.map(row => [...row]),
        gridDimensions: { ...gridDimensions },
        type: 'draw'
      };

      setHistory(prevHistory => {
        // Remove any redo states
        const newHistory = prevHistory.slice(0, currentHistoryIndex + 1);
        return [...newHistory, newHistoryEntry];
      });
      setCurrentHistoryIndex(prevIndex => prevIndex + 1);
      setLastActionType(null);
    }
  }, [lastActionType, currentHistoryIndex, pixelGrid, gridDimensions, isInitialized]);

  // Add effect to handle history entries for grid changes
  useEffect(() => {
    if (lastActionType === 'grid_change' && isInitialized) {
      const newHistoryEntry = {
        pixelGrid: pixelGrid.map(row => [...row]),
        gridDimensions: { ...gridDimensions },
        type: 'grid_change'
      };

      setHistory(prevHistory => {
        // Remove any redo states
        const newHistory = prevHistory.slice(0, currentHistoryIndex + 1);
        return [...newHistory, newHistoryEntry];
      });
      setCurrentHistoryIndex(prevIndex => prevIndex + 1);
      setLastActionType(null);
    }
  }, [lastActionType, currentHistoryIndex, pixelGrid, gridDimensions, isInitialized]);

  // Update pixel styles when effects change
  useEffect(() => {
    if (isInitialized) {
      // Create history entry for effect change
      setLastActionType('effect_change');
    }
  }, [cornerRadius, glowEnabled, bulbEnabled, innerShadowEnabled, isInitialized]);

  const canUndo = currentHistoryIndex > 0;
  const canRedo = currentHistoryIndex < history.length - 1;

  const handleUndo = useCallback(() => {
    console.log('Undo called', { canUndo, currentHistoryIndex, historyLength: history.length });
    if (canUndo) {
      const previousState = history[currentHistoryIndex - 1];
      console.log('Restoring previous state:', previousState);
      setPixelGrid(previousState.pixelGrid.map(row => [...row]));
      setGridDimensions(previousState.gridDimensions);
      setCurrentHistoryIndex(prevIndex => prevIndex - 1);
    }
  }, [canUndo, history, currentHistoryIndex]);

  const handleRedo = useCallback(() => {
    console.log('Redo called', { canRedo, currentHistoryIndex, historyLength: history.length });
    if (canRedo) {
      const nextState = history[currentHistoryIndex + 1];
      console.log('Restoring next state:', nextState);
      setPixelGrid(nextState.pixelGrid.map(row => [...row]));
      setGridDimensions(nextState.gridDimensions);
      setCurrentHistoryIndex(prevIndex => prevIndex + 1);
    }
  }, [canRedo, history, currentHistoryIndex]);

  const handleColorChange = useCallback((newColor) => {
    setActiveColorState(newColor);
    setPickerColor(newColor); // Keep picker in sync

    setColorHistory(prevHistory => {
      const filteredHistory = prevHistory.filter(color => color !== newColor);
      const updatedHistory = [newColor, ...filteredHistory];
      return updatedHistory.slice(0, MAX_HISTORY_LENGTH);
    });
  }, []);

  const notifyDrawingStarted = useCallback(() => {
    if (!hasDrawn) {
      setHasDrawn(true);
    }
    // Create history entry for drawing operation
    setLastActionType('draw');
  }, [hasDrawn]);

  // --- Grid Manipulation Functions ---

  const addRowTop = useCallback(() => {
    const newGrid = Array(gridDimensions.height + 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y + 1][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, height: prev.height + 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const addRowBottom = useCallback(() => {
    const newGrid = Array(gridDimensions.height + 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, height: prev.height + 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const removeRowTop = useCallback(() => {
    const newGrid = Array(gridDimensions.height - 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data, skipping the first row
    for (let y = 0; y < gridDimensions.height - 1; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y + 1][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, height: prev.height - 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const removeRowBottom = useCallback(() => {
    const newGrid = Array(gridDimensions.height - 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data, skipping the last row
    for (let y = 0; y < gridDimensions.height - 1; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, height: prev.height - 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const addColLeft = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width + 1).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x + 1] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, width: prev.width + 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const addColRight = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width + 1).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, width: prev.width + 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const removeColLeft = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width - 1).fill(null)
    );
    // Copy existing grid data, skipping the first column
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width - 1; x++) {
        newGrid[y][x] = pixelGrid[y][x + 1];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, width: prev.width - 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  const removeColRight = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width - 1).fill(null)
    );
    // Copy existing grid data, skipping the last column
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width - 1; x++) {
        newGrid[y][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setGridDimensions(prev => ({ ...prev, width: prev.width - 1 }));
    // Create history entry for grid size change
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid]);

  // ---------------------------------

  const handleImportImage = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImportImageUrl(e.target.result);
      setImportModalOpen(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSaveProject = useCallback(() => {
    const projectData = {
      version: '1.0.0',
      gridDimensions,
      pixelSize,
      gridGap,
      pixelGrid,
      colorHistory
    };

    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pixel-pop-project.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [gridDimensions, pixelSize, gridGap, pixelGrid, colorHistory]);

  const handleLoadProject = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const projectData = JSON.parse(e.target.result);
        
        // Validate project data
        if (!projectData.gridDimensions || !projectData.pixelGrid) {
          throw new Error('Invalid project file format');
        }

        // Update all state
        setGridDimensions(projectData.gridDimensions);
        setPixelSize(projectData.pixelSize);
        setGridGap(projectData.gridGap || 0); // Default to 0 for backward compatibility
        setPixelGrid(projectData.pixelGrid);
        if (projectData.colorHistory) {
          setColorHistory(projectData.colorHistory);
        }
        setHasDrawn(true);
      } catch (error) {
        console.error('Error loading project:', error);
        alert('Failed to load project file. Please make sure it is a valid Pixel Pop project.');
      }
    };
    reader.readAsText(file);
  }, []);

  const handleCropComplete = useCallback((canvas, colorLimit) => {
    // Get the image data from the cropped canvas
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // Update grid dimensions to match cropped size
    setGridDimensions({
      width: canvas.width,
      height: canvas.height
    });
    
    // Collect non-transparent pixels
    const pixels = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const a = imageData.data[i + 3];
      
      if (a > 128) { // Only include non-transparent pixels
        pixels.push({
          r, g, b,
          index: i / 4
        });
      }
    }

    // K-means clustering implementation
    function kMeansClustering(pixels, k) {
      // Initialize k random centroids from actual pixels
      const centroids = [];
      const usedIndices = new Set();
      while (centroids.length < k && centroids.length < pixels.length) {
        const index = Math.floor(Math.random() * pixels.length);
        if (!usedIndices.has(index)) {
          usedIndices.add(index);
          const pixel = pixels[index];
          centroids.push({
            r: pixel.r,
            g: pixel.g,
            b: pixel.b
          });
        }
      }

      // If we have fewer pixels than k, just return all unique colors
      if (pixels.length <= k) {
        const uniqueColors = new Map();
        pixels.forEach(pixel => {
          const color = rgbToHex(pixel.r, pixel.g, pixel.b);
          if (!uniqueColors.has(color)) {
            uniqueColors.set(color, {
              center: { r: pixel.r, g: pixel.g, b: pixel.b },
              pixels: [pixel]
            });
          } else {
            uniqueColors.get(color).pixels.push(pixel);
          }
        });
        return Array.from(uniqueColors.values());
      }

      // Perform clustering iterations
      const maxIterations = 10;
      let iterations = 0;
      let clusters = [];
      let lastCentroids = null;

      while (iterations < maxIterations) {
        // Initialize clusters
        clusters = centroids.map(centroid => ({
          center: centroid,
          pixels: []
        }));

        // Assign pixels to nearest centroid using weighted distance
        pixels.forEach(pixel => {
          let minDistance = Infinity;
          let nearestClusterIndex = 0;

          centroids.forEach((centroid, index) => {
            // Use weighted RGB distance for better perceptual color matching
            const rWeight = 0.299;
            const gWeight = 0.587;
            const bWeight = 0.114;

            const dr = (pixel.r - centroid.r) * rWeight;
            const dg = (pixel.g - centroid.g) * gWeight;
            const db = (pixel.b - centroid.b) * bWeight;
            const distance = dr * dr + dg * dg + db * db;

            if (distance < minDistance) {
              minDistance = distance;
              nearestClusterIndex = index;
            }
          });

          clusters[nearestClusterIndex].pixels.push(pixel);
        });

        // Update centroids
        const newCentroids = clusters.map(cluster => {
          if (cluster.pixels.length === 0) return cluster.center;

          return {
            r: Math.round(cluster.pixels.reduce((sum, p) => sum + p.r, 0) / cluster.pixels.length),
            g: Math.round(cluster.pixels.reduce((sum, p) => sum + p.g, 0) / cluster.pixels.length),
            b: Math.round(cluster.pixels.reduce((sum, p) => sum + p.b, 0) / cluster.pixels.length)
          };
        });

        // Check for convergence
        if (lastCentroids && newCentroids.every((centroid, i) => 
          centroid.r === lastCentroids[i].r && 
          centroid.g === lastCentroids[i].g && 
          centroid.b === lastCentroids[i].b)) {
          break;
        }

        lastCentroids = newCentroids;
        centroids.splice(0, centroids.length, ...newCentroids);
        iterations++;
      }

      return clusters;
    }

    // Helper function to convert RGB to hex
    function rgbToHex(r, g, b) {
      return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    }

    // Perform k-means clustering
    const clusters = kMeansClustering(pixels, colorLimit);

    // Create new pixel grid with quantized colors
    const newPixelGrid = Array(canvas.height).fill().map(() => Array(canvas.width).fill(null));
    const quantizedColors = new Set();

    // Map each pixel to its cluster's color
    clusters.forEach(cluster => {
      const hexColor = rgbToHex(cluster.center.r, cluster.center.g, cluster.center.b);
      cluster.pixels.forEach(pixel => {
        const x = pixel.index % canvas.width;
        const y = Math.floor(pixel.index / canvas.width);
        if (y < newPixelGrid.length && x < newPixelGrid[0].length) {
          newPixelGrid[y][x] = hexColor;
          quantizedColors.add(hexColor);
        }
      });
    });

    // Update color history with quantized colors
    setColorHistory(prevHistory => {
      const combinedColors = [...quantizedColors, ...prevHistory];
      return [...new Set(combinedColors)].slice(0, MAX_HISTORY_LENGTH);
    });
    
    setPixelGrid(newPixelGrid);
    setHasDrawn(true);
    setImportModalOpen(false);
    setImportImageUrl(null);
  }, []);

  const handleExport = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (canvas && canvas.exportPNG) {
      canvas.exportPNG();
    }
  }, []);

  // Placeholder for crop complete if it was moved here - ensure it exists
  const handleImportCropComplete = useCallback((canvas, colorLimit) => {
      // Existing crop logic from previous state
      // Get the image data from the cropped canvas
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Update grid dimensions to match cropped size
      setGridDimensions({
        width: canvas.width,
        height: canvas.height
      });

      // Collect non-transparent pixels
      const pixels = [];
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];

        if (a > 128) { // Only include non-transparent pixels
          pixels.push({
            r, g, b,
            index: i / 4
          });
        }
      }

      // K-means clustering implementation
      function kMeansClustering(pixels, k) {
        // Initialize k random centroids from actual pixels
        const centroids = [];
        const usedIndices = new Set();
        while (centroids.length < k && centroids.length < pixels.length) {
          const index = Math.floor(Math.random() * pixels.length);
          if (!usedIndices.has(index)) {
            usedIndices.add(index);
            const pixel = pixels[index];
            centroids.push({
              r: pixel.r,
              g: pixel.g,
              b: pixel.b
            });
          }
        }

        // If we have fewer pixels than k, just return all unique colors
        if (pixels.length <= k) {
          const uniqueColors = new Map();
          pixels.forEach(pixel => {
            const color = rgbToHex(pixel.r, pixel.g, pixel.b);
            if (!uniqueColors.has(color)) {
              uniqueColors.set(color, {
                center: { r: pixel.r, g: pixel.g, b: pixel.b },
                pixels: [pixel]
              });
            } else {
              uniqueColors.get(color).pixels.push(pixel);
            }
          });
          return Array.from(uniqueColors.values());
        }

        // Perform clustering iterations
        const maxIterations = 10;
        let iterations = 0;
        let clusters = [];
        let lastCentroids = null;

        while (iterations < maxIterations) {
          // Initialize clusters
          clusters = centroids.map(centroid => ({
            center: centroid,
            pixels: []
          }));

          // Assign pixels to nearest centroid using weighted distance
          pixels.forEach(pixel => {
            let minDistance = Infinity;
            let nearestClusterIndex = 0;

            centroids.forEach((centroid, index) => {
              // Use weighted RGB distance for better perceptual color matching
              const rWeight = 0.299;
              const gWeight = 0.587;
              const bWeight = 0.114;

              const dr = (pixel.r - centroid.r) * rWeight;
              const dg = (pixel.g - centroid.g) * gWeight;
              const db = (pixel.b - centroid.b) * bWeight;
              const distance = dr * dr + dg * dg + db * db;

              if (distance < minDistance) {
                minDistance = distance;
                nearestClusterIndex = index;
              }
            });

            clusters[nearestClusterIndex].pixels.push(pixel);
          });

          // Update centroids
          const newCentroids = clusters.map(cluster => {
            if (cluster.pixels.length === 0) return cluster.center;

            return {
              r: Math.round(cluster.pixels.reduce((sum, p) => sum + p.r, 0) / cluster.pixels.length),
              g: Math.round(cluster.pixels.reduce((sum, p) => sum + p.g, 0) / cluster.pixels.length),
              b: Math.round(cluster.pixels.reduce((sum, p) => sum + p.b, 0) / cluster.pixels.length)
            };
          });

          // Check for convergence
          if (lastCentroids && newCentroids.every((centroid, i) =>
            centroid.r === lastCentroids[i].r &&
            centroid.g === lastCentroids[i].g &&
            centroid.b === lastCentroids[i].b)) {
            break;
          }

          lastCentroids = newCentroids;
          centroids.splice(0, centroids.length, ...newCentroids);
          iterations++;
        }

        return clusters;
      }

      // Helper function to convert RGB to hex
      function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('');
      }

      // Perform k-means clustering
      const clusters = kMeansClustering(pixels, colorLimit);

      // Create new pixel grid with quantized colors
      const newPixelGrid = Array(canvas.height).fill().map(() => Array(canvas.width).fill(null));
      const quantizedColors = new Set();

      // Map each pixel to its cluster's color
      clusters.forEach(cluster => {
        const hexColor = rgbToHex(cluster.center.r, cluster.center.g, cluster.center.b);
        cluster.pixels.forEach(pixel => {
          const x = pixel.index % canvas.width;
          const y = Math.floor(pixel.index / canvas.width);
          if (y < newPixelGrid.length && x < newPixelGrid[0].length) {
            newPixelGrid[y][x] = hexColor;
            quantizedColors.add(hexColor);
          }
        });
      });

      // Update color history with quantized colors
      setColorHistory(prevHistory => {
        const combinedColors = [...quantizedColors, ...prevHistory];
        return [...new Set(combinedColors)].slice(0, MAX_HISTORY_LENGTH);
      });

      setPixelGrid(newPixelGrid);
      setHasDrawn(true);
      setImportModalOpen(false);
      setImportImageUrl(null);
      // Create history entry after import
      setLastActionType('draw');
  }, [activeColor]); // Dependencies might need adjustment based on where crop logic lives

  // --- Add handlers for tools ---
  const handleToolChange = useCallback((tool) => {
    setActiveTool(tool);
  }, []);

  const handleToggleGrid = useCallback(() => {
    setShowGrid(prev => !prev);
  }, []);

  const handlePickerChange = useCallback((event) => {
    setPickerColor(event.target.value);
  }, []);

  const handlePickerBlur = useCallback(() => {
    // Only update the main color state if the picker value is different
    if (pickerColor !== activeColor) {
        handleColorChange(pickerColor);
    }
  }, [pickerColor, activeColor, handleColorChange]);

  // --- Add handlers for Zoom --- 
  const handleZoomIn = useCallback(() => {
    canvasRef.current?.zoomIn();
  }, []); // No dependencies needed as ref is stable

  const handleZoomOut = useCallback(() => {
    canvasRef.current?.zoomOut();
  }, []); // No dependencies needed as ref is stable

  // --- NEW: Handler to change the mode ---
  const handleModeChange = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Title>Pixel Pop</Title>
          <NavMenu 
            onImportImage={handleImportImage} 
            onSaveProject={handleSaveProject}
            onLoadProject={handleLoadProject}
            onExport={handleExport}
          />
        </Header>
        <MainContent>
          <Sidebar 
            activeTool={activeTool}
            handleToolChange={handleToolChange}
            pickerColor={pickerColor}
            handlePickerChange={handlePickerChange}
            handlePickerBlur={handlePickerBlur}
            showGrid={showGrid}
            handleToggleGrid={handleToggleGrid}
            onColorSelect={handleColorChange}
            colorHistory={colorHistory}
            gridDimensions={gridDimensions}
            setGridDimensions={setGridDimensions}
            pixelSize={pixelSize}
            setPixelSize={setPixelSize}
            gridGap={gridGap}
            setGridGap={setGridGap}
            hasDrawn={hasDrawn}
            cornerRadius={cornerRadius}
            setCornerRadius={setCornerRadius}
            glowEnabled={glowEnabled}
            setGlowEnabled={setGlowEnabled}
            glowSettings={glowSettings}
            setGlowSettings={setGlowSettings}
            bulbEnabled={bulbEnabled}
            setBulbEnabled={setBulbEnabled}
            bulbSettings={bulbSettings}
            setBulbSettings={setBulbSettings}
            innerShadowEnabled={innerShadowEnabled}
            setInnerShadowEnabled={setInnerShadowEnabled}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            onUndo={handleUndo}
            onRedo={handleRedo}
            canUndo={canUndo}
            canRedo={canRedo}
            mode={mode}
            onModeChange={handleModeChange}
            interactionSettings={interactionSettings}
            setInteractionSettings={setInteractionSettings}
          />
           <CanvasWrapper>
             <Canvas
               ref={canvasRef}
               activeTool={activeTool}
               showGrid={showGrid}
               activeColor={activeColor}
               gridDimensions={gridDimensions}
               pixelSize={pixelSize}
               gridGap={gridGap}
               onColorChange={handleColorChange}
               onDrawStart={notifyDrawingStarted}
               pixelGrid={pixelGrid}
               setPixelGrid={setPixelGrid}
               setGridDimensions={setGridDimensions}
               canUndo={canUndo}
               canRedo={canRedo}
               onUndo={handleUndo}
               onRedo={handleRedo}
               cornerRadius={cornerRadius}
               glowEnabled={glowEnabled}
               glowSettings={glowSettings}
               bulbEnabled={bulbEnabled}
               innerShadowEnabled={innerShadowEnabled}
               bulbSettings={bulbSettings}
               mode={mode}
               interactionSettings={interactionSettings}
             />
             <GridEdgeControls
                addRowTop={addRowTop}
                removeRowTop={removeRowTop}
                addRowBottom={addRowBottom}
                removeRowBottom={removeRowBottom}
                addColLeft={addColLeft}
                removeColLeft={removeColLeft}
                addColRight={addColRight}
                removeColRight={removeColRight}
                hasDrawn={hasDrawn}
                gridWidth={gridDimensions.width}
                gridHeight={gridDimensions.height}
             />
           </CanvasWrapper>
        </MainContent>
        {importModalOpen && (
          <ImageCropModal
            imageUrl={importImageUrl}
            onCrop={handleImportCropComplete}
            onClose={() => {
              setImportModalOpen(false);
              setImportImageUrl(null);
            }}
            gridDimensions={gridDimensions}
          />
        )}
      </AppContainer>
    </>
  )
}

export default App
