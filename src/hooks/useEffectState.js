import { useState, useCallback } from 'react';

/**
 * Hook for managing pixel visual effects state
 * Designed to be extensible for adding new effects in the future
 */
export const useEffectState = (initialState = {}) => {
  // Default values for effects
  const defaultEffects = {
    // Corner radius effect
    cornerRadius: {
      enabled: false,
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0,
    },
    // Glow effect
    glow: {
      enabled: false,
      settings: {
        size: 10,
        opacity: 25,
        spread: 10,
        offsetX: 0,
        offsetY: 0,
        blendMode: 'screen'
      }
    },
    // Bulb effect
    bulb: {
      enabled: false,
      settings: {
        intensity: 50,
        radius: 50,
        positionX: 25,
        positionY: 25,
        color: '#ffffff',
        blendMode: 'screen',
      }
    },
    // Shape settings
    pixelShape: {
      type: 'rectangle',
      customShape: {
        path: '',
        viewBox: '0 0 100 100'
      }
    },
  };

  // Initialize state with defaults merged with any provided initialState
  const [effects, setEffects] = useState(() => ({
    ...defaultEffects,
    ...initialState,
  }));

  /**
   * Toggle an effect on/off
   */
  const toggleEffect = useCallback((effectName, enabled) => {
    setEffects(prevEffects => {
      if (!prevEffects[effectName]) {
        console.log(`[useEffectState] Error: Cannot toggle - effect "${effectName}" doesn't exist`);
        return prevEffects; // Effect doesn't exist, return previous state
      }

      console.log(`[useEffectState] Toggling ${effectName}. Current enabled: ${prevEffects[effectName]?.enabled}. Requested enabled: ${enabled}`);
      
      const isEnabled = enabled !== undefined ? enabled : !prevEffects[effectName].enabled;
      
      const updated = {
        ...prevEffects,
        [effectName]: {
          ...prevEffects[effectName],
          enabled: isEnabled,
        },
      };
      
      console.log(`[useEffectState] ${effectName} is now ${isEnabled ? 'enabled' : 'disabled'}`);
      return updated;
    });
  }, []);

  /**
   * Update settings for an effect
   */
  const updateEffectSettings = useCallback((effectName, newSettings) => {
    setEffects(prevEffects => {
      if (!prevEffects[effectName]) {
        console.log(`[useEffectState] Error: Effect "${effectName}" doesn't exist`);
        return prevEffects; // Effect doesn't exist, return previous state
      }

      console.log(`[useEffectState] Updating ${effectName} with:`, newSettings);
      
      // Handle corner radius which has settings directly in the effect object
      if (effectName === 'cornerRadius') {
        const updated = {
          ...prevEffects,
          [effectName]: {
            ...prevEffects[effectName],
            ...newSettings,
          },
        };
        console.log(`[useEffectState] Updated cornerRadius:`, updated[effectName]);
        return updated;
      }

      // Handle other effects that have a settings sub-object
      const updated = {
        ...prevEffects,
        [effectName]: {
          ...prevEffects[effectName],
          settings: {
            ...prevEffects[effectName].settings,
            ...newSettings,
          },
        },
      };
      console.log(`[useEffectState] Updated ${effectName} settings:`, updated[effectName].settings);
      return updated;
    });
  }, []);

  /**
   * Update the pixel shape type
   */
  const setPixelShape = useCallback((shapeType) => {
    setEffects(prevEffects => ({
      ...prevEffects,
      pixelShape: {
        ...prevEffects.pixelShape,
        type: shapeType,
      },
    }));
  }, []);

  /**
   * Update the custom shape definition
   */
  const setCustomShape = useCallback((customShape) => {
    setEffects(prevEffects => ({
      ...prevEffects,
      pixelShape: {
        ...prevEffects.pixelShape,
        customShape: {
          ...prevEffects.pixelShape.customShape,
          ...customShape,
        },
      },
    }));
  }, []);

  /**
   * Register a new effect (for future extensibility)
   */
  const registerEffect = useCallback((effectName, defaultSettings) => {
    if (effects[effectName]) return; // Effect already exists

    setEffects(prevEffects => ({
      ...prevEffects,
      [effectName]: defaultSettings,
    }));
  }, [effects]);

  // For backward compatibility with current app state
  const cornerRadius = effects.cornerRadius;
  const glowEnabled = effects.glow.enabled;
  const glowSettings = effects.glow.settings;
  const bulbEnabled = effects.bulb.enabled;
  const bulbSettings = effects.bulb.settings;
  const pixelShape = effects.pixelShape.type;
  const customShape = effects.pixelShape.customShape;

  // Backward compatibility setters
  const setCornerRadius = useCallback((newValues) => {
    updateEffectSettings('cornerRadius', newValues);
  }, [updateEffectSettings]);

  const setGlowEnabled = useCallback((enabled) => {
    toggleEffect('glow', enabled);
  }, [toggleEffect]);

  const setGlowSettings = useCallback((newSettings) => {
    updateEffectSettings('glow', newSettings);
  }, [updateEffectSettings]);

  const setBulbEnabled = useCallback((enabled) => {
    toggleEffect('bulb', enabled);
  }, [toggleEffect]);

  const setBulbSettings = useCallback((newSettings) => {
    updateEffectSettings('bulb', newSettings);
  }, [updateEffectSettings]);

  return {
    // New API
    effects,
    toggleEffect,
    updateEffectSettings,
    setPixelShape,
    setCustomShape,
    registerEffect,

    // Backward compatibility API (for transitioning period)
    cornerRadius,
    setCornerRadius,
    glowEnabled,
    setGlowEnabled,
    glowSettings,
    setGlowSettings,
    bulbEnabled,
    setBulbEnabled,
    bulbSettings,
    setBulbSettings,
    pixelShape,
    customShape,
  };
}; // <<< End of hook function
