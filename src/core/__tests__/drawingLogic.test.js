import { describe, it, expect, vi } from 'vitest';
import { applyPixelColor, pickColor, applyFill, applyLine } from '../drawingLogic';

describe('drawingLogic', () => {
  // Test data - small 3x3 grid for simple tests
  const createTestGrid = () => [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  describe('applyPixelColor', () => {
    it('applies color to an empty pixel', () => {
      const grid = createTestGrid();
      const newGrid = applyPixelColor(grid, 1, 1, '#FF0000');
      
      // Check that the center pixel has the color
      expect(newGrid[1][1]).toBe('#FF0000');
      
      // Check that the rest of the grid is unchanged
      expect(newGrid[0][0]).toBeNull();
      expect(newGrid[0][1]).toBeNull();
      expect(newGrid[0][2]).toBeNull();
      expect(newGrid[1][0]).toBeNull();
      expect(newGrid[1][2]).toBeNull();
      expect(newGrid[2][0]).toBeNull();
      expect(newGrid[2][1]).toBeNull();
      expect(newGrid[2][2]).toBeNull();
    });

    it('changes color of an existing pixel', () => {
      const grid = createTestGrid();
      grid[1][1] = '#00FF00';
      
      const newGrid = applyPixelColor(grid, 1, 1, '#FF0000');
      
      expect(newGrid[1][1]).toBe('#FF0000');
    });

    it('returns original grid when color is the same', () => {
      const grid = createTestGrid();
      grid[1][1] = '#FF0000';
      
      const newGrid = applyPixelColor(grid, 1, 1, '#FF0000');
      
      expect(newGrid).toBe(grid); // Same reference, no new grid created
    });

    it('returns original grid when coordinates are out of bounds', () => {
      const grid = createTestGrid();
      
      // Test various out-of-bounds scenarios
      expect(applyPixelColor(grid, -1, 1, '#FF0000')).toBe(grid);
      expect(applyPixelColor(grid, 1, -1, '#FF0000')).toBe(grid);
      expect(applyPixelColor(grid, 3, 1, '#FF0000')).toBe(grid);
      expect(applyPixelColor(grid, 1, 3, '#FF0000')).toBe(grid);
    });
  });

  describe('pickColor', () => {
    it('picks color from a pixel', () => {
      const grid = createTestGrid();
      grid[1][1] = '#FF0000';
      
      expect(pickColor(grid, 1, 1)).toBe('#FF0000');
    });

    it('returns null for empty pixel', () => {
      const grid = createTestGrid();
      
      expect(pickColor(grid, 1, 1)).toBeNull();
    });

    it('returns null for out-of-bounds coordinates', () => {
      const grid = createTestGrid();
      
      expect(pickColor(grid, -1, 1)).toBeNull();
      expect(pickColor(grid, 1, -1)).toBeNull();
      expect(pickColor(grid, 3, 1)).toBeNull();
      expect(pickColor(grid, 1, 3)).toBeNull();
    });
  });

  describe('applyFill', () => {
    it('fills empty area with color', () => {
      const grid = createTestGrid();
      
      const newGrid = applyFill(grid, 1, 1, '#FF0000');
      
      // All pixels should be filled since they're all null
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          expect(newGrid[y][x]).toBe('#FF0000');
        }
      }
    });

    it('fills only connected area of same color', () => {
      // Create a grid with a barrier
      const grid = [
        ['#00FF00', '#00FF00', '#00FF00'],
        ['#00FF00', null, '#00FF00'],
        ['#00FF00', '#00FF00', '#00FF00']
      ];
      
      const newGrid = applyFill(grid, 1, 1, '#FF0000');
      
      // Only the center should be filled
      expect(newGrid[1][1]).toBe('#FF0000');
      
      // The green border should remain
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          if (y === 1 && x === 1) continue; // Skip the center
          expect(newGrid[y][x]).toBe('#00FF00');
        }
      }
    });

    it('returns original grid when target color is the same as fill color', () => {
      const grid = createTestGrid();
      grid[1][1] = '#FF0000';
      
      const newGrid = applyFill(grid, 1, 1, '#FF0000');
      
      expect(newGrid).toBe(grid); // Same reference, no new grid created
    });

    it('returns original grid when coordinates are out of bounds', () => {
      const grid = createTestGrid();
      
      expect(applyFill(grid, -1, 1, '#FF0000')).toBe(grid);
      expect(applyFill(grid, 1, -1, '#FF0000')).toBe(grid);
      expect(applyFill(grid, 3, 1, '#FF0000')).toBe(grid);
      expect(applyFill(grid, 1, 3, '#FF0000')).toBe(grid);
    });
  });

  describe('applyLine', () => {
    it('draws a horizontal line', () => {
      const grid = createTestGrid();
      
      const newGrid = applyLine(grid, 0, 1, 2, 1, '#FF0000');
      
      // Check that the horizontal middle row is filled
      expect(newGrid[1][0]).toBe('#FF0000');
      expect(newGrid[1][1]).toBe('#FF0000');
      expect(newGrid[1][2]).toBe('#FF0000');
      
      // Check that other cells are empty
      expect(newGrid[0][0]).toBeNull();
      expect(newGrid[0][1]).toBeNull();
      expect(newGrid[0][2]).toBeNull();
      expect(newGrid[2][0]).toBeNull();
      expect(newGrid[2][1]).toBeNull();
      expect(newGrid[2][2]).toBeNull();
    });

    it('draws a vertical line', () => {
      const grid = createTestGrid();
      
      const newGrid = applyLine(grid, 1, 0, 1, 2, '#FF0000');
      
      // Check that the vertical middle column is filled
      expect(newGrid[0][1]).toBe('#FF0000');
      expect(newGrid[1][1]).toBe('#FF0000');
      expect(newGrid[2][1]).toBe('#FF0000');
      
      // Check that other cells are empty
      expect(newGrid[0][0]).toBeNull();
      expect(newGrid[0][2]).toBeNull();
      expect(newGrid[1][0]).toBeNull();
      expect(newGrid[1][2]).toBeNull();
      expect(newGrid[2][0]).toBeNull();
      expect(newGrid[2][2]).toBeNull();
    });

    it('draws a diagonal line', () => {
      const grid = createTestGrid();
      
      const newGrid = applyLine(grid, 0, 0, 2, 2, '#FF0000');
      
      // Check diagonal from top-left to bottom-right
      expect(newGrid[0][0]).toBe('#FF0000');
      expect(newGrid[1][1]).toBe('#FF0000');
      expect(newGrid[2][2]).toBe('#FF0000');
      
      // Check that other cells are empty
      expect(newGrid[0][1]).toBeNull();
      expect(newGrid[0][2]).toBeNull();
      expect(newGrid[1][0]).toBeNull();
      expect(newGrid[1][2]).toBeNull();
      expect(newGrid[2][0]).toBeNull();
      expect(newGrid[2][1]).toBeNull();
    });
  });
}); 