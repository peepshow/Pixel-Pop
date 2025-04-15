# Touch Event Support for PixelPop Canvas

## Summary
This PR adds comprehensive touch event support to the PixelPop application, allowing users to draw and interact with the canvas using touch devices. The implementation maps touch events to mouse events, ensuring consistent behavior across both input methods.

## Changes
- Added touch event handlers to `CanvasRenderer.jsx`:
  - `onTouchStart` → maps to `onMouseDown`
  - `onTouchMove` → maps to `onMouseMove`
  - `onTouchEnd` → maps to `onMouseUp`
  - `onTouchCancel` → maps to `onMouseLeave`

- Added similar touch event handlers to `SVGRenderer.jsx`

- Created test cases to verify the touch event handlers properly map to mouse events

## Implementation Details
- Touch positions are translated to canvas coordinates using `getBoundingClientRect()` and the `getGridCoordinates()` function
- Touch events are mapped to appropriate mouse button states (e.g., touch = left mouse button)
- Events are processed through the existing mouse event handling pipeline, ensuring consistent behavior

## Testing
A new test file (`Canvas.touch.test.jsx`) was created to verify the touch event implementation, with tests for:
- Touch start → mouse down mapping
- Touch move → mouse move mapping
- Touch end → mouse up mapping
- SVG touch event handling

All tests are passing.

## How to Test
1. Open the application on a touch-enabled device (tablet, smartphone, or touch-screen laptop)
2. Try drawing pixels using touch
3. Test different tools (pencil, eraser, fill, select)
4. Verify that panning and zooming still work with the appropriate gestures

## Screenshots
(Screenshots of the application running on touch devices would be added here) 