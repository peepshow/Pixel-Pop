import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = styled.button`
  position: fixed;
  top: 180px;
  right: 330px; /* Always positioned at sidebar edge */
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  border: none;
  border-radius: 4px 0 0 4px;
  width: 35px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  z-index: 1050;
  transition: transform 0.3s ease; /* Transition transform instead of right position */
  transform: ${props => props.$isSidebarOpen ? 'translateX(0)' : 'translateX(330px)'};
  border-left: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  
  &:hover {
    background-color: var(--bg-hover);
  }
  
  @media (max-width: 768px) {
    transform: ${props => props.$isSidebarOpen ? 'translateX(0)' : 'translateX(280px)'};
    right: 280px; /* Fixed width for mobile */
  }
`;

const ButtonText = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin: 0.25rem 0;
`;

const SidebarToggle = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <ToggleButton 
      onClick={toggleSidebar} 
      $isSidebarOpen={isSidebarOpen}
      aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      <FontAwesomeIcon 
        icon={isSidebarOpen ? faChevronRight : faChevronLeft} 
        size="sm"
      />
      <ButtonText>
        {isSidebarOpen ? 'TOOLS' : 'TOOLS'}
      </ButtonText>
    </ToggleButton>
  );
};

export default SidebarToggle; 