import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ControlsContainer = styled.div`
  position: absolute;
  /* These positioning values assume the container is placed directly */
  /* relative to the element holding the CanvasRenderer. */
  /* We might adjust this in App.jsx later */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; /* Allow clicks to pass through the container */
  z-index: 500; 
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  gap: 4px;
  pointer-events: all; /* Enable clicks on the buttons themselves */
  background-color: rgba(var(--rgb-bg-secondary), 0.8); 
  padding: 4px;
  border-radius: 4px;
  border: 1px solid rgba(var(--rgb-border-color), 0.5);
  backdrop-filter: blur(2px);
  /* Remove general centering transform */
`;

// Position relative to container edges
const TopControls = styled(ButtonGroup)`
  top: 5px; /* Small offset from the top edge */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  flex-direction: row;
`;

const BottomControls = styled(ButtonGroup)`
  bottom: 5px; /* Small offset from the bottom edge */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  flex-direction: row;
`;

const LeftControls = styled(ButtonGroup)`
  top: 50%;
  left: 5px; /* Small offset from the left edge */
  transform: translateY(-50%); /* Center vertically */
  flex-direction: column;
`;

const RightControls = styled(ButtonGroup)`
  top: 50%;
  right: 5px; /* Small offset from the right edge */
  transform: translateY(-50%); /* Center vertically */
  flex-direction: column;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--accent-color);
    color: var(--bg-primary);
    border-color: var(--accent-color);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    cursor: not-allowed;
    opacity: ${props => props.disabledBecauseDrawn ? 0.6 : 0.8};
  }
`;

const GridEdgeControls = ({ 
  addRowTop, 
  removeRowTop, 
  addRowBottom,
  removeRowBottom,
  addColLeft,
  removeColLeft,
  addColRight,
  removeColRight,
  hasDrawn,
  gridWidth,
  gridHeight
}) => {

  const disableRemoveRow = gridHeight <= 1;
  const disableRemoveCol = gridWidth <= 1;
  
  const minSizeDisabledTitle = "Cannot remove the last row/column";

  return (
    <ControlsContainer>
      <TopControls>
        <ControlButton onClick={addRowTop} title={"Add Row Above"}>
          <FontAwesomeIcon icon={faPlus} />
        </ControlButton>
        <ControlButton onClick={removeRowTop} disabled={disableRemoveRow} title={disableRemoveRow ? minSizeDisabledTitle : "Remove Top Row"}>
          <FontAwesomeIcon icon={faMinus} />
        </ControlButton>
      </TopControls>

      <BottomControls>
        <ControlButton onClick={addRowBottom} title={"Add Row Below"}>
          <FontAwesomeIcon icon={faPlus} />
        </ControlButton>
        <ControlButton onClick={removeRowBottom} disabled={disableRemoveRow} title={disableRemoveRow ? minSizeDisabledTitle : "Remove Bottom Row"}>
          <FontAwesomeIcon icon={faMinus} />
        </ControlButton>
      </BottomControls>

      <LeftControls>
        <ControlButton onClick={addColLeft} title={"Add Column Left"}>
          <FontAwesomeIcon icon={faPlus} />
        </ControlButton>
        <ControlButton onClick={removeColLeft} disabled={disableRemoveCol} title={disableRemoveCol ? minSizeDisabledTitle : "Remove Left Column"}>
          <FontAwesomeIcon icon={faMinus} />
        </ControlButton>
      </LeftControls>

      <RightControls>
        <ControlButton onClick={addColRight} title={"Add Column Right"}>
          <FontAwesomeIcon icon={faPlus} />
        </ControlButton>
        <ControlButton onClick={removeColRight} disabled={disableRemoveCol} title={disableRemoveCol ? minSizeDisabledTitle : "Remove Right Column"}>
          <FontAwesomeIcon icon={faMinus} />
        </ControlButton>
      </RightControls>
    </ControlsContainer>
  );
};

export default GridEdgeControls;
