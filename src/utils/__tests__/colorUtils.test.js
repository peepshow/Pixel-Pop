import { describe, it, expect } from 'vitest';
import { 
  hexToRgba, 
  rgbaToHex, 
  getRgbaOpacity,
  updateRgbaOpacity 
} from '../colorUtils';

describe('colorUtils', () => {
  // Test hexToRgba
  describe('hexToRgba', () => {
    it('converts a 6-digit hex to rgba', () => {
      expect(hexToRgba('#FF5733')).toBe('rgba(255, 87, 51, 1)');
    });

    it('converts a 3-digit hex to rgba', () => {
      expect(hexToRgba('#F00')).toBe('rgba(255, 0, 0, 1)');
    });

    it('handles hex without # prefix', () => {
      expect(hexToRgba('00FF00')).toBe('rgba(0, 255, 0, 1)');
    });

    it('applies custom alpha value', () => {
      expect(hexToRgba('#0000FF', 0.5)).toBe('rgba(0, 0, 255, 0.5)');
    });

    it('clamps alpha values to 0-1 range', () => {
      expect(hexToRgba('#000000', 1.5)).toBe('rgba(0, 0, 0, 1)');
      expect(hexToRgba('#000000', -0.5)).toBe('rgba(0, 0, 0, 0)');
    });
  });

  // Test rgbaToHex
  describe('rgbaToHex', () => {
    it('converts rgba to hex', () => {
      expect(rgbaToHex('rgba(255, 87, 51, 1)')).toBe('#ff5733');
    });

    it('converts rgb to hex', () => {
      expect(rgbaToHex('rgb(0, 255, 0)')).toBe('#00ff00');
    });

    it('ignores alpha channel in conversion', () => {
      expect(rgbaToHex('rgba(0, 0, 255, 0.5)')).toBe('#0000ff');
    });

    it('returns #000000 for invalid inputs', () => {
      expect(rgbaToHex('not-a-color')).toBe('#000000');
    });
  });

  // Test getRgbaOpacity
  describe('getRgbaOpacity', () => {
    it('extracts opacity from rgba string', () => {
      expect(getRgbaOpacity('rgba(255, 0, 0, 0.5)')).toBe(0.5);
    });

    it('returns 1 if opacity is missing', () => {
      expect(getRgbaOpacity('rgb(255, 0, 0)')).toBe(1);
    });

    it('returns 1 for invalid inputs', () => {
      expect(getRgbaOpacity('not-a-color')).toBe(1);
    });
  });

  // Test updateRgbaOpacity
  describe('updateRgbaOpacity', () => {
    it('updates opacity in rgba string', () => {
      expect(updateRgbaOpacity('rgba(255, 0, 0, 0.3)', 0.7))
        .toBe('rgba(255, 0, 0, 0.7)');
    });

    it('converts rgb to rgba with specified opacity', () => {
      expect(updateRgbaOpacity('rgb(0, 255, 0)', 0.5))
        .toBe('rgba(0, 255, 0, 0.5)');
    });

    it('converts hex to rgba with specified opacity', () => {
      expect(updateRgbaOpacity('#0000FF', 0.3))
        .toBe('rgba(0, 0, 255, 0.3)');
    });

    it('clamps opacity values to 0-1 range', () => {
      expect(updateRgbaOpacity('rgb(0, 0, 0)', 1.5))
        .toBe('rgba(0, 0, 0, 1)');
      expect(updateRgbaOpacity('rgb(0, 0, 0)', -0.5))
        .toBe('rgba(0, 0, 0, 0)');
    });
  });
}); 