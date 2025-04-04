import React, { useState, useRef, useEffect } from 'react';
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

const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  overflow: hidden;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: auto;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const NumberInput = styled.input`
  width: 80px;
  padding: 0.25rem 0.5rem;
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

const ImageCropModal = ({ imageUrl, onCrop, onClose, gridDimensions }) => {
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [imgSrc, setImgSrc] = useState(null);
  const imgRef = useRef(null);
  const [colorLimit, setColorLimit] = useState(32);
  const aspectRatio = gridDimensions.width / gridDimensions.height;

  useEffect(() => {
    if (imageUrl) {
      setImgSrc(imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (imgRef.current && imgSrc) {
      const { width, height } = imgRef.current;
      const crop = centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 90,
            height: 90,
          },
          aspectRatio,
          width,
          height
        ),
        width,
        height
      );
      setCrop(crop);
    }
  }, [imgSrc, aspectRatio]);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidth = width * 0.9;
    const cropHeight = cropWidth / aspectRatio;

    setCrop({
      unit: 'px',
      x: (width - cropWidth) / 2,
      y: (height - cropHeight) / 2,
      width: cropWidth,
      height: cropHeight
    });
  };

  const getCroppedImg = () => {
    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    // First, crop the image
    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );

    // Then, create a new canvas for the final pixelated version
    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = gridDimensions.width;
    finalCanvas.height = gridDimensions.height;
    const finalCtx = finalCanvas.getContext('2d');

    // Use imageSmoothingEnabled = false for pixelated scaling
    finalCtx.imageSmoothingEnabled = false;
    finalCtx.drawImage(canvas, 0, 0, gridDimensions.width, gridDimensions.height);

    return finalCanvas;
  };

  const handleCrop = () => {
    if (completedCrop) {
      const canvas = getCroppedImg();
      onCrop(canvas, colorLimit);
    }
  };

  const handleColorLimitChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setColorLimit(value);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <h2>Crop Image</h2>
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
                style={{ maxWidth: '100%', maxHeight: '70vh' }}
              />
            </ReactCrop>
          )}
        </ImageContainer>
        <Controls>
          <ControlGroup>
            <Label htmlFor="colorLimit">Max Colors:</Label>
            <NumberInput
              type="number"
              id="colorLimit"
              value={colorLimit}
              onChange={handleColorLimitChange}
              min="2"
              max="256"
            />
          </ControlGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button 
            $isPrimary
            onClick={handleCrop}
            disabled={!completedCrop}
          >
            Import
          </Button>
        </Controls>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageCropModal; 