import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  max-width: 90vw;
  width: 700px;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const SettingsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SettingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
`;

const NumberInput = styled.input`
  width: 70px;
  padding: 0.4rem 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.$isPrimary ? '#4CAF50' : '#666'};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.$isPrimary ? '#45a049' : '#555'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ImageCropModal = ({ imageUrl, onClose, onImport, importSettings, onSettingsChange }) => {
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const imgRef = useRef(null);

  const aspectRatio = useMemo(() => {
    const width = parseInt(importSettings?.width, 10);
    const height = parseInt(importSettings?.height, 10);
    if (width > 0 && height > 0) {
      return width / height;
    }
    return undefined;
  }, [importSettings?.width, importSettings?.height]);

  const onImageLoad = useCallback((e) => {
    const { width, height } = e.currentTarget;
    if (aspectRatio) {
      setCrop(centerCrop(
        makeAspectCrop(
          { unit: '%', width: 90 },
          aspectRatio,
          width,
          height,
        ),
        width,
        height,
      ));
    } else {
      setCrop({
        unit: '%',
        x: 10,
        y: 10,
        width: 80,
        height: 80
      });
    }
  }, [aspectRatio]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.naturalWidth > 0 && aspectRatio) {
      const { naturalWidth: imgWidth, naturalHeight: imgHeight } = imgRef.current;
  
      let finalCropWidthPx;
      let finalCropHeightPx;

      const widthIfMaxHeight = imgHeight * aspectRatio;

      if (widthIfMaxHeight <= imgWidth) {
        finalCropWidthPx = widthIfMaxHeight;
        finalCropHeightPx = imgHeight;
      } else {
        finalCropWidthPx = imgWidth;
        finalCropHeightPx = imgWidth / aspectRatio;
      }

      const newPixelCrop = {
        unit: 'px',
        x: (imgWidth - finalCropWidthPx) / 2,
        y: (imgHeight - finalCropHeightPx) / 2,
        width: finalCropWidthPx,
        height: finalCropHeightPx,
      };

      const newPercentCrop = {
        unit: '%',
        x: (newPixelCrop.x / imgWidth) * 100,
        y: (newPixelCrop.y / imgHeight) * 100,
        width: (newPixelCrop.width / imgWidth) * 100,
        height: (newPixelCrop.height / imgHeight) * 100,
      };
  
      const tolerance = 0.1;
      if (
        !crop ||
        crop.unit !== newPercentCrop.unit ||
        Math.abs((crop.width ?? 0) - newPercentCrop.width) > tolerance ||
        Math.abs((crop.height ?? 0) - newPercentCrop.height) > tolerance ||
        Math.abs((crop.x ?? 0) - newPercentCrop.x) > tolerance ||
        Math.abs((crop.y ?? 0) - newPercentCrop.y) > tolerance
      ) {
        setCrop(newPercentCrop);
      }
    }
  }, [aspectRatio, imgRef.current]);

  const getCroppedDataUrl = useCallback(() => {
    const image = imgRef.current;
    if (!image || !completedCrop || !completedCrop.width || !completedCrop.height) {
      console.error("Cannot crop: Image or crop dimensions invalid.", { image, completedCrop });
      return null;
    }
  
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    canvas.width = Math.round(completedCrop.width * scaleX);
    canvas.height = Math.round(completedCrop.height * scaleY);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error("Failed to get canvas context.");
      return null;
    }
    
    const pixelRatio = window.devicePixelRatio || 1;
    
    const sourceX = Math.round(completedCrop.x * scaleX);
    const sourceY = Math.round(completedCrop.y * scaleY);
    const sourceWidth = Math.round(completedCrop.width * scaleX);
    const sourceHeight = Math.round(completedCrop.height * scaleY);
    const destWidth = canvas.width;
    const destHeight = canvas.height;

    ctx.imageSmoothingQuality = 'high';

    try {
        ctx.drawImage(
            image,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            0,
            0,
            destWidth,
            destHeight
        );
        return canvas.toDataURL('image/png');
    } catch (e) {
        console.error("Error drawing cropped image:", e);
        return null;
    }
  }, [imgRef, completedCrop]);

  const handleApplyClick = useCallback(() => {
    const croppedDataUrl = getCroppedDataUrl();
    if (croppedDataUrl && onImport) {
      onImport(croppedDataUrl, importSettings);
    } else {
      console.error("Failed to get cropped image data URL.");
    }
  }, [getCroppedDataUrl, onImport, importSettings]);

  const handleSettingChange = useCallback((e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue) && intValue >= 1) {
      onSettingsChange(prev => ({
        ...prev,
        [name]: intValue,
      }));
    } else if (value === '') {
      onSettingsChange(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  }, [onSettingsChange]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <Header>
          <Title>Import Image</Title>
          <CloseButton onClick={onClose} aria-label="Close">
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </Header>

        <SettingsContainer>
          <SettingGroup>
            <Label htmlFor="importWidth">Width (px):</Label>
            <NumberInput
              type="number"
              id="importWidth"
              name="width"
              value={importSettings?.width || ''}
              onChange={handleSettingChange}
              min="1"
              placeholder="e.g. 32"
            />
          </SettingGroup>
          <SettingGroup>
            <Label htmlFor="importHeight">Height (px):</Label>
            <NumberInput
              type="number"
              id="importHeight"
              name="height"
              value={importSettings?.height || ''}
              onChange={handleSettingChange}
              min="1"
              placeholder="e.g. 32"
            />
          </SettingGroup>
          <SettingGroup>
            <Label htmlFor="maxColors">Max Colors:</Label>
            <NumberInput
              type="number"
              id="maxColors"
              name="maxColors"
              value={importSettings?.maxColors || ''}
              onChange={handleSettingChange}
              min="2"
              max="256"
              placeholder="e.g. 32"
            />
          </SettingGroup>
        </SettingsContainer>

        <ImageContainer>
          {imgSrc && (
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspectRatio}
              className="crop-area"
            >
              <img
                ref={imgRef}
                src={imgSrc}
                alt="Crop preview"
                onLoad={onImageLoad}
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(90vh - 150px)',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </ReactCrop>
          )}
          {!imgSrc && <div>Loading image...</div>}
        </ImageContainer>

        <Controls>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            $isPrimary
            onClick={handleApplyClick}
            disabled={!completedCrop || !completedCrop.width || !completedCrop.height || !imgSrc}
          >
            Import
          </Button>
        </Controls>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageCropModal; 