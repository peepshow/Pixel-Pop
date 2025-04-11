import { useState, useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook for managing history state with undo/redo functionality
 * @param {Object} options - Configuration options
 * @param {Object} options.initialState - Initial state to start with
 * @param {Function} options.onChange - Callback when current state changes due to undo/redo
 * @param {number} options.maxHistory - Maximum number of history entries to keep
 */
export const useHistoryState = ({
  initialState = null,
  onChange = () => {},
  maxHistory = 100
} = {}) => {
  // History array and pointer
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isInitializedRef = useRef(false);
  
  // Initialize history with initial state if provided
  useEffect(() => {
    if (initialState && !isInitializedRef.current) {
      setHistory([{ state: initialState, type: 'initial' }]);
      setCurrentIndex(0);
      isInitializedRef.current = true;
    }
  }, [initialState]);

  // Check if we can undo/redo
  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  /**
   * Add a new history entry
   * @param {Object} state - New state to add to history
   * @param {string} actionType - Type of action that caused this state
   */
  const pushHistory = useCallback((state, actionType) => {
    if (!state) return;
    
    setHistory(prevHistory => {
      // Remove any redo states
      const newHistory = prevHistory.slice(0, currentIndex + 1);
      
      // Add new state
      const updatedHistory = [
        ...newHistory, 
        { state, type: actionType || 'unknown' }
      ];
      
      // Limit history length
      if (updatedHistory.length > maxHistory) {
        return updatedHistory.slice(updatedHistory.length - maxHistory);
      }
      
      return updatedHistory;
    });
    
    setCurrentIndex(prevIndex => {
      const newIndex = Math.min(prevIndex + 1, maxHistory - 1);
      return newIndex;
    });
  }, [currentIndex, maxHistory]);

  /**
   * Undo to previous state
   */
  const undo = useCallback(() => {
    if (!canUndo) return;
    
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    
    // Call onChange with the previous state
    const previousState = history[newIndex].state;
    onChange(previousState, 'undo');
  }, [canUndo, currentIndex, history, onChange]);

  /**
   * Redo to next state
   */
  const redo = useCallback(() => {
    if (!canRedo) return;
    
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    
    // Call onChange with the next state
    const nextState = history[newIndex].state;
    onChange(nextState, 'redo');
  }, [canRedo, currentIndex, history, onChange]);

  /**
   * Get current state from history
   */
  const getCurrentState = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < history.length) {
      return history[currentIndex].state;
    }
    return null;
  }, [history, currentIndex]);

  /**
   * Clear history
   */
  const clearHistory = useCallback(() => {
    setHistory([]);
    setCurrentIndex(-1);
    isInitializedRef.current = false;
  }, []);

  /**
   * Replace the entire history with a new history
   */
  const replaceHistory = useCallback((newHistory, newIndex = 0) => {
    setHistory(newHistory);
    setCurrentIndex(newIndex);
    isInitializedRef.current = true;
    
    // Call onChange with the current state from new history
    if (newHistory.length > 0 && newIndex >= 0 && newIndex < newHistory.length) {
      onChange(newHistory[newIndex].state, 'replace');
    }
  }, [onChange]);

  return {
    history,
    currentIndex,
    isInitialized: isInitializedRef.current,
    canUndo,
    canRedo,
    pushHistory,
    undo,
    redo,
    getCurrentState,
    clearHistory,
    replaceHistory
  };
}; 