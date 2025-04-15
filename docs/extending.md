# Extending PixelPop

This guide provides instructions for extending PixelPop with new features and functionality.

## Adding a New Tool

To add a new tool to PixelPop, follow these steps:

1. **Define Tool State**

   In `App.jsx`, add a new tool type to the active tool state:

   ```javascript
   // In App.jsx - add new tool type
   const [activeTool, setActiveTool] = useState('pencil'); // Can now be 'pencil', 'eraser', 'fill', 'select', or 'yourNewTool'
   ```

2. **Create Tool Handler Functions**

   Add handler functions for your tool's interactions:

   ```javascript
   // In App.jsx - add new tool handler
   const handleNewToolInteraction = useCallback((coords) => {
     // Implement your tool's logic here
     // coords contains gridX, gridY, and buttons properties
     
     // Example: Create a specific effect on the pixel grid
     const newGrid = [...pixelGrid];
     // Apply your tool's effect to the grid
     // ...
     
     // Update the grid and push to history
     setPixelGrid(newGrid);
     pushHistory(newGrid);
   }, [pixelGrid, pushHistory]);
   ```

3. **Update Process Interaction**

   Modify the `processInteraction` function to include your new tool:

   ```javascript
   // In App.jsx - update process interaction
   const processInteraction = useCallback((coords) => {
     // Skip if outside grid
     if (coords.gridX < 0 || coords.gridY < 0 || 
         coords.gridX >= gridDimensions.width || coords.gridY >= gridDimensions.height) {
       return;
     }
     
     switch (activeTool) {
       case 'pencil':
         handlePencilDraw(coords);
         break;
       case 'eraser':
         handleEraserDraw(coords);
         break;
       // ... other existing tools
       case 'yourNewTool':
         handleNewToolInteraction(coords);
         break;
       default:
         break;
     }
   }, [activeTool, handlePencilDraw, handleEraserDraw, /* ... */, handleNewToolInteraction, gridDimensions]);
   ```

4. **Add UI Button**

   Add a button to the Sidebar component:

   ```javascript
   // In Sidebar.jsx - add new tool button
   <ToolButton
     className={activeTool === 'yourNewTool' ? 'active' : ''}
     onClick={() => handleToolChange('yourNewTool')}
     title="Your New Tool (Y)"
   >
     <FontAwesomeIcon icon={faYourToolIcon} />
   </ToolButton>
   ```

5. **Add Keyboard Shortcut**

   Add a keyboard shortcut in the keyboard handler:

   ```javascript
   // In App.jsx - in the keyboard handler
   switch (event.key.toLowerCase()) {
     // ... existing shortcuts
     case 'y':
       setActiveTool('yourNewTool');
       handled = true;
       break;
   }
   ```

6. **Add Cursor Style**

   Update the cursor style for your new tool:

   ```javascript
   // In Canvas.jsx - update getCursor function
   const getCursor = useCallback(() => {
     if (isPanning) return 'grab';
     
     switch (activeTool) {
       // ... existing tool cursors
       case 'yourNewTool':
         return 'url("path/to/your/cursor.png"), auto';
       default:
         return 'default';
     }
   }, [activeTool, isPanning]);
   ```

## Adding a New Effect

To add a new visual effect to pixels:

1. **Add Effect State**

   In `App.jsx`, add state for your effect:

   ```javascript
   // In App.jsx - add effect state
   const [newEffectEnabled, setNewEffectEnabled] = useState(false);
   const [newEffectSettings, setNewEffectSettings] = useState({
     property1: 50,
     property2: '#ffffff',
     property3: 'normal',
   });
   ```

2. **Pass Effect Props to Renderers**

   Update the props passed to Canvas/SVGRenderer:

   ```javascript
   // In App.jsx - pass to Canvas component
   <Canvas
     // ... existing props
     newEffectEnabled={newEffectEnabled}
     newEffectSettings={newEffectSettings}
   />
   ```

3. **Add Effect UI Controls**

   Add controls to the Sidebar component:

   ```javascript
   // In Sidebar.jsx - add effect controls
   <EffectGroup>
     <EffectHeader $hasContent={newEffectEnabled}>
       <EffectTitle>New Effect</EffectTitle>
       <EffectToggle>
         <input
           type="checkbox"
           checked={newEffectEnabled}
           onChange={(e) => setNewEffectEnabled(e.target.checked)}
         />
         <span></span>
       </EffectToggle>
     </EffectHeader>
     
     {newEffectEnabled && (
       <EffectControls>
         {/* Add controls for your effect settings */}
         <ControlGroup>
           <ControlLabel>Property 1</ControlLabel>
           <SliderControl>
             <RangeInput
               type="range"
               min="0"
               max="100"
               value={newEffectSettings.property1}
               onChange={(e) => setNewEffectSettings({
                 ...newEffectSettings,
                 property1: Number(e.target.value)
               })}
             />
             <NumberInput
               type="number"
               min="0"
               max="100"
               value={newEffectSettings.property1}
               onChange={(e) => setNewEffectSettings({
                 ...newEffectSettings,
                 property1: Number(e.target.value)
               })}
             />
           </SliderControl>
         </ControlGroup>
         
         {/* Add more controls as needed */}
       </EffectControls>
     )}
   </EffectGroup>
   ```

4. **Implement Effect Rendering in Canvas Renderer**

   Add rendering code to `CanvasRenderer.jsx`:

   ```javascript
   // In CanvasRenderer.jsx - implement effect
   // In the main rendering function
   if (newEffectEnabled) {
     // Save context state
     ctx.save();
     
     // Apply your effect
     // Example:
     ctx.globalCompositeOperation = newEffectSettings.property3;
     ctx.fillStyle = newEffectSettings.property2;
     
     // Draw pixels with the effect
     for (let y = 0; y < gridHeight; y++) {
       for (let x = 0; x < gridWidth; x++) {
         // Apply effect on each pixel as needed
         // ...
       }
     }
     
     // Restore context
     ctx.restore();
   }
   ```

5. **Implement Effect Rendering in SVG Renderer**

   Add effect implementation to `SVGRenderer.jsx`:

   ```javascript
   // In SVGRenderer.jsx - implement effect for SVG
   
   // 1. Create filter definitions
   const createEffectFilter = () => {
     if (!newEffectEnabled) return null;
     
     return (
       <filter id="newEffectFilter">
         {/* Define your SVG filter elements */}
         <feGaussianBlur stdDeviation={newEffectSettings.property1 / 10} />
         {/* Add more filter primitives as needed */}
       </filter>
     );
   };
   
   // 2. Apply filter to elements
   // In the pixel rendering code
   const filterAttr = newEffectEnabled ? 'url(#newEffectFilter)' : '';
   ```

6. **Update Export Functions**

   Update the export function to include your effect:

   ```javascript
   // In App.jsx - update export
   const performExport = useCallback((format, options) => {
     // ... existing export code
     
     // Add your effect to the export options
     if (newEffectEnabled && options.applyEffects) {
       // Apply your effect during export
     }
     
     // Continue with export
   }, [/* existing dependencies */, newEffectEnabled, newEffectSettings]);
   ```

## Adding a New Renderer

To add an entirely new rendering method:

1. **Create New Renderer Component**

   Create a new file, such as `WebGLRenderer.jsx`:

   ```javascript
   // src/components/canvas/WebGLRenderer.jsx
   import React, { useRef, useEffect, forwardRef, memo } from 'react';
   import styled from 'styled-components';
   
   const GLCanvas = styled.canvas`
     position: absolute;
     top: 0;
     left: 0;
   `;
   
   const WebGLRenderer = memo(forwardRef((props, ref) => {
     const {
       gridWidth,
       gridHeight,
       pixelSize,
       gridGap,
       pixelData,
       mode,
       onMouseDown,
       onMouseMove,
       onMouseUp,
       onMouseLeave,
       // ... other props
     } = props;
     
     const canvasRef = useRef(null);
     const glRef = useRef(null);
     
     // Initialize WebGL
     useEffect(() => {
       if (!canvasRef.current) return;
       const canvas = canvasRef.current;
       const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
       
       if (!gl) {
         console.error('WebGL not supported');
         return;
       }
       
       glRef.current = gl;
       
       // Initialize shaders, buffers, etc.
       // ...
       
       // Set up initial drawing
       // ...
     }, []);
     
     // Handle changes to pixel data
     useEffect(() => {
       if (!glRef.current || !pixelData) return;
       
       // Update WebGL rendering based on pixel data
       // ...
     }, [pixelData, gridWidth, gridHeight]);
     
     // Implement event handlers similar to other renderers
     const handleMouseDown = (e) => {
       // Convert coordinates and call onMouseDown
       // ...
     };
     
     // ... other event handlers
     
     return (
       <GLCanvas
         ref={canvasRef}
         width={gridWidth * (pixelSize + gridGap)}
         height={gridHeight * (pixelSize + gridGap)}
         onMouseDown={handleMouseDown}
         // ... other event handlers
       />
     );
   }));
   
   export default WebGLRenderer;
   ```

2. **Add Renderer Type Option**

   Update the renderer type options in App and Sidebar:

   ```javascript
   // In App.jsx
   const [rendererType, setRendererType] = useState('canvas'); // Now can be 'canvas', 'svg', or 'webgl'
   ```

   ```javascript
   // In Sidebar.jsx - update renderer select
   <select
     value={rendererType}
     onChange={(e) => setRendererType(e.target.value)}
   >
     <option value="canvas">Canvas</option>
     <option value="svg">SVG</option>
     <option value="webgl">WebGL</option>
   </select>
   ```

3. **Add Renderer to Canvas Component**

   Update the renderer selection in `Canvas.jsx`:

   ```javascript
   // In Canvas.jsx - add new renderer type
   {rendererType === 'canvas' ? (
     <CanvasRenderer
       // ... props
     />
   ) : rendererType === 'svg' ? (
     <SVGRenderer
       // ... props
     />
   ) : (
     <WebGLRenderer
       // ... props
     />
   )}
   ```

4. **Implement Export for New Renderer**

   Add export functionality for the new renderer:

   ```javascript
   // In App.jsx - update exportPNG function
   const performExport = useCallback((format, options) => {
     // ... existing export code
     
     if (rendererType === 'webgl') {
       // Handle WebGL-specific export
       // ...
     }
     
     // Continue with export
   }, [/* existing dependencies */]);
   ```

## Creating a Custom Hook

To encapsulate related functionality, create custom hooks:

1. **Create Hook File**

   ```javascript
   // src/hooks/useCustomEffect.js
   import { useState, useCallback } from 'react';
   
   export function useCustomEffect() {
     const [enabled, setEnabled] = useState(false);
     const [settings, setSettings] = useState({
       property1: 50,
       property2: '#ffffff',
     });
     
     // Create handler functions
     const updateSetting = useCallback((property, value) => {
       setSettings(prev => ({
         ...prev,
         [property]: value
       }));
     }, []);
     
     // Return values and functions
     return {
       enabled,
       setEnabled,
       settings,
       setSettings,
       updateSetting
     };
   }
   ```

2. **Use the Hook in App.jsx**

   ```javascript
   // In App.jsx
   import { useCustomEffect } from './hooks/useCustomEffect';
   
   function App() {
     // ... existing code
     
     const {
       enabled: customEffectEnabled,
       setEnabled: setCustomEffectEnabled,
       settings: customEffectSettings,
       updateSetting: updateCustomEffectSetting
     } = useCustomEffect();
     
     // Pass to components
     // ...
   }
   ```

## Extending Export Options

To add new export options:

1. **Add Option to ExportModal**

   ```javascript
   // In ExportModal.jsx - add new option
   <FormGroup>
     <FormLabel>
       <input
         type="checkbox"
         checked={options.newOption}
         onChange={(e) => setOptions({
           ...options,
           newOption: e.target.checked
         })}
       />
       New Export Option
     </FormLabel>
   </FormGroup>
   ```

2. **Update Export Function**

   ```javascript
   // In App.jsx - update export function
   const performExport = useCallback((format, options) => {
     // ... existing code
     
     if (options.newOption) {
       // Apply new option during export
       // ...
     }
     
     // Continue with export
   }, [/* existing dependencies */]);
   ```

## Best Practices for Extensions

1. **Maintain Consistent Patterns**
   - Follow existing code structures and naming conventions
   - Use similar component organization to existing features

2. **Performance Considerations**
   - Use memoization (memo, useMemo, useCallback) for expensive operations
   - Implement proper cleanup in useEffect hooks
   - Test with large grid sizes to ensure performance

3. **Cross-Renderer Compatibility**
   - Ensure features work with both Canvas and SVG renderers
   - Test rendering in different modes

4. **Touch Support**
   - Consider touch interactions for any new tool or feature
   - Test on mobile devices

5. **Undo/Redo Support**
   - Ensure new actions properly integrate with history system
   - Test undo/redo with your new features

6. **Accessibility**
   - Include keyboard shortcuts for new tools
   - Provide appropriate ARIA attributes for UI controls 