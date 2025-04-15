# Troubleshooting Guide

This guide provides solutions for common issues you might encounter when working with PixelPop.

## Rendering Issues

### Canvas Not Rendering Correctly

**Symptoms**: 
- Canvas appears blank or only partially renders
- Pixels are not showing up correctly

**Solutions**:
1. Check browser console for errors
2. Try switching between Canvas and SVG renderer
3. Verify that the grid dimensions are set properly
4. Check that the pixel size and grid gap values are reasonable
5. Make sure the pixelGrid state contains valid data

```javascript
// Debug by logging pixel grid data
console.log('Pixel Grid:', pixelGrid);
console.log('Grid Dimensions:', gridDimensions);
```

### SVG Renderer Performance Issues

**Symptoms**:
- Slow rendering with large grids
- High CPU usage
- Browser becoming unresponsive

**Solutions**:
1. Switch to Canvas renderer for large grids
2. Reduce grid dimensions
3. Disable complex effects (glow, etc.)
4. Check for unnecessary re-renders using React DevTools

## Tool Functionality Problems

### Drawing Tools Not Working

**Symptoms**:
- Clicking/dragging doesn't draw pixels
- Eraser not removing pixels
- Fill tool not filling areas

**Solutions**:
1. Verify that the correct tool is selected
2. Check that the active color is visible against the background
3. Ensure you're drawing inside the grid bounds
4. Check event handlers in the renderer component
5. Verify that state updates are working correctly

```javascript
// Add these debug logs to the draw handler
console.log('Draw at:', coords);
console.log('Current Tool:', activeTool);
console.log('Current Color:', activeColor);
```

### Selection Tool Issues

**Symptoms**:
- Unable to create selections
- Selection area not visible
- Copy/paste operations not working

**Solutions**:
1. Verify the selection area state is updating correctly
2. Check that selection overlay is being rendered
3. Ensure clipboard operations have proper permissions
4. Debug selection coordinates and copy buffer

```javascript
// Add to selection handler
console.log('Selection Area:', selectionArea);
console.log('Copy Buffer:', copyBuffer);
```

## Touch and Zoom Issues

### Touch Events Not Working

**Symptoms**:
- Cannot draw using touch
- Touch gestures not recognized
- Unable to pan or zoom with touch

**Solutions**:
1. Check touch event handlers in renderer components
2. Verify touch events are being properly translated to mouse events
3. Make sure preventDefault() is used correctly
4. Test on different browsers and devices

```javascript
// Add to touch handler
console.log('Touch event:', event.touches[0]);
console.log('Converted coordinates:', coords);
```

### Zoom Controls Not Working

**Symptoms**:
- Zoom buttons don't change zoom level
- Wheel zooming not functioning
- Pinch to zoom doesn't work

**Solutions**:
1. Verify that the zoom wrapper ref is properly set
2. Check that zoom handlers are correctly attached
3. Ensure zoom methods are being passed down to components
4. Verify event handlers for wheel and touch events

```javascript
// In Canvas.jsx, add this to debug zoom controls
useEffect(() => {
  console.log('Zoom Wrapper Ref:', zoomWrapperRef.current);
}, [zoomWrapperRef.current]);

// In handleZoomIn/handleZoomOut
console.log('Zoom method called');
```

## State Management Issues

### Undo/Redo Not Working

**Symptoms**:
- Undo/redo buttons don't restore previous states
- History seems to be missing steps
- Unexpected grid state after undo

**Solutions**:
1. Check that history is being properly updated
2. Verify history stack contains the expected states
3. Ensure immutable operations for state updates
4. Check for race conditions in state updates

```javascript
// Debug history state
console.log('History Stack:', history);
console.log('Redo Stack:', redoStack);
console.log('Current History Index:', historyIndex);
```

### Effects Not Applying

**Symptoms**:
- Glow effect not visible
- Shape changes not applied
- Corner radius not working

**Solutions**:
1. Verify effect state is properly set
2. Check that effect props are passed to renderers
3. Inspect SVG filter definitions or Canvas effect code
4. Try switching renderers to see if the issue is renderer-specific

```javascript
// Debug effect state
console.log('Glow Enabled:', glowEnabled);
console.log('Glow Settings:', glowSettings);
```

## Export Issues

### Export Not Working

**Symptoms**:
- Export button does nothing
- Downloaded file is corrupted
- Image dimensions incorrect

**Solutions**:
1. Check browser console for errors during export
2. Verify export function is being called
3. Check file type and export options
4. Try different export formats
5. Ensure File System Access API is supported by the browser

```javascript
// Add to export function
console.log('Export Format:', format);
console.log('Export Options:', options);
```

### Export Quality Problems

**Symptoms**:
- Exported image is blurry
- Effects missing in exported file
- Colors appear different in exported file

**Solutions**:
1. Increase export scale for higher resolution
2. Ensure effects are enabled during export
3. Check color parsing and conversion
4. Try different renderers for export

## Browser Compatibility

### Browser-Specific Issues

**Symptoms**:
- Works in one browser but not another
- Touch events only work on certain devices
- Export fails on specific browsers

**Solutions**:
1. Check browser console for specific errors
2. Test with polyfills for missing browser features
3. Add browser detection and fallback methods
4. Implement graceful degradation for unsupported features

```javascript
// Browser detection for debugging
console.log('Browser:', navigator.userAgent);
console.log('Features:', {
  touch: 'ontouchstart' in window,
  fileSystem: 'showSaveFilePicker' in window,
  canvas: !!document.createElement('canvas').getContext
});
```

## Performance Troubleshooting

### Slow Performance

**Symptoms**:
- Lag during drawing
- Delayed response to interactions
- High CPU/memory usage

**Solutions**:
1. Reduce grid dimensions
2. Switch to Canvas renderer for large grids
3. Disable complex effects
4. Optimize render cycles with memoization
5. Check for memory leaks using browser profiling tools

### Memory Leaks

**Symptoms**:
- Performance degrades over time
- Browser crashes after extended use
- Memory usage continuously increases

**Solutions**:
1. Verify all event listeners are properly removed
2. Check useEffect cleanup functions
3. Use React DevTools Profiler to detect unnecessary renders
4. Analyze component mount/unmount behavior

```javascript
// Add cleanup logging to useEffect
useEffect(() => {
  console.log('Component mounted');
  
  return () => {
    console.log('Component unmounted');
    // Cleanup code here
  };
}, []);
```

## Advanced Debugging

### React Component Debugging

For debugging React component issues:

1. **Use React DevTools**
   - Install React DevTools browser extension
   - Inspect component hierarchy and props
   - Use the Profiler to detect performance issues

2. **Component Logging**
   - Add useEffect with empty dependency array for mount/unmount logging
   - Log key props and state changes
   - Use conditional logging based on specific conditions

3. **Create Debug Version**
   - Add a debug mode toggle in the app
   - Include additional UI elements that show state values
   - Create debug-only displays for touch points, grid coordinates, etc.

### Renderer-Specific Debugging

For Canvas renderer issues:
```javascript
// Add this to CanvasRenderer.jsx
const debugCanvas = () => {
  if (!canvasRef.current) return;
  const ctx = canvasRef.current.getContext('2d');
  
  // Draw debug grid
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 0.5;
  
  for (let x = 0; x <= gridWidth; x++) {
    const xPos = x * (pixelSize + gridGap);
    ctx.beginPath();
    ctx.moveTo(xPos, 0);
    ctx.lineTo(xPos, canvasRef.current.height);
    ctx.stroke();
  }
  
  for (let y = 0; y <= gridHeight; y++) {
    const yPos = y * (pixelSize + gridGap);
    ctx.beginPath();
    ctx.moveTo(0, yPos);
    ctx.lineTo(canvasRef.current.width, yPos);
    ctx.stroke();
  }
};
```

For SVG renderer issues:
```javascript
// Add this to SVGRenderer.jsx render function
{debugMode && (
  <g className="debug-layer">
    {/* Grid lines */}
    {Array.from({ length: gridWidth + 1 }).map((_, i) => (
      <line
        key={`vline-${i}`}
        x1={i * (pixelSize + gridGap)}
        y1={0}
        x2={i * (pixelSize + gridGap)}
        y2={totalHeight}
        stroke="red"
        strokeWidth="0.5"
      />
    ))}
    {Array.from({ length: gridHeight + 1 }).map((_, i) => (
      <line
        key={`hline-${i}`}
        x1={0}
        y1={i * (pixelSize + gridGap)}
        x2={totalWidth}
        y2={i * (pixelSize + gridGap)}
        stroke="red"
        strokeWidth="0.5"
      />
    ))}
    
    {/* Grid coordinates */}
    {Array.from({ length: gridWidth }).map((_, x) => (
      Array.from({ length: gridHeight }).map((_, y) => (
        <text
          key={`coord-${x}-${y}`}
          x={x * (pixelSize + gridGap) + 2}
          y={y * (pixelSize + gridGap) + 8}
          fontSize="6"
          fill="blue"
        >
          {x},{y}
        </text>
      ))
    ))}
  </g>
)}
```

## Common Error Messages

### "Cannot read property 'current' of null"

This usually indicates a ref that hasn't been initialized before being accessed.

**Solutions**:
1. Add null checks before accessing ref.current
2. Ensure the component with the ref is mounted
3. Check the dependency arrays in useEffect hooks

### "Uncaught TypeError: handleZoomIn is not a function"

This indicates that a function prop was not properly passed or is undefined.

**Solutions**:
1. Check that the function is correctly defined in the parent component
2. Verify the function is properly passed as a prop
3. Add default empty functions for optional function props

```javascript
// In component prop definitions
const MyComponent = ({ handleZoomIn = () => {} }) => {
  // This prevents errors if the prop is not passed
};
```

### "Maximum update depth exceeded"

This occurs when setState is called in a loop causing infinite re-renders.

**Solutions**:
1. Check for setState calls in render functions
2. Verify dependency arrays in useEffect hooks
3. Use useCallback for functions that modify state
4. Add conditions before state updates

## Configuration Issues

### Grid Size Limitations

**Symptoms**:
- Unable to create very large grids
- Performance issues with certain grid dimensions

**Solutions**:
1. Set reasonable min/max limits for grid dimensions
2. Scale UI elements appropriately for different grid sizes
3. Optimize renderers for handling large grids
4. Consider implementing virtualization for very large grids

### Missing Features in Export

**Symptoms**:
- Certain effects not appearing in exports
- Grid lines missing in export
- Background not included/excluded as expected

**Solutions**:
1. Check export options in the ExportModal
2. Verify that export handlers include all necessary effects
3. Add specific export options for problem features
4. Implement separate export renderers for complex cases 