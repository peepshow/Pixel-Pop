import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencil, faFill, faEraser, 
  faTableCells, faTableCellsLarge, 
  faUndo, faRedo, 
  faSearchPlus, faSearchMinus
} from '@fortawesome/free-solid-svg-icons';

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

const SliderLabel = styled.label`
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
  interactionSettings,
  setInteractionSettings // Placeholder for interact controls
}) => {
  const { width: gridWidth, height: gridHeight } = gridDimensions; // Destructure

  // Handle input changes for width
  const handleGridWidthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setGridDimensions(prev => ({ ...prev, width: value }));
    } else if (e.target.value === '') { /* Allow clearing */ }
  };

  // Handle input changes for height
  const handleGridHeightChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setGridDimensions(prev => ({ ...prev, height: value }));
    } else if (e.target.value === '') { /* Allow clearing */ }
  };

  const handlePixelSizeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setPixelSize(value);
    } else if (e.target.value === '') { /* Allow clearing */ }
  };

  const handleGridGapChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setGridGap(value);
    } else if (e.target.value === '') { /* Allow clearing */ }
  };

  // Handle corner radius changes
  const handleCornerRadiusChange = (corner, value) => {
    setCornerRadius(prev => ({
      ...prev,
      [corner]: value
    }));
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
        setCornerRadius({ enabled: currentEnabled, topLeft: 100, topRight: 100, bottomLeft: 0, bottomRight: 0 });
        break;
      case 'bottom':
        setCornerRadius({ enabled: currentEnabled, topLeft: 0, topRight: 0, bottomLeft: 100, bottomRight: 100 });
        break;
      case 'left':
        setCornerRadius({ enabled: currentEnabled, topLeft: 100, topRight: 0, bottomLeft: 100, bottomRight: 0 });
        break;
      case 'right':
        setCornerRadius({ enabled: currentEnabled, topLeft: 0, topRight: 100, bottomLeft: 0, bottomRight: 100 });
        break;
    }
  };

  // Glow effect handlers
  const handleGlowChange = (e) => {
    setGlowEnabled(e.target.checked);
  };

  const handleGlowSettingChange = (setting, value) => {
    setGlowSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleBulbChange = (enabled) => {
    setBulbEnabled(enabled);
  };

  const handleBulbSettingChange = (setting, value) => {
    setBulbSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <SidebarContainer>
      {/* --- NEW: Tab Header --- */}
      <TabHeader>
        <TabButton 
          $isActive={mode === 'edit'} 
          onClick={() => onModeChange('edit')}
        >
          Edit
        </TabButton>
        <TabButton 
          $isActive={mode === 'interact'} 
          onClick={() => onModeChange('interact')}
        >
          Interact
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
              <ToolColorPicker
                type="color"
                value={pickerColor}
                onChange={handlePickerChange}
                onBlur={handlePickerBlur}
                title="Select Color"
              />
              <ToolButton
                onClick={() => handleToolChange('pencil')}
                className={activeTool === 'pencil' ? 'active' : ''}
                title="Pencil Tool"
              >
                <FontAwesomeIcon icon={faPencil} />
              </ToolButton>
              <ToolButton
                onClick={() => handleToolChange('fill')}
                className={activeTool === 'fill' ? 'active' : ''}
                title="Fill Tool"
              >
                <FontAwesomeIcon icon={faFill} />
              </ToolButton>
              <ToolButton
                onClick={() => handleToolChange('eraser')}
                className={activeTool === 'eraser' ? 'active' : ''}
                title="Eraser Tool"
              >
                <FontAwesomeIcon icon={faEraser} />
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
              <ToolButton onClick={handleZoomOut} title="Zoom Out">
                <FontAwesomeIcon icon={faSearchMinus} />
              </ToolButton>
              <ToolButton onClick={handleZoomIn} title="Zoom In">
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
                <ControlLabel htmlFor="gridWidth">Grid Width (pixels)</ControlLabel>
                <NumberInput
                  type="number"
                  id="gridWidth"
                  value={gridWidth}
                  onChange={handleGridWidthChange}
                  min="1"
                  step="1"
                  disabled={hasDrawn}
                  title={hasDrawn ? "Cannot change grid size after drawing starts" : ""}
                />
              </ControlGroup>
              <ControlGroup>
                <ControlLabel htmlFor="gridHeight">Grid Height (pixels)</ControlLabel>
                <NumberInput
                  type="number"
                  id="gridHeight"
                  value={gridHeight}
                  onChange={handleGridHeightChange}
                  min="1"
                  step="1"
                  disabled={hasDrawn}
                  title={hasDrawn ? "Cannot change grid size after drawing starts" : ""}
                />
              </ControlGroup>
            </ControlRow>
            <ControlRow>
              <ControlGroup>
                <ControlLabel htmlFor="pixelSize">Pixel Size (screen px)</ControlLabel>
                <NumberInput
                  type="number"
                  id="pixelSize"
                  value={pixelSize}
                  onChange={handlePixelSizeChange}
                  min="1"
                  step="1"
                />
              </ControlGroup>
              <ControlGroup>
                <ControlLabel htmlFor="gridGap">Grid Gap (px)</ControlLabel>
                <NumberInput
                  type="number"
                  id="gridGap"
                  value={gridGap}
                  onChange={handleGridGapChange}
                  min="0"
                  step="1"
                />
              </ControlGroup>
            </ControlRow>
          </Section>

          <Section> {/* Pixel Effects Section */}
            <SectionTitle>Pixel Effects</SectionTitle>
            
            {/* Corner Radius Controls */}
            <EffectGroup>
              <EffectHeader $hasContent={cornerRadius.enabled}>
                <EffectTitle>Corner Radius</EffectTitle>
                <Switch>
                  <input
                    type="checkbox"
                    checked={cornerRadius.enabled}
                    onChange={(e) => setCornerRadius(prev => ({ ...prev, enabled: e.target.checked }))}
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
                          value={bulbSettings.blend}
                          onChange={(e) => handleBulbSettingChange('blend', e.target.value)}
                          style={{ flex: 1 }} // Allow select input to take space
                        >
                          <option value="overlay">Overlay</option>
                          <option value="screen">Screen</option>
                          <option value="lighter">Lighter</option>
                        </SelectInput>
                      </SliderControl>
                    </ControlGroup>
                  </CornerGrid>
                </EffectControls>
              )}
            </EffectGroup>

            {/* Inner Shadow Controls (Scaffolded) */}
            <EffectGroup>
              <EffectHeader>
                <EffectTitle>Inner Shadow</EffectTitle>
                <Switch>
                  <input
                    type="checkbox"
                    checked={innerShadowEnabled}
                    onChange={(e) => setInnerShadowEnabled(e.target.checked)}
                  />
                  <span></span>
                </Switch>
              </EffectHeader>
              {innerShadowEnabled && (
                <EffectControls>
                  {/* Inner shadow controls will be implemented later */}
                </EffectControls>
              )}
            </EffectGroup>
          </Section>
        </TabContent>
      )}

      {/* --- Interact Mode Content --- */}
      {mode === 'interact' && (
        <TabContent>
          {/* --- Hover Effects --- */}
          <Section>
            <SectionTitle>Hover Effects</SectionTitle>
            
            {/* Hover Scale */}
            <EffectGroup>
              <EffectHeader $hasContent={interactionSettings.hover.scale.enabled}>
                <EffectTitle>Scale</EffectTitle>
                <Switch>
                  <input
                    type="checkbox"
                    checked={interactionSettings.hover.scale.enabled}
                    onChange={(e) => setInteractionSettings(prev => ({ 
                      ...prev, 
                      hover: { ...prev.hover, scale: { ...prev.hover.scale, enabled: e.target.checked } } 
                    }))}
                  />
                  <span></span>
                </Switch>
              </EffectHeader>
              {interactionSettings.hover.scale.enabled && (
                <EffectControls>
                  <SliderControl>
                    <RangeInput
                      type="range"
                      min="0.5" /* Min scale 50% */
                      max="3" /* Max scale 300% */
                      step="0.1"
                      value={interactionSettings.hover.scale.value}
                      onChange={(e) => setInteractionSettings(prev => ({ 
                        ...prev, 
                        hover: { ...prev.hover, scale: { ...prev.hover.scale, value: parseFloat(e.target.value) } } 
                      }))}
                    />
                    <NumberInput
                      type="number"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={interactionSettings.hover.scale.value}
                      onChange={(e) => setInteractionSettings(prev => ({ 
                        ...prev, 
                        hover: { ...prev.hover, scale: { ...prev.hover.scale, value: parseFloat(e.target.value) } } 
                      }))}
                    />
                  </SliderControl>
                </EffectControls>
              )}
            </EffectGroup>

            {/* Hover Brightness */}
            <EffectGroup>
              <EffectHeader $hasContent={interactionSettings.hover.brightness.enabled}>
                <EffectTitle>Brightness</EffectTitle>
                <Switch>
                  <input
                    type="checkbox"
                    checked={interactionSettings.hover.brightness.enabled}
                    onChange={(e) => setInteractionSettings(prev => ({ 
                      ...prev, 
                      hover: { ...prev.hover, brightness: { ...prev.hover.brightness, enabled: e.target.checked } } 
                    }))}
                  />
                  <span></span>
                </Switch>
              </EffectHeader>
              {interactionSettings.hover.brightness.enabled && (
                <EffectControls>
                   <SliderControl>
                    <RangeInput
                      type="range"
                      min="0.5" /* Min brightness 50% */
                      max="3" /* Max brightness 300% */
                      step="0.1"
                      value={interactionSettings.hover.brightness.value}
                      onChange={(e) => setInteractionSettings(prev => ({ 
                        ...prev, 
                        hover: { ...prev.hover, brightness: { ...prev.hover.brightness, value: parseFloat(e.target.value) } } 
                      }))}
                    />
                    <NumberInput
                      type="number"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={interactionSettings.hover.brightness.value}
                      onChange={(e) => setInteractionSettings(prev => ({ 
                        ...prev, 
                        hover: { ...prev.hover, brightness: { ...prev.hover.brightness, value: parseFloat(e.target.value) } } 
                      }))}
                    />
                  </SliderControl>
                </EffectControls>
              )}
            </EffectGroup>
          </Section>
          
          {/* --- Click Effects --- */}
          <Section>
            <SectionTitle>Click Effects</SectionTitle>

            {/* Click Effect Toggle */}
            <EffectGroup>
              <EffectHeader>
                <EffectTitle>Click Effects</EffectTitle>
                <Switch>
                  <input
                    type="checkbox"
                    checked={interactionSettings.click.enabled}
                    onChange={(e) => setInteractionSettings(prev => ({ 
                      ...prev, 
                      click: { ...prev.click, enabled: e.target.checked } 
                    }))}
                  />
                  <span></span>
                </Switch>
              </EffectHeader>
              {interactionSettings.click.enabled && (
                <EffectControls>
                  <div style={{ padding: '12px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Click effects will be implemented soon!
                  </div>
                </EffectControls>
              )}
            </EffectGroup>
          </Section>
        </TabContent>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
