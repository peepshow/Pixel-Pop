const Navigation = ({ onUndo, onRedo, onSave, onLoad, canUndo, canRedo, onExport }) => {
  return (
    <Nav>
      <NavGroup>
        <NavButton onClick={onUndo} disabled={!canUndo}>
          <i className="fas fa-undo"></i>
        </NavButton>
        <NavButton onClick={onRedo} disabled={!canRedo}>
          <i className="fas fa-redo"></i>
        </NavButton>
        <NavButton onClick={onSave}>
          <i className="fas fa-save"></i>
        </NavButton>
        <NavButton onClick={onLoad}>
          <i className="fas fa-folder-open"></i>
        </NavButton>
        <NavButton onClick={onExport}>
          <i className="fas fa-download"></i>
        </NavButton>
      </NavGroup>
    </Nav>
  );
}; 