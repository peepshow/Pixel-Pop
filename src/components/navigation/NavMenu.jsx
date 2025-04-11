import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport, faFolderOpen, faDownload } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: var(--button-text);
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-hover);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const NavMenu = ({ onImportImage, onSaveProject, onLoadProject, onExport }) => {
  const fileInputRef = useRef(null);
  const loadProjectInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleLoadClick = () => {
    loadProjectInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onImportImage(file);
    }
  };

  const handleLoadProjectChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onLoadProject(file);
    }
    // Reset the input so the same file can be loaded again
    event.target.value = '';
  };

  return (
    <NavContainer>
      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <FileInput
        ref={loadProjectInputRef}
        type="file"
        accept=".json"
        onChange={handleLoadProjectChange}
      />
      <NavButton onClick={handleImportClick}>
        <FontAwesomeIcon icon={faFileImport} />
        Import Image
      </NavButton>
      <NavButton onClick={handleLoadClick}>
        <FontAwesomeIcon icon={faFolderOpen} />
        Load Project
      </NavButton>
      <NavButton onClick={onSaveProject}>
        <FontAwesomeIcon icon={faFileExport} />
        Save Project
      </NavButton>
      <NavButton onClick={onExport}>
        <FontAwesomeIcon icon={faDownload} />
        Export
      </NavButton>
    </NavContainer>
  );
};

export default NavMenu; 