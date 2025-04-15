import { useState, useCallback, useRef, useEffect } from 'react';

const MAX_HISTORY_LENGTH = 256; // Same as in App.jsx

export const useToolState = (initialColor = 'rgba(230, 2, 123, 1)') => {
  const [activeTool, setActiveTool] = useState('pencil');
  const [activeColor, setActiveColorState] = useState(initialColor);
  const activeColorRef = useRef(initialColor); // Ref for synchronous access
  const [pickerColor, setPickerColor] = useState(initialColor);
  const [colorHistory, setColorHistory] = useState([initialColor]);
  
  // Force update ref whenever state changes
  useEffect(() => {
    activeColorRef.current = activeColor;
  }, [activeColor]);

  // Callback to handle selecting a color (from history or picker blur)
  const selectColor = useCallback((newColor) => {
    if (!newColor) return; // Prevent setting null/undefined color
    
    setActiveColorState(newColor);
    activeColorRef.current = newColor; // Update ref synchronously
    setPickerColor(newColor); // Keep picker in sync

    setColorHistory(prevHistory => {
      // Remove the new color if it already exists to move it to the front
      const filteredHistory = prevHistory.filter(color => color !== newColor);
      // Add the new color to the front
      const updatedHistory = [newColor, ...filteredHistory];
      // Limit history length
      return updatedHistory.slice(0, MAX_HISTORY_LENGTH);
    });
  }, []);

  // Callback specifically for the picker input change - IMMEDIATELY apply color
  const updatePickerColor = useCallback((newColor) => {
    if (!newColor) return;
    setPickerColor(newColor);
    // Immediately apply the color when picker changes
    setActiveColorState(newColor);
    activeColorRef.current = newColor;
  }, []);

  return {
    activeTool,
    setActiveTool,
    activeColor, // Keep state for potential non-critical reads
    activeColorRef, // Expose the ref
    pickerColor,
    updatePickerColor, // For picker onChange
    selectColor,       // For picker onBlur and history clicks
    colorHistory,
    setColorHistory,   // Keep direct setter if needed for loading projects
  };
}; 