import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToolState } from '../useToolState';

describe('useToolState', () => {
  let result;

  beforeEach(() => {
    // Render the hook before each test
    const rendered = renderHook(() => useToolState());
    result = rendered.result;
  });

  it('initializes with default values', () => {
    expect(result.current.activeTool).toBe('pencil');
    expect(result.current.activeColor).toBe('rgba(255, 0, 0, 1)');
    expect(result.current.pickerColor).toBe('rgba(255, 0, 0, 1)');
    expect(Array.isArray(result.current.colorHistory)).toBe(true);
    expect(result.current.colorHistory.length).toBe(1);
    expect(result.current.colorHistory[0]).toBe('rgba(255, 0, 0, 1)');
  });

  it('updates active color when selected', () => {
    act(() => {
      result.current.selectColor('#FF0000');
    });
    
    expect(result.current.activeColor).toBe('#FF0000');
    expect(result.current.pickerColor).toBe('#FF0000');
    expect(result.current.colorHistory[0]).toBe('#FF0000');
  });

  it('updates picker color and active color simultaneously', () => {
    act(() => {
      result.current.updatePickerColor('#00FF00');
    });
    
    expect(result.current.pickerColor).toBe('#00FF00');
    expect(result.current.activeColor).toBe('#00FF00');
    expect(result.current.activeColorRef.current).toBe('#00FF00');
  });

  it('updates active tool', () => {
    act(() => {
      result.current.setActiveTool('eraser');
    });
    
    expect(result.current.activeTool).toBe('eraser');
  });
  
  it('adds colors to history and handles duplicates', () => {
    // Initially we have 'rgba(255, 0, 0, 1)' in the history
    
    // Adding a new color should add to history
    act(() => {
      result.current.selectColor('#00FF00');
    });
    
    expect(result.current.colorHistory.length).toBe(2);
    expect(result.current.colorHistory[0]).toBe('#00FF00');
    expect(result.current.colorHistory[1]).toBe('rgba(255, 0, 0, 1)');
    
    // If we select an existing color, it should move to the front
    act(() => {
      result.current.selectColor('rgba(255, 0, 0, 1)');
    });
    
    expect(result.current.colorHistory.length).toBe(2);
    expect(result.current.colorHistory[0]).toBe('rgba(255, 0, 0, 1)');
    expect(result.current.colorHistory[1]).toBe('#00FF00');
  });

  it('ignores null or undefined color values', () => {
    const initialColor = result.current.activeColor;
    
    act(() => {
      result.current.selectColor(null);
    });
    
    expect(result.current.activeColor).toBe(initialColor);
    
    act(() => {
      result.current.updatePickerColor(undefined);
    });
    
    expect(result.current.pickerColor).toBe(initialColor);
  });
}); 