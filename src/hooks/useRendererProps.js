import { useMemo } from 'react';

/**
 * Custom hook to consolidate renderer properties
 * This reduces prop drilling by grouping related renderer properties
 */
export const useRendererProps = ({
  pixelGrid,
  gridWidth,
  gridHeight,
  pixelSize,
  gridGap,
  showGrid,
  mode,
  cornerRadius,
  pixelShape,
  customShape,
  glowEnabled,
  glowColor,
  glowSettings,
  bulbEnabled,
  bulbSettings,
  backgroundColor,
  visibleArea,
}) => {
  // Log received props for debug
  console.log('[useRendererProps] Received: glowEnabled:', glowEnabled, ', glowSettings:', glowSettings);
  console.log('[useRendererProps] Received: bulbEnabled:', bulbEnabled, ', bulbSettings:', bulbSettings);

  // Group common props used by both Canvas and SVG renderers
  const commonProps = useMemo(() => ({
    pixelData: pixelGrid,
    gridWidth,
    gridHeight,
    pixelSize,
    gridGap,
    showGrid,
    cornerRadius,
    pixelShape,
    customShape,
    backgroundColor,
  }), [
    pixelGrid,
    gridWidth,
    gridHeight,
    pixelSize,
    gridGap,
    showGrid,
    cornerRadius,
    pixelShape,
    customShape,
    backgroundColor,
  ]);

  // Group specific props for glow effects
  const effectProps = useMemo(() => {
    const props = {
      glowEnabled,
      glowColor,
      glowSettings: glowSettings,
      bulbEnabled: bulbEnabled ?? false,
      bulbSettings: bulbSettings ?? {},
    };
    console.log('[useRendererProps] Returning effectProps: bulbEnabled:', props.bulbEnabled);
    return props;
  }, [
    glowEnabled,
    glowColor,
    glowSettings,
    bulbEnabled,
    bulbSettings,
  ]);

  // Group SVG-specific props
  const svgProps = useMemo(() => ({
    mode,
    visibleArea,
  }), [
    mode,
    visibleArea,
  ]);

  return {
    commonProps,
    effectProps,
    svgProps,
  };
}; 