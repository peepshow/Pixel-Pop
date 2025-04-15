import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useRendererProps } from '../useRendererProps';

// Spy on console.log since the hook uses it
vi.spyOn(console, 'log').mockImplementation(() => {});

describe('useRendererProps', () => {
  const mockProps = {
    pixelGrid: [['#FF0000']],
    gridWidth: 10,
    gridHeight: 10,
    pixelSize: 20,
    gridGap: 1,
    showGrid: true,
    mode: 'edit',
    cornerRadius: { enabled: false },
    pixelShape: 'rectangle',
    customShape: { path: '' },
    glowEnabled: true,
    glowColor: '#FFFFFF',
    glowSettings: { size: 10, opacity: 50 },
    bulbEnabled: false,
    bulbSettings: { intensity: 50 },
    backgroundColor: '#F0F0F0',
    visibleArea: { startX: 0, startY: 0, endX: 10, endY: 10 }
  };

  it('should group common props correctly', () => {
    const { result } = renderHook(() => useRendererProps(mockProps));
    
    expect(result.current.commonProps).toEqual({
      pixelData: mockProps.pixelGrid,
      gridWidth: mockProps.gridWidth,
      gridHeight: mockProps.gridHeight,
      pixelSize: mockProps.pixelSize,
      gridGap: mockProps.gridGap,
      showGrid: mockProps.showGrid,
      cornerRadius: mockProps.cornerRadius,
      pixelShape: mockProps.pixelShape,
      customShape: mockProps.customShape,
      backgroundColor: mockProps.backgroundColor
    });
  });

  it('should group effect props correctly', () => {
    const { result } = renderHook(() => useRendererProps(mockProps));
    
    expect(result.current.effectProps).toEqual({
      glowEnabled: mockProps.glowEnabled,
      glowColor: mockProps.glowColor,
      glowSettings: mockProps.glowSettings,
      bulbEnabled: mockProps.bulbEnabled,
      bulbSettings: mockProps.bulbSettings
    });
  });

  it('should group SVG props correctly', () => {
    const { result } = renderHook(() => useRendererProps(mockProps));
    
    expect(result.current.svgProps).toEqual({
      mode: mockProps.mode,
      visibleArea: mockProps.visibleArea
    });
  });

  it('should handle undefined bulb settings gracefully', () => {
    const propsWithoutBulbSettings = {
      ...mockProps,
      bulbEnabled: undefined,
      bulbSettings: undefined
    };
    
    const { result } = renderHook(() => useRendererProps(propsWithoutBulbSettings));
    
    expect(result.current.effectProps.bulbEnabled).toBe(false);
    expect(result.current.effectProps.bulbSettings).toEqual({});
  });

  it('should memoize the return values', () => {
    const { result, rerender } = renderHook(() => useRendererProps(mockProps));
    
    const initialCommonProps = result.current.commonProps;
    const initialEffectProps = result.current.effectProps;
    const initialSvgProps = result.current.svgProps;
    
    // Rerender with the same props
    rerender();
    
    // Check if the references are the same (memoization working)
    expect(result.current.commonProps).toBe(initialCommonProps);
    expect(result.current.effectProps).toBe(initialEffectProps);
    expect(result.current.svgProps).toBe(initialSvgProps);
  });

  it('should update when relevant props change', () => {
    const { result, rerender } = renderHook(props => useRendererProps(props), { 
      initialProps: mockProps 
    });
    
    const initialCommonProps = result.current.commonProps;
    
    // Rerender with different gridWidth
    rerender({
      ...mockProps,
      gridWidth: 20
    });
    
    // Check if commonProps is a new reference (it should be)
    expect(result.current.commonProps).not.toBe(initialCommonProps);
    expect(result.current.commonProps.gridWidth).toBe(20);
  });
}); 