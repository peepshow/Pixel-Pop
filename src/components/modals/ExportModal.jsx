import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { isRunningInFigma } from '../../utils/figmaExport';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

const ModalContainer = styled.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-tertiary);
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  
  &:hover {
    color: var(--text-primary);
  }
`;

const ModalContent = styled.div`
  padding: 1.5rem;
  color: var(--text-primary);
`;

const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background-color: var(--bg-tertiary);
`;

const ActionButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);

  &:hover:not(:disabled) {
    background-color: var(--bg-hover);
    color: var(--text-primary);
  }
`;

const ExportButton = styled(ActionButton)`
  background-color: var(--accent-color);
  color: var(--text-accent);
  border: 1px solid var(--accent-color);

  &:hover:not(:disabled) {
    background-color: var(--accent-hover);
  }
`;

const FormSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: var(--text-primary);
`;

const FormatOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormatOption = styled.button`
  flex: 1;
  padding: 0.5rem;
  background-color: ${props => props.$isActive ? 'var(--accent-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$isActive ? 'var(--text-accent)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$isActive ? 'var(--accent-color)' : 'var(--border-color)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.$isActive ? 'var(--accent-hover)' : 'var(--bg-hover)'};
    color: ${props => props.$isActive ? 'var(--text-accent)' : 'var(--text-primary)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ScaleOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ScaleOption = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.$isActive ? 'var(--accent-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$isActive ? 'var(--text-accent)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$isActive ? 'var(--accent-color)' : 'var(--border-color)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.$isActive ? 'var(--accent-hover)' : 'var(--bg-hover)'};
    color: ${props => props.$isActive ? 'var(--text-accent)' : 'var(--text-primary)'};
  }
`;

const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SettingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

const SliderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const SliderLabel = styled.label`
  min-width: 120px;
  font-size: 0.9rem;
`;

const RangeInput = styled.input`
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--bg-tertiary);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    border: 0;
  }
`;

const ValueDisplay = styled.div`
  min-width: 40px;
  text-align: right;
  font-size: 0.9rem;
`;

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

// Add a new styled component for the Figma export button
const FigmaButton = styled(ActionButton)`
  background-color: #1E1E1E;
  color: white;
  border: 1px solid #2C2C2C;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background-color: #2C2C2C;
  }
`;

const FigmaLogo = styled.div`
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'%3E%3Cpath d='M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z'/%3E%3Cpath d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z'/%3E%3Cpath d='M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z'/%3E%3Cpath d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'/%3E%3Cpath d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;

const ExportModal = ({ 
  onClose, 
  onExport, 
  canvasRef, 
  svgRef, 
  gridDimensions, 
  pixelSize, 
  gridGap, 
  showGrid,
  backgroundColor,
  pixelData,
  rendererType,
  glowEnabled,
  onExportToFigma
}) => {
  const [format, setFormat] = useState('png');
  const [scale, setScale] = useState(1);
  const [padding, setPadding] = useState(glowEnabled ? 20 : 0);
  const [includeGrid, setIncludeGrid] = useState(false);
  const [includeBackground, setIncludeBackground] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [isFigmaExporting, setIsFigmaExporting] = useState(false);
  const canExportToFigma = isRunningInFigma() && onExportToFigma;
  
  const handleExport = () => {
    setIsExporting(true);
    
    onExport({
      format,
      scale: parseInt(scale, 10),
      padding: parseInt(padding, 10),
      includeGrid,
      includeBackground,
      rendererType
    }).finally(() => {
      setIsExporting(false);
      onClose();
    });
  };

  const handleFigmaExport = () => {
    if (!canExportToFigma) return;
    
    setIsFigmaExporting(true);
    
    onExportToFigma({
      scale: parseInt(scale, 10),
      padding: parseInt(padding, 10),
      includeGrid,
      includeBackground
    }).finally(() => {
      setIsFigmaExporting(false);
      onClose();
    });
  };

  // Calculate estimated dimensions
  const imageWidth = Math.ceil(gridDimensions.width * (pixelSize + gridGap) - gridGap);
  const imageHeight = Math.ceil(gridDimensions.height * (pixelSize + gridGap) - gridGap);
  const scaledWidth = Math.ceil(imageWidth * scale);
  const scaledHeight = Math.ceil(imageHeight * scale);
  const finalWidth = scaledWidth + (padding * 2);
  const finalHeight = scaledHeight + (padding * 2);
  
  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Export Artwork</ModalTitle>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>
        
        <ModalContent>
          <FormSection>
            <SectionTitle>Export Format</SectionTitle>
            <FormatOptions>
              <FormatOption 
                $isActive={format === 'png'} 
                onClick={() => setFormat('png')}
              >
                PNG
              </FormatOption>
              <FormatOption 
                $isActive={format === 'jpg'} 
                onClick={() => setFormat('jpg')}
              >
                JPG
              </FormatOption>
              <FormatOption 
                $isActive={format === 'svg'} 
                onClick={() => setFormat('svg')}
                disabled={rendererType !== 'svg'}
              >
                SVG
              </FormatOption>
            </FormatOptions>
            {rendererType !== 'svg' && format === 'svg' ? (
              <div style={{ color: 'var(--error-color)', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '1rem' }}>
                SVG export requires the SVG renderer. Please switch to SVG renderer in the sidebar.
              </div>
            ) : null}
            {format === 'svg' && rendererType === 'svg' && (
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '1rem' }}>
                SVG export will create a vector image preserving all pixel shapes and effects.
              </div>
            )}
            
            {canExportToFigma && (
              <div style={{ 
                backgroundColor: 'rgba(26, 26, 26, 0.1)', 
                padding: '0.75rem',
                borderRadius: '4px',
                marginTop: '1rem',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FigmaLogo style={{ width: '18px', height: '18px' }} />
                <span>
                  Export directly to Figma is available! Each pixel will be created as a rectangle in Figma, letting you further customize your artwork in Figma's design environment.
                </span>
              </div>
            )}
          </FormSection>
          
          <FormSection>
            <SectionTitle>Export Size</SectionTitle>
            <ScaleOptions>
              <ScaleOption $isActive={scale === 1} onClick={() => setScale(1)}>
                1x ({imageWidth}×{imageHeight})
              </ScaleOption>
              <ScaleOption $isActive={scale === 1.5} onClick={() => setScale(1.5)}>
                1.5x ({Math.ceil(imageWidth * 1.5)}×{Math.ceil(imageHeight * 1.5)})
              </ScaleOption>
              <ScaleOption $isActive={scale === 2} onClick={() => setScale(2)}>
                2x ({imageWidth * 2}×{imageHeight * 2})
              </ScaleOption>
              <ScaleOption $isActive={scale === 3} onClick={() => setScale(3)}>
                3x ({imageWidth * 3}×{imageHeight * 3})
              </ScaleOption>
              <ScaleOption $isActive={scale === 4} onClick={() => setScale(4)}>
                4x ({imageWidth * 4}×{imageHeight * 4})
              </ScaleOption>
            </ScaleOptions>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Export Options</SectionTitle>
            
            <SettingsRow>
              <SettingLabel>
                <Switch>
                  <input
                    type="checkbox"
                    checked={includeGrid}
                    onChange={(e) => setIncludeGrid(e.target.checked)}
                  />
                  <span></span>
                </Switch>
                <span>Include Grid Lines</span>
              </SettingLabel>
            </SettingsRow>
            
            <SettingsRow>
              <SettingLabel>
                <Switch>
                  <input
                    type="checkbox"
                    checked={includeBackground}
                    onChange={(e) => setIncludeBackground(e.target.checked)}
                  />
                  <span></span>
                </Switch>
                <span>Include Background Color</span>
              </SettingLabel>
            </SettingsRow>
            
            <SliderRow>
              <SliderLabel>Padding (px)</SliderLabel>
              <RangeInput
                type="range"
                min="0"
                max="100"
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
              />
              <ValueDisplay>{padding}</ValueDisplay>
            </SliderRow>
            
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Final dimensions: {finalWidth}×{finalHeight} pixels
            </div>
          </FormSection>
        </ModalContent>
        
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          
          {canExportToFigma && (
            <FigmaButton 
              onClick={handleFigmaExport} 
              disabled={isFigmaExporting}
            >
              <FigmaLogo />
              {isFigmaExporting ? 'Exporting...' : 'Export to Figma'}
            </FigmaButton>
          )}
          
          <ExportButton onClick={handleExport} disabled={isExporting}>
            {isExporting ? 'Exporting...' : 'Export'}
          </ExportButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ExportModal; 