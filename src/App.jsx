import { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Canvas from './components/canvas/Canvas'
import Sidebar from './components/sidebar/Sidebar'
import GridEdgeControls from './components/canvas/GridEdgeControls'
import Header from './components/navigation/Header'
import NavMenu from './components/navigation/NavMenu'
import ImageCropModal from './components/modals/ImageCropModal'
import CustomShapeModal from './components/modals/CustomShapeModal'
import ExportModal from './components/modals/ExportModal'
import PerformanceMonitor from './components/performance/PerformanceMonitor'
import { hexToRgba, rgbaToHex, rgbToHex } from './utils/colorUtils'
import { useArtworkState } from './hooks/useArtworkState'
import { useToolState } from './hooks/useToolState'
import { useEffectState } from './hooks/useEffectState'
import { useUIState } from './hooks/useUIState'
import { useHistoryState } from './hooks/useHistoryState'
import { formatFilenameWithDimensions, stripDimensionsFromFilename, getDimensionsFromFilename } from './utils/filenameUtils'
import { kMeansClustering } from './utils/imageProcessing'
import { 
    drawGlowLayer, 
    drawCrispPixel, 
    drawBulbEffect,
    drawGrid
} from './utils/canvasEffects'

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
  overflow: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$backgroundColor || '#f0f0f0'};
  pointer-events: auto; /* Ensure mouse events are captured */
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

const MAX_HISTORY_LENGTH = 256;

function App() {
  const canvasRef = useRef(null);
  
  // Keep other state variables
  const [hasDrawn, setHasDrawn] = useState(false);
  const [lastActionType, setLastActionType] = useState(null);
  const [importImageUrl, setImportImageUrl] = useState(null);
  const [filename, setFilename] = useState('Untitled Pixel Art');
  const [importSettings, setImportSettings] = useState({ 
    width: null, 
    height: null, 
    maxColors: 256 
  });

  // Use the custom hook for artwork state
  const {
    gridDimensions,
    setGridDimensions,
    resizeGrid,
    setInternalGridDimensions,
    pixelGrid,
    setPixelGrid,
    pixelSize,
    setPixelSize,
    gridGap,
    setGridGap,
    backgroundColor,
    setBackgroundColor,
  } = useArtworkState(32, 32, setLastActionType);

  // Use the custom hook for tool state
  const {
    activeTool,
    setActiveTool,
    activeColor,
    pickerColor,
    updatePickerColor,
    selectColor,
    colorHistory,
    setColorHistory,
    activeColorRef,
  } = useToolState();

  // Use the custom hook for effects state
  const {
    // New API
    effects,
    toggleEffect,
    updateEffectSettings,
    registerEffect,
    
    // Backward compatibility API
    cornerRadius,
    setCornerRadius,
    glowEnabled,
    setGlowEnabled,
    glowSettings,
    setGlowSettings,
    bulbEnabled,
    setBulbEnabled,
    bulbSettings,
    setBulbSettings,
    pixelShape,
    setPixelShape,
    customShape,
    setCustomShape,
  } = useEffectState();

  // Use the custom hook for UI state
  const {
    mode,
    showGrid,
    rendererType,
    showPerformanceMonitor,
    modals,
    setMode,
    toggleGrid,
    setRendererType,
    togglePerformanceMonitor,
    toggleExportModal,
    toggleImportModal,
    toggleCustomShapeModal,
    toggleSettingsModal,
  } = useUIState();

  // Extract modal states for compatibility
  const showExportModal = modals.export;
  const importModalOpen = modals.import;
  const showCustomShapeModal = modals.customShape;
  
  // Handler for when history changes via undo/redo
  const handleHistoryChange = useCallback((historyEntry) => {
    if (!historyEntry) return;
    
    // Update the pixel grid from history
    setPixelGrid(historyEntry.pixelGrid);
    
    // If the grid dimensions changed, update those too
    if (historyEntry.gridDimensions) {
      setInternalGridDimensions(historyEntry.gridDimensions);
    }
  }, [setPixelGrid, setInternalGridDimensions]);
  
  // Use the history hook
  const {
    history,
    currentIndex,
    isInitialized,
    canUndo,
    canRedo,
    pushHistory,
    undo,
    redo,
  } = useHistoryState({
    onChange: handleHistoryChange,
    maxHistory: 256,
  });
  
  // Initialize history with the initial grid state
  const isInitializedRef = useRef(false);
  useEffect(() => {
    if (!isInitializedRef.current && pixelGrid) {
      const initialHistoryEntry = {
        pixelGrid: pixelGrid.map(row => [...row]),
        gridDimensions: { ...gridDimensions },
        type: 'initial'
      };
      
      pushHistory(initialHistoryEntry, 'initial');
      isInitializedRef.current = true;
    }
  }, [pixelGrid, gridDimensions, pushHistory]);

  // Add effect to handle history entries for drawing operations
  useEffect(() => {
    if (lastActionType === 'draw' && isInitializedRef.current) {
      const newHistoryEntry = {
        pixelGrid: pixelGrid.map(row => [...row]),
        gridDimensions: { ...gridDimensions },
        type: 'draw'
      };

      pushHistory(newHistoryEntry, 'draw');
      setLastActionType(null);
    }
  }, [lastActionType, pushHistory, pixelGrid, gridDimensions]);

  // Add effect to handle history entries for grid changes
  useEffect(() => {
    if (lastActionType === 'grid_change' && isInitializedRef.current) {
      const newHistoryEntry = {
        pixelGrid: pixelGrid.map(row => [...row]),
        gridDimensions: { ...gridDimensions },
        type: 'grid_change'
      };

      pushHistory(newHistoryEntry, 'grid_change');
      setLastActionType(null);
    }
  }, [lastActionType, pushHistory, pixelGrid, gridDimensions]);

  // Handlers for undo/redo - simply call the hook methods
  const handleUndo = useCallback(() => {
    undo();
  }, [undo]);

  const handleRedo = useCallback(() => {
    redo();
  }, [redo]);

  const notifyDrawingStarted = useCallback(() => {
    if (!hasDrawn) {
      setHasDrawn(true);
    }
    setLastActionType('draw');
  }, [hasDrawn]);

  // --- Grid Manipulation Functions ---

  const addRowTop = useCallback(() => {
    const newGrid = Array(gridDimensions.height + 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data, shifting down
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y + 1][x] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setInternalGridDimensions(prev => ({ ...prev, height: prev.height + 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const addRowBottom = useCallback(() => {
    const newGrid = Array(gridDimensions.height + 1).fill().map(() => 
      Array(gridDimensions.width).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y][x]; // Copy to same position
      }
    }
    setPixelGrid(newGrid);
    setInternalGridDimensions(prev => ({ ...prev, height: prev.height + 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const removeRowTop = useCallback(() => {
    if (gridDimensions.height <= 1) return; // Prevent removing last row
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
    setInternalGridDimensions(prev => ({ ...prev, height: prev.height - 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const removeRowBottom = useCallback(() => {
    if (gridDimensions.height <= 1) return; // Prevent removing last row
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
    setInternalGridDimensions(prev => ({ ...prev, height: prev.height - 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const addColLeft = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width + 1).fill(null)
    );
    // Copy existing grid data, shifting right
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x + 1] = pixelGrid[y][x];
      }
    }
    setPixelGrid(newGrid);
    setInternalGridDimensions(prev => ({ ...prev, width: prev.width + 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const addColRight = useCallback(() => {
    const newGrid = Array(gridDimensions.height).fill().map(() => 
      Array(gridDimensions.width + 1).fill(null)
    );
    // Copy existing grid data
    for (let y = 0; y < gridDimensions.height; y++) {
      for (let x = 0; x < gridDimensions.width; x++) {
        newGrid[y][x] = pixelGrid[y][x]; // Copy to same position
      }
    }
    setPixelGrid(newGrid);
    setInternalGridDimensions(prev => ({ ...prev, width: prev.width + 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const removeColLeft = useCallback(() => {
    if (gridDimensions.width <= 1) return; // Prevent removing last column
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
    setInternalGridDimensions(prev => ({ ...prev, width: prev.width - 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  const removeColRight = useCallback(() => {
    if (gridDimensions.width <= 1) return; // Prevent removing last column
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
    setInternalGridDimensions(prev => ({ ...prev, width: prev.width - 1 }));
    setLastActionType('grid_change');
  }, [gridDimensions, pixelGrid, setPixelGrid, setInternalGridDimensions]);

  // ---------------------------------

  // Renamed from handleImportImage
  const handleFileSelect = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
       // Initialize import settings *before* setting URL and opening modal
      setImportSettings({
        width: gridDimensions.width, // Use current grid width
        height: gridDimensions.height, // Use current grid height
        maxColors: 32 // <-- Set default max colors to 32
      });
      setImportImageUrl(e.target.result);
      toggleImportModal(true);
    };
    reader.readAsDataURL(file);
  }, [gridDimensions, toggleImportModal]); // Keep dependencies

  const handleSaveProject = useCallback(async () => {
    const projectData = {
      version: '1.0.1', // Bump version to indicate new structure
      filename: stripDimensionsFromFilename(filename), // Save base filename
      // Artwork State
      gridDimensions,
      pixelSize,
      gridGap,
      backgroundColor,
      pixelGrid, 
      // Tool State
      activeTool,
      activeColor, // Save the primary active color
      colorHistory,
      // Effect State
      effects: { // Group effects for clarity
        cornerRadius,
        glowEnabled,
        glowSettings,
        bulbEnabled,
        bulbSettings,
        pixelShape,
        customShape,
      },
      // UI State
      ui: {
        mode,
        showGrid,
        rendererType,
      }
    };

    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });

    // Format filename with dimensions for the SAVE DIALOG only
    const suggestedFilename = formatFilenameWithDimensions(
      filename, // Use current filename state (which should be the base name)
      gridDimensions.width,
      gridDimensions.height
    );

    // Use File System Access API if available
    if ('showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: `${suggestedFilename}.json`, // Use suggested name
          types: [{
            description: 'Pixel Pop Project',
            accept: { 'application/json': ['.json'] },
          }],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error saving project with File System Access API:', err);
          alert('Failed to save project.');
        } else {
          console.log('Project save aborted by user.');
        }
      }
    } else {
      // Fallback for older browsers
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${suggestedFilename}.json`; // Use suggested name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }, [
    // Add ALL the state variables being saved to the dependency array
    gridDimensions, pixelSize, gridGap, backgroundColor, pixelGrid, 
    activeTool, activeColor, colorHistory, 
    cornerRadius, glowEnabled, glowSettings, bulbEnabled, bulbSettings, 
    pixelShape, customShape,
    mode, showGrid, rendererType,
    filename, formatFilenameWithDimensions, stripDimensionsFromFilename
  ]);

  const handleLoadProject = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const projectData = JSON.parse(e.target.result);
        const version = projectData.version || '1.0.0'; // Assume 1.0.0 if missing
        
        // --- Basic Validation ---
        if (!projectData.gridDimensions || !projectData.pixelGrid) {
          throw new Error('Invalid project file format: Missing gridDimensions or pixelGrid');
        }

        // --- Filename and Dimensions --- 
        const loadedBaseFilename = projectData.filename || file.name.replace(/\.json$/, '');
        const dimensionsFromFilename = getDimensionsFromFilename(loadedBaseFilename);
        const finalDimensions = dimensionsFromFilename || projectData.gridDimensions;
        
        // --- Update State (use defaults for missing fields in older versions) ---
        // Artwork
        setInternalGridDimensions(finalDimensions);
        setPixelSize(projectData.pixelSize || 24);
        setGridGap(projectData.gridGap || 0);
        setPixelGrid(projectData.pixelGrid);
        setBackgroundColor(projectData.backgroundColor || 'rgba(240, 240, 240, 1)');
        
        // Tools
        setActiveTool(projectData.activeTool || 'pencil');
        selectColor(projectData.activeColor || 'rgba(0, 0, 0, 1)'); // Use selectColor to update history too
        setColorHistory(projectData.colorHistory || [projectData.activeColor || 'rgba(0, 0, 0, 1)']);

        // Effects (check if 'effects' group exists for v1.0.1+)
        if (projectData.effects) {
          setCornerRadius(projectData.effects.cornerRadius || { enabled: false, topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });
          setGlowEnabled(projectData.effects.glowEnabled || false);
          setGlowSettings(projectData.effects.glowSettings || { size: 5, intensity: 100, spread: 0, offsetX: 0, offsetY: 0 });
          setBulbEnabled(projectData.effects.bulbEnabled || false);
          setBulbSettings(projectData.effects.bulbSettings || { intensity: 50, radius: 50, positionX: 50, positionY: 50, color: '#ffffff', blend: 'overlay' });
          setPixelShape(projectData.effects.pixelShape || 'rectangle');
          setCustomShape(projectData.effects.customShape || { path: '', viewBox: '0 0 100 100' });
        } else {
          // Reset effects if loading older version without them
          setCornerRadius({ enabled: false, topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });
          setGlowEnabled(false);
          setBulbEnabled(false);
          setPixelShape('rectangle');
          setCustomShape({ path: '', viewBox: '0 0 100 100' });
        }
        
        // UI (check if 'ui' group exists for v1.0.1+)
        if (projectData.ui) {
          setMode(projectData.ui.mode || 'edit');
          toggleGrid(projectData.ui.showGrid === true); // Explicitly check for true
          setRendererType(projectData.ui.rendererType || 'canvas');
        } else {
          // Set defaults if loading older version
          setMode('edit');
          toggleGrid(true);
          setRendererType('canvas');
        }

        // Final Setup
        setFilename(stripDimensionsFromFilename(loadedBaseFilename)); // Display base name
        setHasDrawn(true); // Assume loaded project has content
        
        // Reset history for loaded project
        const initialHistoryEntry = {
          pixelGrid: projectData.pixelGrid.map(row => [...row]),
          gridDimensions: { ...finalDimensions },
          type: 'load'
        };
        // Use replaceHistory to clear previous states
        pushHistory(initialHistoryEntry, 'load', true); 

      } catch (error) {
        console.error('Error loading project:', error);
        alert(`Failed to load project file. ${error.message}`);
      }
    };
    reader.readAsText(file);
  }, [
    // Add ALL setters for the state being loaded
    setInternalGridDimensions, setPixelSize, setGridGap, setPixelGrid, 
    setBackgroundColor, setActiveTool, selectColor, setColorHistory,
    setCornerRadius, setGlowEnabled, setGlowSettings, setBulbEnabled, setBulbSettings,
    setPixelShape, setCustomShape,
    setMode, toggleGrid, setRendererType, 
    setFilename, setHasDrawn, pushHistory, 
    getDimensionsFromFilename, stripDimensionsFromFilename
  ]);

  const handleExport = useCallback(() => {
    toggleExportModal(true);
  }, [toggleExportModal]);

  const performExport = useCallback(async ({ format, scale, padding, includeGrid, rendererType: exportRenderer, includeBackground }) => {
    // No need for Promise wrapper when using async/await directly
    try {
      // Format filename with dimensions for export
      const exportFilename = formatFilenameWithDimensions(
        filename,
        gridDimensions.width,
        gridDimensions.height
      );

      // Handle SVG export directly
      if (format === 'svg' && rendererType === 'svg') {
        const svgElement = canvasRef.current?.svgRef?.current;
        if (!svgElement) {
          throw new Error('No SVG element found');
        }
        
        // Create a deep clone with all content preserved
        const svgClone = svgElement.cloneNode(true);
        
        // Add necessary XML namespaces for standalone SVG
        svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgClone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        
        // Ensure viewBox is set correctly
        const cellSize = pixelSize + gridGap;
        const totalWidth = gridDimensions.width * cellSize;
        const totalHeight = gridDimensions.height * cellSize;
        svgClone.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);
        
        // Set width and height attributes
        svgClone.setAttribute('width', totalWidth);
        svgClone.setAttribute('height', totalHeight);
        
        // Clean up any unwanted interactive elements or attributes
        // Remove interaction overlays (just in case they're present and causing issues)
        const interactionLayer = svgClone.querySelector('.interaction-layer');
        if (interactionLayer) {
          svgClone.removeChild(interactionLayer);
        }
        
        // Ensure pixels layer is properly visible
        const pixelsLayer = svgClone.querySelector('.pixels-layer');
        if (pixelsLayer) {
          // Make sure all pixels are rendered and visible
          const pixels = pixelsLayer.querySelectorAll('path, circle, rect');
          pixels.forEach(pixel => {
            // Ensure no display:none or visibility:hidden
            pixel.style.visibility = 'visible';
            pixel.style.display = 'block';
          });
        }
        
        // Serialize to XML
        const svgData = new XMLSerializer().serializeToString(svgClone);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        
        // Use File System Access API if available
        if ('showSaveFilePicker' in window) {
          try {
            const handle = await window.showSaveFilePicker({
              suggestedName: `${exportFilename}.svg`,
              types: [{
                description: 'SVG Image',
                accept: { 'image/svg+xml': ['.svg'] },
              }],
            });
            const writable = await handle.createWritable();
            await writable.write(svgBlob);
            await writable.close();
          } catch (err) {
            if (err.name !== 'AbortError') {
              console.error('Error saving SVG with File System Access API:', err);
              alert('Failed to save SVG file.');
            } else {
              console.log('SVG export aborted by user.');
            }
          }
        } else {
          // Fallback for older browsers
          const url = URL.createObjectURL(svgBlob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${exportFilename}.svg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        return; // Exit after handling SVG export
      }
      
      // --- Handle PNG and JPG exports using canvas ---
      const exportCanvas = document.createElement('canvas');
      const exportCtx = exportCanvas.getContext('2d');
      
      // Calculate base dimensions (one pixel unit in the grid)
      const cellSize = pixelSize + gridGap;
      const baseWidth = gridDimensions.width * cellSize;
      const baseHeight = gridDimensions.height * cellSize;
      
      // --- Calculate scaled and padded dimensions ---
      const scaledWidth = Math.floor(baseWidth * scale);
      const scaledHeight = Math.floor(baseHeight * scale);
      const paddedWidth = scaledWidth + (padding * 2);
      const paddedHeight = scaledHeight + (padding * 2);
      exportCanvas.width = paddedWidth;
      exportCanvas.height = paddedHeight;
      
      // Set background color based on includeBackground parameter
      if (includeBackground) {
        // Use background color if includeBackground is true
        exportCtx.fillStyle = format === 'jpg' ? 
          (backgroundColor || '#ffffff') : 
          (backgroundColor || 'transparent');
      } else {
        // Use transparent for PNG, white for JPG if includeBackground is false
        exportCtx.fillStyle = format === 'jpg' ? '#ffffff' : 'transparent';
      }
      
      exportCtx.fillRect(0, 0, paddedWidth, paddedHeight);
      exportCtx.save();
      exportCtx.translate(padding, padding);
      exportCtx.scale(scale, scale);
      
      // --- Replicate multi-pass rendering from CanvasRenderer --- 
      
      // Get current effect settings (assuming they are available in this scope)
      const currentGlowEnabled = glowEnabled; 
      const currentGlowSettings = glowSettings;
      const currentBulbEnabled = bulbEnabled;
      const currentBulbSettings = bulbSettings;
      const currentCornerRadius = cornerRadius.enabled ? cornerRadius : null;
      const currentPixelShape = pixelShape;

      // <<< Use a unique name for cell size in export >>>
      const exportCellSize = pixelSize + gridGap;

      // --- Glow Rendering Pass --- 
      if (currentGlowEnabled) {
          for (let y = 0; y < gridDimensions.height; y++) {
              for (let x = 0; x < gridDimensions.width; x++) {
                  const color = pixelGrid[y]?.[x];
                  if (color) {
                      // <<< Use renamed variable AND add offset >>>
                      const xPos = x * exportCellSize + (gridGap / 2);
                      const yPos = y * exportCellSize + (gridGap / 2);
                      // Assumes drawGlowLayer is accessible here
                      drawGlowLayer(exportCtx, xPos, yPos, pixelSize, color, currentGlowSettings, currentCornerRadius, currentPixelShape);
                  }
              }
          }
      }

      // --- Crisp Pixel Rendering Pass --- 
      for (let y = 0; y < gridDimensions.height; y++) {
          for (let x = 0; x < gridDimensions.width; x++) {
              const color = pixelGrid[y]?.[x];
              if (color) {
                  // <<< Use renamed variable AND add offset >>>
                  const xPos = x * exportCellSize + (gridGap / 2);
                  const yPos = y * exportCellSize + (gridGap / 2);
                  // Assumes drawCrispPixel is accessible here
                  drawCrispPixel(exportCtx, xPos, yPos, pixelSize, color, currentCornerRadius, currentPixelShape);
              }
          }
      }
      
      // --- Bulb Effect Rendering Pass --- 
      if (currentBulbEnabled) {
          for (let y = 0; y < gridDimensions.height; y++) {
              for (let x = 0; x < gridDimensions.width; x++) { 
                  const color = pixelGrid[y]?.[x];
                  if (color) {
                      // <<< Use renamed variable AND add offset >>>
                      const xPos = x * exportCellSize + (gridGap / 2);
                      const yPos = y * exportCellSize + (gridGap / 2);
                      // Assumes drawBulbEffect is accessible here (the per-pixel one)
                      drawBulbEffect(exportCtx, xPos, yPos, pixelSize, currentBulbSettings, currentPixelShape, currentCornerRadius);
                  }
              }
          }
      }

      if (includeGrid) {
        drawGrid(exportCtx, baseWidth, baseHeight, gridDimensions.width, gridDimensions.height, pixelSize, gridGap);
      }
      exportCtx.restore();
      
      // --- Generate and download the final image --- 
      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
      const quality = format === 'png' ? 1.0 : 0.9;
      const blob = await new Promise(resolve => exportCanvas.toBlob(resolve, mimeType, quality));

      if (!blob) {
        throw new Error('Failed to create blob from canvas');
      }
      
      // Use File System Access API if available
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: `${exportFilename}.${format}`,
            types: [{
              description: `${format.toUpperCase()} Image`,
              accept: { [mimeType]: ['.' + format] },
            }],
          });
          const writable = await handle.createWritable();
          await writable.write(blob);
          await writable.close();
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error(`Error saving ${format.toUpperCase()} with File System Access API:`, err);
            alert(`Failed to save ${format.toUpperCase()} file.`);
          } else {
            console.log(`${format.toUpperCase()} export aborted by user.`);
          }
        }
      } else {
        // Fallback for older browsers
        const dataURL = URL.createObjectURL(blob); // Use blob URL for fallback too
        const link = document.createElement('a');
        link.download = `${exportFilename}.${format}`;
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(dataURL);
      }
      
    } catch (error) {
      console.error('Export error:', error);
      alert(`Failed to export artwork: ${error.message}`);
      // Removed reject() as we are not using the Promise wrapper anymore
    }
  }, [gridDimensions, pixelSize, gridGap, rendererType, backgroundColor, canvasRef, pixelGrid, pixelShape, cornerRadius, filename]);

  // --- Tool Handlers ---

  const handleToggleGrid = useCallback(() => {
    toggleGrid();
  }, [toggleGrid]);

  const handleModeChange = useCallback((newMode) => {
    setMode(newMode);
  }, [setMode]);

  const handleZoomIn = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.zoomIn();
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.zoomOut();
    }
  }, []);

  const handleExportModalOpen = useCallback(() => {
    toggleExportModal(true);
  }, [toggleExportModal]);

  const handleExportModalClose = useCallback(() => {
    toggleExportModal(false);
  }, [toggleExportModal]);

  const handleCustomShapeModalOpen = useCallback(() => {
    toggleCustomShapeModal(true);
  }, [toggleCustomShapeModal]);

  const handleCustomShapeModalClose = useCallback(() => {
    toggleCustomShapeModal(false);
  }, [toggleCustomShapeModal]);

  const handleImportModalOpen = useCallback(() => {
    toggleImportModal(true);
  }, [toggleImportModal]);

  const handleImportModalClose = useCallback(() => {
    toggleImportModal(false);
  }, [toggleImportModal]);

  // Custom shape state
  const updateCustomShape = useCallback((path, viewBox) => {
    setCustomShape({ path, viewBox });
    setPixelShape('custom');
    toggleCustomShapeModal(false);
  }, [setCustomShape, setPixelShape, toggleCustomShapeModal]);

  // Handler for when the color picker INPUT value changes (e.g., dragging)
  const handlePickerChange = useCallback((event) => {
    updatePickerColor(event.target.value);
  }, [updatePickerColor]);

  // Handler for when the color picker interaction ends (e.g., onBlur)
  const handlePickerBlur = useCallback(() => {
    // finalize the color selection
    // `pickerColor` from the hook already reflects the latest value
    selectColor(pickerColor);
  }, [selectColor, pickerColor]); // Include pickerColor dependency

  const handleColorSelect = useCallback((color) => {
    selectColor(color);
  }, [selectColor]);

  const handleToolChange = useCallback((tool) => {
    setActiveTool(tool);
  }, [setActiveTool]);

  // --- NEW: Keyboard Shortcuts --- 
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore shortcuts if typing in an input or textarea
      const targetTagName = event.target.tagName.toUpperCase();
      if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA' || event.target.isContentEditable) {
        return;
      }

      // Check for modifier keys (CMD on Mac, Ctrl on Windows/Linux)
      const isModifier = event.metaKey || event.ctrlKey;

      // Prevent browser shortcuts (like Ctrl+B for bold) if necessary
      // Only prevent if we are actually handling the key
      let handled = false;

      // Handle Undo/Redo first
      if (isModifier && event.key.toLowerCase() === 'z') {
        if (event.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
        handled = true;
      } else if (!isModifier) { // Only handle tool/grid shortcuts if no modifier is pressed
        switch (event.key.toLowerCase()) {
          case 'b':
            setActiveTool('pencil');
            handled = true;
            break;
          case 'f':
            setActiveTool('fill');
            handled = true;
            break;
          case 'e':
            setActiveTool('eraser');
            handled = true;
            break;
          case 'g':
            toggleGrid(); // Use the toggle function
            handled = true;
            break;
          default:
            break;
        }
      }
      
      if (handled) {
        event.preventDefault(); // Prevent default browser action only if we used the key
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActiveTool, toggleGrid, handleUndo, handleRedo]); // Dependencies: functions we call

  // Handler for image cropping and import
  const handleImageImport = useCallback(async (croppedDataUrl, settings) => {
    if (!croppedDataUrl || !settings) {
        console.error("Import failed: Missing image data or settings.");
        toggleImportModal(false); // Close modal on error
        setImportImageUrl(null);
        return;
    }

    // --- 1. Validate Settings --- 
    const targetWidth = parseInt(settings.width, 10);
    const targetHeight = parseInt(settings.height, 10);
    const colorLimit = parseInt(settings.maxColors, 10);

    if (!(targetWidth > 0 && targetHeight > 0 && colorLimit >= 2 && colorLimit <= 256)) {
      console.error("Import failed: Invalid width, height, or max colors.", settings);
      alert("Invalid import settings. Width/Height must be > 0, Max Colors must be between 2 and 256.");
      // Do not close modal here, let user correct settings
      return; 
    }

    try {
      // --- 2. Update Grid Dimensions (BEFORE processing) --- 
      // Use resizeGrid which handles state update and history correctly
      resizeGrid(targetWidth, targetHeight); 

      // --- 3. Load Cropped Image --- 
      const img = new Image();
      img.src = croppedDataUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // --- 4. Create Final Canvas and Resize --- 
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = targetWidth; 
      finalCanvas.height = targetHeight;
      const finalCtx = finalCanvas.getContext('2d');

      if (!finalCtx) {
        throw new Error("Failed to get context for final canvas.");
      }

      // Disable smoothing for pixelated effect
      finalCtx.imageSmoothingEnabled = false;
      
      // Draw the cropped image onto the final canvas (resizing it)
      finalCtx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // --- 5. Extract Pixel Data from Final Canvas --- 
      const imageData = finalCtx.getImageData(0, 0, targetWidth, targetHeight);
      const pixels = [];
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];
        
        // Consider alpha threshold for transparency if needed
        if (a > 128) { // Example: Only include non-transparent pixels
          pixels.push({ r, g, b, index: i / 4 });
        }
      }

      // --- 6. K-Means Clustering (using imported function) --- 
      const clusters = kMeansClustering(pixels, colorLimit); 

      // --- 7. Create New Pixel Grid --- 
      const newPixelGrid = Array(targetHeight).fill().map(() => Array(targetWidth).fill(null));
      const quantizedColors = new Set();

      clusters.forEach(cluster => {
        const hexColor = rgbToHex(cluster.center.r, cluster.center.g, cluster.center.b);
        quantizedColors.add(hexColor);
        cluster.pixels.forEach(pixel => {
          const x = pixel.index % targetWidth;
          const y = Math.floor(pixel.index / targetWidth);
          if (y < newPixelGrid.length && x < newPixelGrid[0].length) {
            newPixelGrid[y][x] = hexColor;
          }
        });
      });

      // --- 8. Update State --- 
      // Update color history
      setColorHistory(prevHistory => {
        const combinedColors = [...quantizedColors, ...prevHistory];
        return [...new Set(combinedColors)].slice(0, MAX_HISTORY_LENGTH);
      });
      
      // Set the final pixel grid (note: resizeGrid already updated dimensions)
      setPixelGrid(newPixelGrid);
      setHasDrawn(true);
      
      // Close modal and clear URL
      toggleImportModal(false);
      setImportImageUrl(null);
      
      // Reset import settings state if desired (optional)
      // setImportSettings({ width: null, height: null, maxColors: 256 });

      // History is handled by resizeGrid and the effects on pixelGrid change
      // No explicit pushHistory needed here if resizeGrid handles its part

    } catch (error) {
      console.error("Error during image import processing:", error);
      alert(`Image import failed: ${error.message}`);
      // Consider how to handle errors - maybe keep modal open?
      // toggleImportModal(false); // Close modal even on error?
      // setImportImageUrl(null);
    }

  }, [
    resizeGrid, // Use resizeGrid instead of setGridDimensions directly
    setPixelGrid, 
    setColorHistory, 
    toggleImportModal, 
    setImportImageUrl, 
    setHasDrawn,
    // Ensure kMeansClustering is stable or included if defined outside
    // Ensure rgbToHex is stable or included if defined outside
    // MAX_HISTORY_LENGTH should be a constant
    kMeansClustering,
    rgbToHex,
  ]);

  return (
    <AppContainer>
      <GlobalStyles />
      <Header 
        filename={filename} 
        onFilenameChange={setFilename}
        titleElement={<Title>PixelPop</Title>}
        navMenuElement={
          <NavMenu
            onImportImage={handleFileSelect}
            onSaveProject={handleSaveProject}
            onLoadProject={handleLoadProject}
            onExport={handleExport}
          />
        }
      />
      <MainContent>
        <Sidebar
          // color & tool state
          colorHistory={colorHistory}
          onColorSelect={handleColorSelect}
          pickerColor={pickerColor}
          handlePickerChange={handlePickerChange}
          handlePickerBlur={handlePickerBlur}
          activeTool={activeTool}
          handleToolChange={handleToolChange}
          
          // artwork state
          gridDimensions={gridDimensions}
          setGridDimensions={resizeGrid}
          pixelSize={pixelSize}
          setPixelSize={setPixelSize}
          gridGap={gridGap}
          setGridGap={setGridGap}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          hasDrawn={hasDrawn}
          
          // ui state
          mode={mode}
          showGrid={showGrid}
          onModeChange={handleModeChange}
          handleToggleGrid={handleToggleGrid}
          rendererType={rendererType}
          setRendererType={setRendererType}
          showPerformanceMonitor={showPerformanceMonitor}
          setShowPerformanceMonitor={togglePerformanceMonitor}
          
          // history
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={canUndo}
          canRedo={canRedo}
          
          // effects state
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
          pixelShape={pixelShape}
          setPixelShape={setPixelShape}
          
          // modals
          onShowCustomShapeModal={handleCustomShapeModalOpen}
        />
         <CanvasWrapper $backgroundColor={backgroundColor}>
           <Canvas
             ref={canvasRef}
             gridDimensions={gridDimensions}
             pixelGrid={pixelGrid}
             setPixelGrid={setPixelGrid}
             pixelSize={pixelSize}
             gridGap={gridGap}
             activeColor={activeColor}
             activeTool={activeTool}
             onColorChange={selectColor}
             mode={mode}
             rendererType={rendererType}
             onDrawStart={notifyDrawingStarted}
             activeColorRef={activeColorRef}
             // Effects props (grouped from useEffectState)
             cornerRadius={cornerRadius}
             glowEnabled={glowEnabled}
             glowSettings={glowSettings}
             bulbEnabled={bulbEnabled}
             bulbSettings={bulbSettings}
             pixelShape={pixelShape}
             customShape={customShape}
             backgroundColor={backgroundColor}
             showGrid={showGrid}
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
          onClose={() => {
            toggleImportModal(false);
            setImportImageUrl(null); // Clear image URL on close
          }}
          onImport={handleImageImport}
          importSettings={importSettings}
          onSettingsChange={setImportSettings}
        />
      )}
      
      {showCustomShapeModal && (
        <CustomShapeModal
          onClose={handleCustomShapeModalClose}
          onApply={updateCustomShape}
          currentPath={customShape.path}
          currentViewBox={customShape.viewBox}
        />
      )}

      {showExportModal && (
        <ExportModal
          onClose={handleExportModalClose}
          onExport={performExport}
          canvasRef={canvasRef}
          gridDimensions={gridDimensions}
          pixelSize={pixelSize}
          gridGap={gridGap}
          showGrid={showGrid}
          backgroundColor={backgroundColor}
          pixelData={pixelGrid}
          rendererType={rendererType}
          glowEnabled={glowEnabled}
        />
      )}
      
      <PerformanceMonitor 
        visible={showPerformanceMonitor} 
        rendererType={rendererType}
      />
    </AppContainer>
  );
}

export default App
