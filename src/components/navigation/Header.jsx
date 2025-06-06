import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import pixelPopLogo from '../../assets/PixelPop_logo.svg';
import MobileMenu from './MobileMenu';

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
  
  @media (max-width: 768px) {
    width: 150px; /* Smaller width on mobile */
    font-size: 0.9rem;
    padding: 0.4rem 0.5rem;
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 3px var(--accent-color));
  }
  
  @media (max-width: 768px) {
    height: 40px; /* Slightly smaller logo on mobile */
  }
`;

const DesktopNav = styled.div`
  @media (max-width: 768px) {
    display: none; /* Hide desktop nav on mobile */
  }
`;

const Header = ({ filename, onFilenameChange, titleElement, navMenuElement }) => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <LogoWrapper>
          <LogoLink href="/" title="PixelPop Home">
            <Logo src={pixelPopLogo} alt="PixelPop Logo" />
          </LogoLink>
        </LogoWrapper>
      </HeaderSection>
      <HeaderSection>
        <FilenameInput
          type="text"
          value={filename}
          onChange={(e) => onFilenameChange(e.target.value)}
          placeholder="Enter filename"
        />
      </HeaderSection>
      <HeaderSection>
        {/* Desktop navigation */}
        <DesktopNav>
          {navMenuElement}
        </DesktopNav>
        
        {/* Mobile navigation */}
        <MobileMenu>
          {navMenuElement}
        </MobileMenu>
      </HeaderSection>
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