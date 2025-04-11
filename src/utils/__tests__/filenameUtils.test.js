import { describe, it, expect } from 'vitest';
import { 
  formatFilenameWithDimensions, 
  stripDimensionsFromFilename, 
  getDimensionsFromFilename
} from '../filenameUtils';

describe('filenameUtils', () => {
  // Test formatFilenameWithDimensions
  describe('formatFilenameWithDimensions', () => {
    it('appends dimensions to a filename without dimensions', () => {
      expect(formatFilenameWithDimensions('My Artwork', 32, 32))
        .toBe('My Artwork_32x32');
    });

    it('replaces existing dimensions with new ones', () => {
      expect(formatFilenameWithDimensions('My Artwork_24x24', 32, 32))
        .toBe('My Artwork_32x32');
    });

    it('handles filenames with underscores that are not dimensions', () => {
      expect(formatFilenameWithDimensions('My_Cool_Artwork', 32, 32))
        .toBe('My_Cool_Artwork_32x32');
    });
  });

  // Test stripDimensionsFromFilename
  describe('stripDimensionsFromFilename', () => {
    it('removes dimensions from a filename', () => {
      expect(stripDimensionsFromFilename('My Artwork_32x32'))
        .toBe('My Artwork');
    });

    it('returns the original filename if no dimensions are present', () => {
      expect(stripDimensionsFromFilename('My Artwork'))
        .toBe('My Artwork');
    });

    it('only removes dimensions at the end of the filename', () => {
      expect(stripDimensionsFromFilename('My_32x32_Artwork'))
        .toBe('My_32x32_Artwork');
    });
  });

  // Test getDimensionsFromFilename
  describe('getDimensionsFromFilename', () => {
    it('extracts dimensions from a filename', () => {
      expect(getDimensionsFromFilename('My Artwork_32x32'))
        .toEqual({ width: 32, height: 32 });
    });

    it('returns null if no dimensions are present', () => {
      expect(getDimensionsFromFilename('My Artwork'))
        .toBeNull();
    });

    it('handles different dimension values correctly', () => {
      expect(getDimensionsFromFilename('My Artwork_16x24'))
        .toEqual({ width: 16, height: 24 });
    });
  });
}); 