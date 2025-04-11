import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ControlsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ZoomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--border-color);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ZoomLevel = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 14px;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  min-width: 80px;
  justify-content: center;
`;

const ZoomControls = ({ zoomIn, zoomOut, state }) => {
  const zoomPercent = state?.scale ? Math.round(state.scale * 100) : 100;

  return (
    <ControlsContainer>
      <ZoomButton onClick={() => zoomOut()}>
        <FontAwesomeIcon icon={faMinus} />
      </ZoomButton>
      <ZoomLevel>{zoomPercent}%</ZoomLevel>
      <ZoomButton onClick={() => zoomIn()}>
        <FontAwesomeIcon icon={faPlus} />
      </ZoomButton>
    </ControlsContainer>
  );
};

export default ZoomControls; 