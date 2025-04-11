import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from '../ui/Button';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
  resize: vertical;
  background-color: #f5f5f5;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const PreviewTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

const ViewBoxInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

const SVGPreview = styled.svg`
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
`;

/**
 * Modal for custom SVG shape input and preview
 */
const CustomShapeModal = ({ onClose, onApply, currentPath = '', currentViewBox = '0 0 100 100' }) => {
  const [path, setPath] = useState(currentPath);
  const [viewBox, setViewBox] = useState(currentViewBox);
  const [error, setError] = useState('');
  
  // Validate SVG path on change
  useEffect(() => {
    try {
      // Simple validation - check if it's a valid SVG path
      if (path.trim() && !path.includes('<') && !path.includes('>')) {
        // Create a temporary SVG element to test the path
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        const pathElement = document.createElementNS(svgNS, "path");
        
        pathElement.setAttribute("d", path);
        svg.appendChild(pathElement);
        
        setError('');
      } else if (path.trim()) {
        setError('Please enter a valid SVG path (d attribute)');
      }
    } catch (err) {
      setError('Invalid SVG path: ' + err.message);
    }
  }, [path]);
  
  // Handle view box change
  const handleViewBoxChange = (e) => {
    setViewBox(e.target.value);
  };
  
  // Handle path change
  const handlePathChange = (e) => {
    setPath(e.target.value);
  };
  
  // Handle apply button click
  const handleApply = () => {
    if (!error && path.trim()) {
      onApply(path, viewBox);
      onClose();
    }
  };
  
  return (
    <Modal title="Custom SVG Shape" onClose={onClose}>
      <ModalContent>
        <InputContainer>
          <label htmlFor="svg-path">SVG Path (d attribute)</label>
          <TextAreaWrapper>
            <StyledTextArea
              id="svg-path"
              value={path}
              onChange={handlePathChange}
              placeholder="Enter SVG path data (d attribute)
Example: M50,0 L100,100 L0,100 Z"
            />
          </TextAreaWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="view-box">View Box</label>
          <ViewBoxInput
            id="view-box"
            value={viewBox}
            onChange={handleViewBoxChange}
            placeholder="0 0 100 100"
          />
        </InputContainer>
        
        <PreviewContainer>
          <PreviewTitle>Preview</PreviewTitle>
          <PreviewWrapper>
            {path && !error ? (
              <SVGPreview viewBox={viewBox}>
                <path d={path} fill="#333" />
              </SVGPreview>
            ) : (
              <div>Enter a valid SVG path to see preview</div>
            )}
          </PreviewWrapper>
        </PreviewContainer>
        
        <ButtonContainer>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button 
            variant="primary" 
            onClick={handleApply}
            disabled={!!error || !path.trim()}
          >
            Apply Shape
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export default CustomShapeModal; 