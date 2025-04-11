import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faMinus, 
  faUndo, faRedo, 
  // Removed: faPencil, faFill, faEraser, faTableCells, faTableCellsLarge
} from '@fortawesome/free-solid-svg-icons';
import ZoomControls from './ZoomControls'; // Assuming ZoomControls is still separate

// --- Styled Components --- 

const ToolbarContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  background-color: rgba(var(--rgb-bg-secondary), 0.9);
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  pointer-events: all;
  border: 1px solid rgba(var(--rgb-border-color), 0.5);
  backdrop-filter: blur(4px);
`;

const ToolGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background-color: rgba(var(--rgb-bg-primary), 0.5);
  border-radius: 6px;
`;

// Keep ToggleButton styles if used by remaining buttons (Undo/Redo)
const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: transparent; // Different style for toolbar?
  border: 1px solid transparent;
  color: var(--text-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
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
   &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Removed ColorPicker if it's not used elsewhere here

// --- CanvasToolbar Component --- 

const CanvasToolbar = ({ 
  // Keep props needed for remaining controls
  zoomIn, 
  zoomOut, 
  zoomState,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  // Remove props related to moved tools:
  // onToolChange, activeTool, activeColor, onColorChange, onToggleGrid, showGrid
}) => {

  // Remove state related to moved tools (e.g., internal pickerColor state if it existed)

  return (
    <ToolbarContainer>
      {/* Keep Zoom Controls */}
      <ToolGroup>
        <ZoomControls zoomIn={zoomIn} zoomOut={zoomOut} state={zoomState} />
      </ToolGroup>

      {/* --- REMOVED Tool Group (Color Picker, Pencil, Fill, Eraser, Grid) --- */}
      {/* 
      <ToolGroup>
        <ColorPicker ... />
        <ToggleButton ... /> // Pencil
        <ToggleButton ... /> // Fill
        <ToggleButton ... /> // Eraser
        <ToggleButton ... /> // Grid
      </ToolGroup>
      */}

      {/* Keep Undo/Redo Controls */}
      <ToolGroup>
         <ToggleButton onClick={onUndo} disabled={!canUndo} title="Undo">
          <FontAwesomeIcon icon={faUndo} />
        </ToggleButton>
        <ToggleButton onClick={onRedo} disabled={!canRedo} title="Redo">
          <FontAwesomeIcon icon={faRedo} />
        </ToggleButton>
      </ToolGroup>

    </ToolbarContainer>
  );
};

export default CanvasToolbar; 