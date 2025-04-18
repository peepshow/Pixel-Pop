import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencil, faFill, faEraser, 
  faTableCells, faTableCellsLarge, 
  faUndo, faRedo, 
  faSearchPlus, faSearchMinus,
  faMousePointer
} from '@fortawesome/free-solid-svg-icons';
import { RiRectangleLine, RiCircleLine, RiShape2Line, RiTriangleLine, RiHexagonLine, RiCodeSSlashLine } from 'react-icons/ri';
import { hexToRgba, rgbaToHex, getRgbaOpacity, updateRgbaOpacity } from '../../utils/colorUtils'; // Import from utils
import SidebarToggle from './SidebarToggle';
import Modal from '../modals/Modal'; // import Modal for About popup

// Add Switch component definition
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-secondary);
    transition: .4s;
    border-radius: 20px;
    border: 1px solid var(--border-color);

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: var(--text-secondary);
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: var(--accent-color);
    border-color: var(--accent-color);

    &:before {
      transform: translateX(16px);
      background-color: var(--switch-handle);
    }
  }
`;

const SidebarContainer = styled.aside`
  width: 330px;
  background-color: var(--bg-secondary);
  border-left: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 60px; /* Align with bottom of header */
  bottom: 0;
  z-index: 1000;
  height: calc(100vh - 60px); /* Subtract header height */
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 768px) {
    width: 280px; /* Match toggle button's right value */
  }
`;

// New Header style
const SidebarHeader = styled.h2`
  margin-bottom: 1rem; // Adjusted margin
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 1rem;
  margin-bottom: 0;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.75rem; // Adjusted margin
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Section = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 1rem; // Add padding above section content

  // &:first-of-type {
  //   border-top: none; // Remove border for the first section (Color)
  //   padding-top: 0;
  // }
`;

const ColorHistoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 120px; // Show about 5 rows (24px per swatch + 8px gap)
  overflow-y: auto;
  padding-right: 8px; // Add padding for scrollbar

  // Custom scrollbar styling
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg-primary);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 4px;
    border: 2px solid var(--bg-primary);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-secondary);
  }
`;

const ColorSwatch = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: ${props => props.color};
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// New Styles for Controls
const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-bottom: 1rem; // Remove margin, grid handles gap */
  flex: 1; // Allow groups to grow and share space
`;

const ControlRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ControlLabel = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const NumberInput = styled.input`
  padding: 0.3rem 0.5rem; // Slightly smaller padding
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--input-text);
  width: 45px; // Reduced fixed width from 50px
  box-sizing: border-box;
  text-align: center; // Center the number
  font-size: 0.8rem; // Smaller font size

  // Hide the default number input arrows (optional, for cleaner look)
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield; // Firefox
`;

// New styles for effect controls
const EffectGroup = styled.div`
  margin-bottom: 1rem;
  padding: 0.4rem 0;
  // background: var(--bg-secondary);
  // border: 1px solid var(--border-color);
  // border-radius: 8px;
`;

const EffectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.$hasContent ? '1rem' : '0'};
`;

const EffectTitle = styled.h3`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const EffectControls = styled.div`
  padding: 0;
  border-top: none; // Remove top border as it's handled by EffectHeader
  display: flex;
  flex-direction: column;
  gap: 1rem; // Add gap between control groups
`;

// New Grid container for corner controls
const CornerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem; // Row gap and column gap
`;

const SliderControl = styled.div`
  display: flex;
  flex-direction: row; // Changed from column
  align-items: center; // Align items vertically
  gap: 0.25rem; // Reduced gap from 0.5rem
`;

const ColorControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ColorOpacityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const OpacityLabel = styled.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  width: 25px;
`;

const SliderLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const SliderRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RangeInput = styled.input`
  flex: 1; // Let the range input take up available space
  width: 100%; // Explicitly set width to fill container
  min-width: 0; // Allow shrinking below default minimum size
  height: 4px;
  -webkit-appearance: none;
  appearance: none; // Standard property
  background: var(--bg-tertiary);
  border-radius: 2px;
  outline: none;
  padding: 0; // Ensure no padding
  border: 0; // Ensure no border
  margin: 0; // Ensure no margin

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    /* border: none; // Already inherited? */
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    border: 0; // Explicitly set border for Firefox thumb
  }
`;

const PresetButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 0.5rem;
`;

const PresetButton = styled.button`
  padding: 4px 6px;
  font-size: 0.75rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--button-text);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-hover);
    border-color: var(--border-accent);
  }
`;

const ShapeButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ShapeButton = styled.button`
  background: ${props => props.$isActive ? 'var(--accent-color)' : 'var(--input-bg)'};
  color: ${props => props.$isActive ? 'white' : 'var(--text-primary)'};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$isActive ? 'var(--accent-color)' : 'var(--bg-hover)'};
  }
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const ColorInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: 1px solid var(--border-color);
    border-radius: 4px;
  }
`;

const SelectInput = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--input-bg);
  color: var(--input-text);
  cursor: pointer;
  font-size: 12px;

  &:focus {
    outline: none;
    border-color: var(--border-accent);
  }

  option {
    background: var(--input-bg);
    color: var(--input-text);
  }
`;

// --- Add Styled Components for Tools Section --- 

const ToolSection = styled(Section)`
  // Special styling for the tool section if needed
  // Example: remove top border if it's the very first section
  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`;

const ToolButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow wrapping if needed
  gap: 0.5rem;
  align-items: center; // Align items vertically
`;

// Input specifically for the color picker swatch
const ToolColorPicker = styled(ColorInput)`
  width: 32px; // Specific size for the tool picker
  height: 32px;
  flex-shrink: 0; // Prevent shrinking
`;

const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--input-bg); /* Consistent bg */
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-hover);
    color: var(--text-primary);
  }

  &.active {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--text-accent);

    &:hover {
       background-color: var(--accent-hover);
    }
  }
`;

// --- NEW: Styled Components for Tabs --- 
const TabHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary); /* Changed from tertiary for consistency */
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TabButton = styled.button`
  flex: 1; /* Make buttons share space */
  padding: 0.75rem 1rem; /* Reduced padding */
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.$isActive ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.$isActive ? 'var(--text-primary)' : 'var(--text-secondary)'};
  font-size: 0.9rem; /* Slightly smaller font */
  font-weight: ${props => props.$isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px; /* Align bottom border with container's border */

  &:hover {
    color: var(--text-primary);
    background: var(--bg-hover);
  }
`;

const TabContent = styled.div`
  /* Removed display property, handled by conditional rendering in JSX */
  /* Removed height/overflow, handled by SidebarContainer */
  padding-top: 1rem; /* Add some space below the sticky tabs */
`;

// Footer section at bottom of sidebar
const SidebarFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.8rem;
  text-align: center;
  color: var(--text-secondary);
  a, button {
    color: var(--accent-color);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    padding: 0;
  }
`;

// Pixel Shape Options in the Sidebar
const PixelShapeOptions = ({
  pixelShape,
  setPixelShape,
  onShowCustomShapeModal
}) => {
  return (
    <Section>
      <SectionTitle>Pixel Shape</SectionTitle>
      <SectionContent>
        <ButtonGroup>
          <ShapeButton
            $active={pixelShape === 'rectangle'}
            onClick={() => setPixelShape('rectangle')}
            title="Rectangle"
          >
            <RectangleIcon />
          </ShapeButton>
          <ShapeButton
            $active={pixelShape === 'circle'}
            onClick={() => setPixelShape('circle')}
            title="Circle"
          >
            <CircleIcon />
          </ShapeButton>
          <ShapeButton
            $active={pixelShape === 'diamond'}
            onClick={() => setPixelShape('diamond')}
            title="Diamond"
          >
            <DiamondIcon />
          </ShapeButton>
          <ShapeButton
            $active={pixelShape === 'triangle'}
            onClick={() => setPixelShape('triangle')}
            title="Triangle"
          >
            <TriangleIcon />
          </ShapeButton>
          <ShapeButton
            $active={pixelShape === 'hexagon'}
            onClick={() => setPixelShape('hexagon')}
            title="Hexagon"
          >
            <HexagonIcon />
          </ShapeButton>
          <ShapeButton
            $active={pixelShape === 'custom'}
            onClick={onShowCustomShapeModal}
            title="Custom Shape"
          >
            <CustomShapeIcon />
          </ShapeButton>
        </ButtonGroup>
      </SectionContent>
    </Section>
  );
};

// Receive gridDimensions and setter
const Sidebar = ({ 
  colorHistory, 
  onColorSelect, 
  gridDimensions, 
  setGridDimensions, 
  pixelSize, 
  setPixelSize,
  gridGap,
  setGridGap,
  hasDrawn,
  // Add new props for pixel effects
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
  innerShadowEnabled,
  setInnerShadowEnabled,

  // New props for tools
  activeTool,
  handleToolChange,
  pickerColor,
  handlePickerChange,
  handlePickerBlur,
  showGrid,
  handleToggleGrid,
  handleZoomOut,
  handleZoomIn,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  // --- NEW: Mode props ---
  mode,
  onModeChange,
  rendererType,
  setRendererType,
  showPerformanceMonitor,
  setShowPerformanceMonitor,
  // --- NEW: Shape prop ---
  pixelShape,
  setPixelShape,
  // Add new props for custom shape
  onShowCustomShapeModal,
  backgroundColor,
  setBackgroundColor,
  // Sidebar visibility props
  sidebarVisible,
  onSidebarToggle
}) => {
  const { width: gridWidth, height: gridHeight } = gridDimensions; // Destructure

  // Local state for grid dimension inputs
  const [localGridWidth, setLocalGridWidth] = useState(gridWidth.toString());
  const [localGridHeight, setLocalGridHeight] = useState(gridHeight.toString());
  const [localPixelSize, setLocalPixelSize] = useState(pixelSize.toString());
  const [localGridGap, setLocalGridGap] = useState(gridGap.toString());

  // Refs for debounce timeouts
  const widthTimeoutRef = useRef(null);
  const heightTimeoutRef = useRef(null);
  const pixelSizeTimeoutRef = useRef(null);
  const gridGapTimeoutRef = useRef(null);

  // Sync local state if global state changes from elsewhere
  useEffect(() => {
    setLocalGridWidth(gridWidth.toString());
  }, [gridWidth]);

  useEffect(() => {
    setLocalGridHeight(gridHeight.toString());
  }, [gridHeight]);

  useEffect(() => {
    setLocalPixelSize(pixelSize.toString());
  }, [pixelSize]);

  useEffect(() => {
    setLocalGridGap(gridGap.toString());
  }, [gridGap]);
  
  // --- Debounce helper ---
  const debounceUpdate = (timeoutRef, updateFn, delay = 300) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(updateFn, delay);
  };

  // --- onChange Handlers (Update ONLY Local State for Width/Height) ---
  const handleLocalGridWidthChange = (e) => {
    setLocalGridWidth(e.target.value); // Update local string state immediately
    // DO NOT update global state here
  };

  const handleLocalGridHeightChange = (e) => {
    setLocalGridHeight(e.target.value);
    // DO NOT update global state here
  };

  // --- onChange Handlers (Update Local AND Debounce Global Update for Size/Gap) ---
  const handleLocalPixelSizeChange = (e) => {
    const value = e.target.value;
    setLocalPixelSize(value); // Update local state immediately
    debounceUpdate(pixelSizeTimeoutRef, () => {
      const parsedSize = parseInt(value);
      if (!isNaN(parsedSize) && parsedSize >= 1) {
        if (parsedSize !== pixelSize) { // Only update if different
          setPixelSize(parsedSize);
        }
      }
      // No 'else' needed, invalid input just won't update global state
      // The local state still holds the invalid input temporarily
    });
  };

  const handleLocalGridGapChange = (e) => {
    const value = e.target.value;
    setLocalGridGap(value); // Update local state immediately
    debounceUpdate(gridGapTimeoutRef, () => {
      const parsedGap = parseInt(value);
      if (!isNaN(parsedGap) && parsedGap >= 0) {
        if (parsedGap !== gridGap) { // Only update if different
          setGridGap(parsedGap);
        }
      }
      // No 'else' needed for invalid input
    });
  };

  // --- onBlur Handlers (Final Validation & Global Update for Width/Height ONLY) ---
  const handleGridWidthBlur = () => {
    // Remove any pending debounce timers (if any were left)
    clearTimeout(widthTimeoutRef.current);
    const parsedWidth = parseInt(localGridWidth);
    if (!isNaN(parsedWidth) && parsedWidth >= 1) {
      // Only update if the valid number is different from current global state
      if (parsedWidth !== gridDimensions.width) {
         setGridDimensions(parsedWidth, gridDimensions.height);
      }
    } else {
      // Reset local state if invalid
      setLocalGridWidth(gridDimensions.width.toString());
    }
  };

  const handleGridHeightBlur = () => {
    clearTimeout(heightTimeoutRef.current);
    const parsedHeight = parseInt(localGridHeight);
    if (!isNaN(parsedHeight) && parsedHeight >= 1) {
       // Only update if valid and different
       if (parsedHeight !== gridDimensions.height) {
         setGridDimensions(gridDimensions.width, parsedHeight);
       }
    } else {
      setLocalGridHeight(gridDimensions.height.toString());
    }
  };

  // Handle corner radius changes
  const handleCornerRadiusChange = (corner, value) => {
    // Pass an object with the single setting to update
    setCornerRadius({ [corner]: value });
  };

  // Handle corner radius presets
  const handleCornerPreset = (preset) => {
    const currentEnabled = cornerRadius.enabled;
    switch (preset) {
      case 'none':
        setCornerRadius({ enabled: currentEnabled, topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });
        break;
      case 'circle':
        setCornerRadius({ enabled: currentEnabled, topLeft: 50, topRight: 50, bottomLeft: 50, bottomRight: 50 });
        break;
      case 'top':
        setCornerRadius({ enabled: currentEnabled, topLeft: 50, topRight: 50, bottomLeft: 0, bottomRight: 0 });
        break;
      case 'bottom':
        setCornerRadius({ enabled: currentEnabled, topLeft: 0, topRight: 0, bottomLeft: 50, bottomRight: 50 });
        break;
      case 'left':
        setCornerRadius({ enabled: currentEnabled, topLeft: 50, topRight: 0, bottomLeft: 50, bottomRight: 0 });
        break;
      case 'right':
        setCornerRadius({ enabled: currentEnabled, topLeft: 0, topRight: 50, bottomLeft: 0, bottomRight: 50 });
        break;
    }
  };

  // Glow effect handlers
  const handleGlowChange = (e) => {
    setGlowEnabled(e.target.checked);
  };

  const handleGlowSettingChange = (setting, value) => {
    // Create a new settings object that preserves all existing settings
    // and only updates the specific setting that changed
    const updatedSettings = {
      ...glowSettings,
      [setting]: value
    };
    console.log('[Sidebar] handleGlowSettingChange:', setting, value, updatedSettings);
    setGlowSettings(updatedSettings);
  };

  const handleBulbChange = (enabled) => {
    setBulbEnabled(enabled);
  };

  const handleBulbSettingChange = (setting, value) => {
    const updatedSettings = {
      ...bulbSettings,
      [setting]: value
    };
    console.log('[Sidebar] handleBulbSettingChange:', setting, value, updatedSettings);
    setBulbSettings(updatedSettings);
  };

  const toggleSidebar = () => {
    onSidebarToggle(!sidebarVisible);
  };
  
  // Modify the useEffect to be a simple resize listener
  useEffect(() => {
    const handleResize = () => {
      // We can add any resize-specific logic here in the future if needed
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <>
      <SidebarToggle isSidebarOpen={sidebarVisible} toggleSidebar={toggleSidebar} />
      <SidebarContainer $isOpen={sidebarVisible}>
        {/* --- NEW: Tab Header --- */}
        <TabHeader>
          <TabButton 
            $isActive={mode === 'edit'} 
            onClick={() => onModeChange('edit')}
          >
            Edit
          </TabButton>
          <TabButton 
            $isActive={mode === 'preview'} 
            onClick={() => onModeChange('preview')}
          >
            Preview
          </TabButton>
        </TabHeader>

        {/* --- Edit Mode Content --- */}
        {mode === 'edit' && (
          <TabContent> { /* Use a generic div or fragment if no padding needed */}
            {/* Existing Edit Mode Content - wrapped in conditional render */}
            <ToolSection> 
              <SectionTitle>Tools</SectionTitle>
              {/* Drawing Tools Group */}
              <ToolButtonGroup style={{ marginBottom: '0.75rem' }}> 
                <ToolButton
                  className={activeTool === 'pencil' ? 'active' : ''}
                  onClick={() => handleToolChange('pencil')}
                  title="Pencil (P)"
                >
                  <FontAwesomeIcon icon={faPencil} />
                </ToolButton>
                <ToolButton
                  className={activeTool === 'eraser' ? 'active' : ''}
                  onClick={() => handleToolChange('eraser')}
                  title="Eraser (E)"
                >
                  <FontAwesomeIcon icon={faEraser} />
                </ToolButton>
                <ToolButton
                  className={activeTool === 'fill' ? 'active' : ''}
                  onClick={() => handleToolChange('fill')}
                  title="Fill (F)"
                >
                  <FontAwesomeIcon icon={faFill} />
                </ToolButton>
                <ToolButton
                  className={activeTool === 'select' ? 'active' : ''}
                  onClick={() => handleToolChange('select')}
                  title="Select (M)"
                >
                  <FontAwesomeIcon icon={faMousePointer} />
                </ToolButton>
                <ToolButton
                  onClick={handleToggleGrid}
                  className={showGrid ? 'active' : ''}
                  title={showGrid ? 'Hide Grid' : 'Show Grid'}
                >
                  <FontAwesomeIcon icon={showGrid ? faTableCellsLarge : faTableCells} />
                </ToolButton>
              </ToolButtonGroup>

              <ToolButtonGroup>
                <ToolButton onClick={() => { console.log('ZoomOut button clicked'); handleZoomOut(); }} title="Zoom Out">
                  <FontAwesomeIcon icon={faSearchMinus} />
                </ToolButton>
                <ToolButton onClick={() => { console.log('ZoomIn button clicked'); handleZoomIn(); }} title="Zoom In">
                  <FontAwesomeIcon icon={faSearchPlus} />
                </ToolButton>
                <ToolButton onClick={onUndo} disabled={!canUndo} title="Undo">
                  <FontAwesomeIcon icon={faUndo} />
                </ToolButton>
                <ToolButton onClick={onRedo} disabled={!canRedo} title="Redo">
                  <FontAwesomeIcon icon={faRedo} />
                </ToolButton>
              </ToolButtonGroup>
            </ToolSection>

            <Section> {/* Color Section */}
              <SectionTitle>Color</SectionTitle>
              <ControlRow>
                <ControlGroup>
                  <ControlLabel>Paint</ControlLabel>
                  <ColorControl>
                    <ColorInput
                      type="color"
                      value={typeof pickerColor === 'string' ? pickerColor.replace(/rgba?\([^)]+\)/, (match) => rgbaToHex(match)) : '#ff0000'}
                      onChange={(e) => {
                        const hex = e.target.value;
                        const rgba = hexToRgba(hex, typeof pickerColor === 'string' && pickerColor.includes('rgba') ? getRgbaOpacity(pickerColor) : 1);
                        handlePickerChange({ target: { value: rgba } }); // Update temporary picker state
                      }}
                      onBlur={handlePickerBlur} // Finalize color on blur
                      title="Select Paint Color"
                    />
                    <ColorOpacityRow>
                      <OpacityLabel>{Math.round(typeof pickerColor === 'string' && pickerColor.includes('rgba') ? getRgbaOpacity(pickerColor) * 100 : 100)}%</OpacityLabel>
                      <RangeInput
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={typeof pickerColor === 'string' && pickerColor.includes('rgba') ? getRgbaOpacity(pickerColor) : 1}
                        onChange={(e) => {
                          const opacity = parseFloat(e.target.value);
                          const currentColor = pickerColor;
                          const rgba = updateRgbaOpacity(currentColor, opacity);
                          handlePickerChange({ target: { value: rgba } });
                        }}
                      />
                    </ColorOpacityRow>
                  </ColorControl>
                </ControlGroup>
                <ControlGroup>
                  <ControlLabel>Background</ControlLabel>
                  <ColorControl>
                    <ColorInput
                      type="color"
                      value={backgroundColor.replace(/rgba?\([^)]+\)/, (match) => rgbaToHex(match))}
                      onChange={(e) => {
                        const hex = e.target.value;
                        const rgba = hexToRgba(hex, backgroundColor.includes('rgba') ? getRgbaOpacity(backgroundColor) : 1);
                        setBackgroundColor(rgba);
                      }}
                      title="Select Background Color"
                    />
                    <ColorOpacityRow>
                      <OpacityLabel>{Math.round(backgroundColor.includes('rgba') ? getRgbaOpacity(backgroundColor) * 100 : 100)}%</OpacityLabel>
                      <RangeInput
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={backgroundColor.includes('rgba') ? getRgbaOpacity(backgroundColor) : 1}
                        onChange={(e) => {
                          const opacity = parseFloat(e.target.value);
                          const currentColor = backgroundColor;
                          const rgba = updateRgbaOpacity(currentColor, opacity);
                          setBackgroundColor(rgba);
                        }}
                      />
                    </ColorOpacityRow>
                  </ColorControl>
                </ControlGroup>
              </ControlRow>
              <ColorHistoryContainer>
                {colorHistory.map((color, index) => (
                  <ColorSwatch
                    key={`${index}-${color}`}
                    color={color}
                    onClick={() => onColorSelect(color)} // Use the passed handler
                    title={color} 
                  />
                ))}
              </ColorHistoryContainer>
            </Section>

            <Section> {/* Grid Settings Section */}
              <SectionTitle>Grid Settings</SectionTitle>
              <ControlRow>
                <ControlGroup>
                  <ControlLabel htmlFor="gridWidth">Width (px)</ControlLabel>
                  <NumberInput
                    type="number"
                    id="gridWidth"
                    value={localGridWidth}
                    onChange={handleLocalGridWidthChange}
                    onBlur={handleGridWidthBlur} // Keep blur for width
                    min="1"
                    step="1"
                  />
                </ControlGroup>
                <ControlGroup>
                  <ControlLabel htmlFor="gridHeight">Height (px)</ControlLabel>
                  <NumberInput
                    type="number"
                    id="gridHeight"
                    value={localGridHeight}
                    onChange={handleLocalGridHeightChange}
                    onBlur={handleGridHeightBlur} // Keep blur for height
                    min="1"
                    step="1"
                  />
                </ControlGroup>
              </ControlRow>
              <ControlRow>
                <ControlGroup>
                  <ControlLabel htmlFor="pixelSize">Pixel Size (px)</ControlLabel>
                  <NumberInput
                    type="number"
                    id="pixelSize"
                    value={localPixelSize}
                    onChange={handleLocalPixelSizeChange} // Use onChange
                    // onBlur removed for pixel size
                    min="1"
                    step="1"
                  />
                </ControlGroup>
                <ControlGroup>
                  <ControlLabel htmlFor="gridGap">Grid Gap (px)</ControlLabel>
                  <NumberInput
                    type="number"
                    id="gridGap"
                    value={localGridGap}
                    onChange={handleLocalGridGapChange} // Use onChange
                    // onBlur removed for grid gap
                    min="0"
                    step="1"
                  />
                </ControlGroup>
              </ControlRow>
            </Section>

            <Section> {/* Pixel Effects Section */}
              <SectionTitle>Pixel Effects</SectionTitle>
              
              {/* Pixel Shape Controls - available for both renderers */}
              <EffectGroup>
                <EffectHeader $hasContent={true}>
                  <EffectTitle>Pixel Shape</EffectTitle>
                </EffectHeader>
                <EffectControls>
                  <ShapeButtonsGrid>
                    <ShapeButton 
                      $isActive={pixelShape === 'rectangle'} 
                      onClick={() => setPixelShape('rectangle')}
                      title="Rectangle"
                    >
                      <RiRectangleLine />
                    </ShapeButton>
                    <ShapeButton 
                      $isActive={pixelShape === 'circle'} 
                      onClick={() => setPixelShape('circle')}
                      title="Circle"
                    >
                      <RiCircleLine />
                    </ShapeButton>
                    <ShapeButton 
                      $isActive={pixelShape === 'diamond'} 
                      onClick={() => setPixelShape('diamond')}
                      title="Diamond"
                    >
                      <RiShape2Line />
                    </ShapeButton>
                    <ShapeButton 
                      $isActive={pixelShape === 'triangle'} 
                      onClick={() => setPixelShape('triangle')}
                      title="Triangle"
                    >
                      <RiTriangleLine />
                    </ShapeButton>
                    <ShapeButton 
                      $isActive={pixelShape === 'hexagon'} 
                      onClick={() => setPixelShape('hexagon')}
                      title="Hexagon"
                    >
                      <RiHexagonLine />
                    </ShapeButton>
                    <ShapeButton 
                      $isActive={pixelShape === 'custom'} 
                      onClick={onShowCustomShapeModal}
                      title="Custom Shape"
                      style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}
                    >
                      <RiCodeSSlashLine />
                      <span style={{ marginLeft: '0.5rem' }}>Custom</span>
                    </ShapeButton>
                  </ShapeButtonsGrid>
                </EffectControls>
              </EffectGroup>
              
              {/* Corner Radius Controls */}
              <EffectGroup>
                <EffectHeader $hasContent={cornerRadius.enabled}>
                  <EffectTitle>Corner Radius</EffectTitle>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={cornerRadius.enabled}
                      onChange={(e) => setCornerRadius({ enabled: e.target.checked })}
                    />
                    <span></span>
                  </Switch>
                </EffectHeader>
                {cornerRadius.enabled && (
                  <EffectControls>
                    <CornerGrid>
                      <ControlGroup>
                        <ControlLabel>Top Left (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={cornerRadius.topLeft}
                            onChange={(e) => handleCornerRadiusChange('topLeft', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={cornerRadius.topLeft}
                            onChange={(e) => handleCornerRadiusChange('topLeft', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Top Right (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={cornerRadius.topRight}
                            onChange={(e) => handleCornerRadiusChange('topRight', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={cornerRadius.topRight}
                            onChange={(e) => handleCornerRadiusChange('topRight', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Bottom Left (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={cornerRadius.bottomLeft}
                            onChange={(e) => handleCornerRadiusChange('bottomLeft', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={cornerRadius.bottomLeft}
                            onChange={(e) => handleCornerRadiusChange('bottomLeft', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Bottom Right (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={cornerRadius.bottomRight}
                            onChange={(e) => handleCornerRadiusChange('bottomRight', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={cornerRadius.bottomRight}
                            onChange={(e) => handleCornerRadiusChange('bottomRight', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                    </CornerGrid>

                    {/* Preset Buttons */}
                    <PresetButtons>
                      <PresetButton onClick={() => handleCornerPreset('none')}>None</PresetButton>
                      <PresetButton onClick={() => handleCornerPreset('circle')}>Circle</PresetButton>
                      <PresetButton onClick={() => handleCornerPreset('top')}>Top</PresetButton>
                      <PresetButton onClick={() => handleCornerPreset('bottom')}>Bottom</PresetButton>
                      <PresetButton onClick={() => handleCornerPreset('left')}>Left</PresetButton>
                      <PresetButton onClick={() => handleCornerPreset('right')}>Right</PresetButton>
                    </PresetButtons>
                  </EffectControls>
                )}
              </EffectGroup>

              {/* Glow Effect Controls */}
              <EffectGroup>
                <EffectHeader $hasContent={glowEnabled}>
                  <EffectTitle>Glow Effect</EffectTitle>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={glowEnabled}
                      onChange={handleGlowChange}
                    />
                    <span></span>
                  </Switch>
                </EffectHeader>
                {glowEnabled && (
                  <EffectControls>
                    <CornerGrid>
                      {/* --- Row 1 --- */}
                      <ControlGroup>
                        <ControlLabel>Opacity (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={glowSettings.opacity}
                            onChange={(e) => handleGlowSettingChange('opacity', Number(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={glowSettings.opacity}
                            onChange={(e) => handleGlowSettingChange('opacity', Number(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Blend Mode</ControlLabel>
                        <SliderControl>
                          <SelectInput
                            value={glowSettings.blendMode || 'lighter'}
                            onChange={(e) => handleGlowSettingChange('blendMode', e.target.value)}
                            style={{ flex: 1 }}
                          >
                            {/* Blend Mode Options */}
                            <option value="source-over">Normal</option>
                            <option value="lighter">Lighter</option>
                            <option value="screen">Screen</option>
                            <option value="color-dodge">Color Dodge</option>
                            <option value="add">Add</option>
                            <option value="multiply">Multiply</option>
                            <option value="color-burn">Color Burn</option>
                            <option value="overlay">Overlay</option>
                            <option value="soft-light">Soft Light</option>
                            <option value="hard-light">Hard Light</option>
                            <option value="difference">Difference</option>
                            <option value="exclusion">Exclusion</option>
                            <option value="hue">Hue</option>
                            <option value="saturation">Saturation</option>
                            <option value="color">Color</option>
                            <option value="luminosity">Luminosity</option>
                          </SelectInput>
                        </SliderControl>
                      </ControlGroup>

                      {/* --- Row 2 --- */}
                      <ControlGroup>
                        <ControlLabel>Blur (px)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="50"
                            value={glowSettings.size}
                            onChange={(e) => handleGlowSettingChange('size', Number(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="50"
                            value={glowSettings.size}
                            onChange={(e) => handleGlowSettingChange('size', Number(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Spread (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={glowSettings.spread}
                            onChange={(e) => handleGlowSettingChange('spread', Number(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={glowSettings.spread}
                            onChange={(e) => handleGlowSettingChange('spread', Number(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* --- Row 3 --- */}
                      <ControlGroup>
                        <ControlLabel>Offset X (px)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="-50"
                            max="50"
                            value={glowSettings.offsetX}
                            onChange={(e) => handleGlowSettingChange('offsetX', Number(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="-50"
                            max="50"
                            value={glowSettings.offsetX}
                            onChange={(e) => handleGlowSettingChange('offsetX', Number(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                      <ControlGroup>
                        <ControlLabel>Offset Y (px)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="-50"
                            max="50"
                            value={glowSettings.offsetY}
                            onChange={(e) => handleGlowSettingChange('offsetY', Number(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="-50"
                            max="50"
                            value={glowSettings.offsetY}
                            onChange={(e) => handleGlowSettingChange('offsetY', Number(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>
                    </CornerGrid>
                  </EffectControls>
                )}
              </EffectGroup>

              {/* Bulb Effect Controls */}
              <EffectGroup>
                <EffectHeader $hasContent={bulbEnabled}>
                  <EffectTitle>Bulb Effect</EffectTitle>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={bulbEnabled}
                      onChange={(e) => handleBulbChange(e.target.checked)}
                    />
                    <span></span>
                  </Switch>
                </EffectHeader>
                {bulbEnabled && (
                  <EffectControls>
                    <CornerGrid>
                      {/* Intensity Control */}
                      <ControlGroup>
                        <ControlLabel>Intensity (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={bulbSettings.intensity}
                            onChange={(e) => handleBulbSettingChange('intensity', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={bulbSettings.intensity}
                            onChange={(e) => handleBulbSettingChange('intensity', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* Radius Control */}
                      <ControlGroup>
                        <ControlLabel>Radius (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="200" // Keeping original range for bulb radius
                            value={bulbSettings.radius}
                            onChange={(e) => handleBulbSettingChange('radius', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="200"
                            value={bulbSettings.radius}
                            onChange={(e) => handleBulbSettingChange('radius', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* Position X Control */}
                      <ControlGroup>
                        <ControlLabel>Position X (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={bulbSettings.positionX}
                            onChange={(e) => handleBulbSettingChange('positionX', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={bulbSettings.positionX}
                            onChange={(e) => handleBulbSettingChange('positionX', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* Position Y Control */}
                      <ControlGroup>
                        <ControlLabel>Position Y (%)</ControlLabel>
                        <SliderControl>
                          <RangeInput
                            type="range"
                            min="0"
                            max="100"
                            value={bulbSettings.positionY}
                            onChange={(e) => handleBulbSettingChange('positionY', parseInt(e.target.value))}
                          />
                          <NumberInput
                            type="number"
                            min="0"
                            max="100"
                            value={bulbSettings.positionY}
                            onChange={(e) => handleBulbSettingChange('positionY', parseInt(e.target.value))}
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* Color Control */}
                      <ControlGroup>
                        <ControlLabel>Color</ControlLabel>
                        <SliderControl> {/* Still use SliderControl for alignment */}
                          <ColorInput
                            type="color"
                            value={bulbSettings.color}
                            onChange={(e) => handleBulbSettingChange('color', e.target.value)}
                            style={{ flex: 1 }} // Allow color input to take space
                          />
                        </SliderControl>
                      </ControlGroup>

                      {/* Blend Mode Control */}
                      <ControlGroup>
                        <ControlLabel>Blend Mode</ControlLabel>
                        <SliderControl> {/* Still use SliderControl for alignment */} 
                          <SelectInput
                            value={bulbSettings.blendMode}
                            onChange={(e) => handleBulbSettingChange('blendMode', e.target.value)}
                            style={{ flex: 1 }} // Allow select input to take space
                          >
                            {/* --- Updated Blend Modes (Matching Glow) --- */}
                            <option value="source-over">Normal</option> 
                            {/* Lighten Modes */}
                            <option value="lighter">Lighter</option> 
                            <option value="screen">Screen</option>
                            <option value="color-dodge">Color Dodge</option>
                            <option value="add">Add</option> 
                            {/* Darken Modes */}
                            <option value="multiply">Multiply</option>
                            <option value="color-burn">Color Burn</option>
                            {/* Contrast Modes */}
                            <option value="overlay">Overlay</option>
                            <option value="soft-light">Soft Light</option>
                            <option value="hard-light">Hard Light</option>
                            {/* Inversion/Comparison Modes */}
                            <option value="difference">Difference</option>
                            <option value="exclusion">Exclusion</option>
                            {/* Component Modes */}
                            <option value="hue">Hue</option>
                            <option value="saturation">Saturation</option>
                            <option value="color">Color</option>
                            <option value="luminosity">Luminosity</option>
                            {/* --- End Updated Blend Modes --- */}
                          </SelectInput>
                        </SliderControl>
                      </ControlGroup>
                    </CornerGrid>
                  </EffectControls>
                )}
              </EffectGroup>
            </Section>
          </TabContent>
        )}

        {/* --- Preview Mode Content --- */}
        {mode === 'preview' && (
          <TabContent>
            <Section>
              <SectionTitle>Preview Mode</SectionTitle>
              <div style={{ padding: '12px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                Preview tools coming soon. Edit controls are disabled in this mode.
              </div>
            </Section>
          </TabContent>
        )}

        {/* Add Renderer Type Control */}
        <Section>
          <SectionTitle>Renderer</SectionTitle>
          <ControlGroup>
            <ControlRow>
              <ControlLabel>Renderer Type</ControlLabel>
              <select
                value={rendererType}
                onChange={(e) => setRendererType(e.target.value)}
                style={{
                  padding: '0.3rem 0.5rem',
                  backgroundColor: 'var(--input-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--input-text)',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                <option value="canvas">Canvas</option>
                <option value="svg">SVG</option>
                <option value="webgl">WebGL</option>
              </select>
            </ControlRow>
            
            {/* Add Performance Monitor Toggle */}
            <ControlRow>
              <ControlLabel>Performance Monitor</ControlLabel>
              <Switch>
                <input
                  type="checkbox"
                  checked={showPerformanceMonitor}
                  onChange={() => setShowPerformanceMonitor(!showPerformanceMonitor)}
                />
                <span></span>
              </Switch>
            </ControlRow>
          </ControlGroup>
        </Section>

        <SidebarFooter>
          © Copyright <a href="https://reganvause.com" target="_blank" rel="noopener noreferrer">Regan Vause</a>
          {' | '}
          <button onClick={() => setShowAboutModal(true)}>About PixelPop</button>
        </SidebarFooter>
      </SidebarContainer>

      {showAboutModal && (
        <Modal title="About PixelPop" onClose={() => setShowAboutModal(false)}>
          <p>PixelPop is a lightweight pixel art editor built for fun, creativity, and simplicity. Designed for designers, artists, and kids of all ages, it runs right in your browser with full touch support and easy export options.</p>
          <p>
            Crafted with care by <a href="https://reganvause.com" target="_blank" rel="noopener noreferrer">Regan Vause</a> — designer, maker, tinkerer.
          </p>
          <h3>Credits</h3>
          <p>Built with Cursor.</p>
          <p>Open source on <a href="https://github.com/peepshow/pixel-pop" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
