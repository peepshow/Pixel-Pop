import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Define styled components for the Header here
const HeaderWrapper = styled.header`
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* Fixed height for header */
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100; /* Ensure header is above sidebar */
`;

const FilenameInput = styled.input`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  width: 300px; /* Fixed width */
  text-align: center;
  margin: 0 auto; /* Center the input */
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const HeaderSection = styled.div`
  flex: 1; /* Allows sections to take space */
  display: flex;
  align-items: center; /* Vertically center items like Title and NavMenu */
  justify-content: center; /* Center filename input */
  &:first-child {
    justify-content: flex-start; /* Align Title to the left */
  }
  &:last-child {
    justify-content: flex-end; /* Align NavMenu to the right */
  }
`;

const Header = ({ filename, onFilenameChange, titleElement, navMenuElement }) => {
  return (
    <HeaderWrapper>
      <HeaderSection>{titleElement}</HeaderSection>
      <HeaderSection>
        <FilenameInput
          type="text"
          value={filename}
          onChange={(e) => onFilenameChange(e.target.value)}
          placeholder="Enter filename"
        />
      </HeaderSection>
      <HeaderSection>{navMenuElement}</HeaderSection>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  filename: PropTypes.string.isRequired,
  onFilenameChange: PropTypes.func.isRequired,
  titleElement: PropTypes.node.isRequired, // Expecting a title component
  navMenuElement: PropTypes.node.isRequired, // Expecting a nav menu component
};

export default Header; 