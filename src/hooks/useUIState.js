import { useState, useCallback } from 'react';

/**
 * Hook for managing UI-related state in the application
 */
export const useUIState = (initialState = {}) => {
  // Default values for UI state
  const defaultState = {
    mode: 'edit', // 'edit' or 'preview'
    showGrid: true,
    rendererType: 'canvas', // 'canvas' or 'svg'
    showPerformanceMonitor: false,
    
    // Modal visibility states
    modals: {
      export: false,
      import: false,
      customShape: false,
      settings: false,
    },
  };

  // Initialize state with defaults merged with any provided initialState
  const [uiState, setUIState] = useState(() => ({
    ...defaultState,
    ...initialState,
  }));

  // Mode state handlers
  const setMode = useCallback((newMode) => {
    if (newMode !== 'edit' && newMode !== 'preview') return;
    
    setUIState(prev => ({
      ...prev,
      mode: newMode,
    }));
  }, []);

  // Toggle grid visibility
  const toggleGrid = useCallback(() => {
    setUIState(prev => ({
      ...prev,
      showGrid: !prev.showGrid,
    }));
  }, []);

  // Set the renderer type
  const setRendererType = useCallback((rendererType) => {
    if (rendererType !== 'canvas' && rendererType !== 'svg') return;
    
    setUIState(prev => ({
      ...prev,
      rendererType,
    }));
  }, []);

  // Toggle performance monitor
  const togglePerformanceMonitor = useCallback(() => {
    setUIState(prev => ({
      ...prev,
      showPerformanceMonitor: !prev.showPerformanceMonitor,
    }));
  }, []);

  // Generic modal visibility toggle
  const toggleModal = useCallback((modalName, isOpen) => {
    if (!uiState.modals.hasOwnProperty(modalName)) return;
    
    setUIState(prev => ({
      ...prev,
      modals: {
        ...prev.modals,
        [modalName]: isOpen !== undefined ? isOpen : !prev.modals[modalName],
      },
    }));
  }, [uiState.modals]);

  // Specific modal toggles for convenience
  const toggleExportModal = useCallback((isOpen) => {
    toggleModal('export', isOpen);
  }, [toggleModal]);

  const toggleImportModal = useCallback((isOpen) => {
    toggleModal('import', isOpen);
  }, [toggleModal]);

  const toggleCustomShapeModal = useCallback((isOpen) => {
    toggleModal('customShape', isOpen);
  }, [toggleModal]);

  const toggleSettingsModal = useCallback((isOpen) => {
    toggleModal('settings', isOpen);
  }, [toggleModal]);

  return {
    // Raw state
    uiState,
    setUIState,
    
    // Derived state properties
    mode: uiState.mode,
    showGrid: uiState.showGrid,
    rendererType: uiState.rendererType,
    showPerformanceMonitor: uiState.showPerformanceMonitor,
    modals: uiState.modals,
    
    // State handlers
    setMode,
    toggleGrid,
    setRendererType,
    togglePerformanceMonitor,
    toggleModal,
    
    // Convenience modal handlers
    toggleExportModal,
    toggleImportModal,
    toggleCustomShapeModal,
    toggleSettingsModal,
  };
}; 