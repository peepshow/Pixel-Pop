import React, { useRef, useEffect, forwardRef, memo } from 'react';
import * as THREE from 'three';

const WebGLRenderer = memo(forwardRef(({
  gridWidth,
  gridHeight,
  pixelSize,
  gridGap,
  pixelData,
  showGrid,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
  spaceKeyPressed = false
}, ref) => {
  const containerRef = useRef(null);
  const rendererRef  = useRef(null);
  const sceneRef     = useRef(null);
  const cameraRef    = useRef(null);
  const meshRef      = useRef(null);
  const raycaster    = useRef(new THREE.Raycaster());
  // Keep event callbacks up-to-date without re-running main effect
  const onMouseDownRef = useRef(onMouseDown);
  const onMouseMoveRef = useRef(onMouseMove);
  const onMouseUpRef = useRef(onMouseUp);
  const onMouseLeaveRef = useRef(onMouseLeave);
  const spaceKeyPressedRef = useRef(spaceKeyPressed);
  // reference to grid helper for toggling visibility
  const gridHelperRef = useRef(null);
  // Track if we're in a multi-touch gesture for gesture detection
  const multiTouchRef = useRef(false);
  const touchTimeoutRef = useRef(null);
  // Track active touch pointers for reliable multi-touch detection
  const activePointersRef = useRef(new Set());

  useEffect(() => {
    onMouseDownRef.current = onMouseDown;
    onMouseMoveRef.current = onMouseMove;
    onMouseUpRef.current = onMouseUp;
    onMouseLeaveRef.current = onMouseLeave;
    spaceKeyPressedRef.current = spaceKeyPressed;
  });

  useEffect(() => {
    // Prevent duplicate canvases on re-mount: clear any existing canvas elements
    const container = containerRef.current;
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
    const cellSize = pixelSize + gridGap;

    // Create scene and camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      0, gridWidth * cellSize,
      gridHeight * cellSize, 0,
      -100, 100
    );
    cameraRef.current = camera;

    // Create WebGL renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(gridWidth * cellSize, gridHeight * cellSize);
    const canvasEl = renderer.domElement;
    canvasEl.style.touchAction = 'none';
    containerRef.current.style.touchAction = 'none';
    containerRef.current.appendChild(canvasEl);
    rendererRef.current = renderer;

    // Instanced mesh for pixels
    const geometry = new THREE.PlaneGeometry(pixelSize, pixelSize);
    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    const maxCount = gridWidth * gridHeight;
    const mesh = new THREE.InstancedMesh(geometry, material, maxCount);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // enable per-instance colors
    const instanceColors = new Float32Array(maxCount * 3);
    const instanceColorAttr = new THREE.InstancedBufferAttribute(instanceColors, 3, false);
    instanceColorAttr.setUsage(THREE.DynamicDrawUsage);
    mesh.instanceColor = instanceColorAttr;
    mesh.geometry.setAttribute('instanceColor', instanceColorAttr);
    scene.add(mesh);
    meshRef.current = mesh;
    // add grid overlay behind pixels, initial visibility based on showGrid
    const gridHelper = new THREE.GridHelper(gridWidth * cellSize, gridWidth, 0xcccccc, 0xcccccc);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.set(gridWidth * cellSize / 2, gridHeight * cellSize / 2, -0.01);
    gridHelper.visible = showGrid;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    // Pointer event helper: mirror CanvasRenderer mapping (compensate canvas CSS scaling)
    const handleEvent = (e, callback) => {
      const rect = canvasEl.getBoundingClientRect();
      // raw mouse offsets in CSS pixels
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      // account for CSS scaling vs. canvas resolution
      const canvasWidth = rendererRef.current.domElement.width;
      const canvasHeight = rendererRef.current.domElement.height;
      const scaleX = rect.width / canvasWidth;
      const scaleY = rect.height / canvasHeight;
      const x = offsetX / scaleX;
      const y = offsetY / scaleY;
      const cellSize = pixelSize + gridGap;
      const gridX = Math.floor(x / cellSize);
      const gridY = Math.floor(y / cellSize);
      if (gridX < 0 || gridX >= gridWidth || gridY < 0 || gridY >= gridHeight) return;
      callback({ gridX, gridY, buttons: e.buttons });
    };

    // Attach pointer events using refs for stable listener
    const downHandler = e => { 
      // Skip when space key is pressed (for panning)
      if (spaceKeyPressedRef.current) return; 
      
      e.preventDefault(); 
      
      // Detect multi-touch for pinch gestures
      if (e.pointerType === 'touch') {
        // Clear any existing timeout
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
          touchTimeoutRef.current = null;
        }
        
        // Track this pointer
        activePointersRef.current.add(e.pointerId);
        
        // Check for multi-touch
        if (activePointersRef.current.size > 1 || multiTouchRef.current) {
          multiTouchRef.current = true;
          return; // Don't initiate painting for multi-touch
        }
        
        // Add a small delay to detect if another finger is added (for pinch gesture)
        touchTimeoutRef.current = setTimeout(() => {
          if (!multiTouchRef.current && onMouseDownRef.current) {
            handleEvent(e, onMouseDownRef.current);
          }
          touchTimeoutRef.current = null;
        }, 20); // Short 20ms delay to detect multi-touch
      } else {
        // For mouse events, proceed immediately
        onMouseDownRef.current && handleEvent(e, onMouseDownRef.current);
      }
    };
    
    const moveHandler = e => { 
      if (spaceKeyPressedRef.current) return; 
      e.preventDefault(); 
      
      // Don't process moves during multi-touch
      if (e.pointerType === 'touch') {
        // We're already tracking pointers in activePointersRef
        if (activePointersRef.current.size > 1) {
          multiTouchRef.current = true;
        }
        
        if (multiTouchRef.current) {
          return;
        }
      }
      
      onMouseMoveRef.current && handleEvent(e, onMouseMoveRef.current); 
    };
    
    const upHandler = e => { 
      if (spaceKeyPressedRef.current) return; 
      e.preventDefault(); 
      
      // Reset multi-touch state on pointer up when no active pointers remain
      if (e.pointerType === 'touch') {
        // Remove this pointer from our tracking set
        activePointersRef.current.delete(e.pointerId);
        
        // Reset multi-touch state if no pointers remain
        if (activePointersRef.current.size === 0) {
          multiTouchRef.current = false;
        }
        
        // Don't trigger up during multi-touch
        if (multiTouchRef.current) {
          return;
        }
      }
      
      onMouseUpRef.current && handleEvent(e, onMouseUpRef.current); 
    };
    
    const leaveHandler = e => { 
      if (spaceKeyPressedRef.current) return; 
      e.preventDefault(); 
      onMouseLeaveRef.current && handleEvent(e, onMouseLeaveRef.current); 
    };

    const cancelHandler = e => {
      if (e.pointerType === 'touch') {
        // Remove this pointer from tracking on pointer cancel
        activePointersRef.current.delete(e.pointerId);
        
        // Reset if no pointers remain
        if (activePointersRef.current.size === 0) {
          multiTouchRef.current = false;
        }
      }
      
      // Treat like a leave event
      if (spaceKeyPressedRef.current) return;
      e.preventDefault();
      onMouseLeaveRef.current && handleEvent(e, onMouseLeaveRef.current);
    };

    canvasEl.addEventListener('pointerdown', downHandler);
    canvasEl.addEventListener('pointermove', moveHandler);
    canvasEl.addEventListener('pointerup', upHandler);
    canvasEl.addEventListener('pointerleave', leaveHandler);
    canvasEl.addEventListener('pointercancel', cancelHandler);

    // Initial render
    renderer.render(scene, camera);

    return () => {
      // Cleanup event listeners
      canvasEl.removeEventListener('pointerdown', downHandler);
      canvasEl.removeEventListener('pointermove', moveHandler);
      canvasEl.removeEventListener('pointerup', upHandler);
      canvasEl.removeEventListener('pointerleave', leaveHandler);
      canvasEl.removeEventListener('pointercancel', cancelHandler);
      
      // Clear any pending timeouts
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
      
      // Cleanup mesh and renderer
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      // Remove canvas element if still mounted
      if (containerRef.current && containerRef.current.contains(canvasEl)) {
        containerRef.current.removeChild(canvasEl);
      }
    };
  }, [gridWidth, gridHeight, pixelSize, gridGap]);

  // Toggle grid visibility when showGrid changes (also re-render pixel mesh)
  useEffect(() => {
    const grid = gridHelperRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const mesh = meshRef.current;
    if (grid && renderer && scene && camera) {
      grid.visible = showGrid;
      // ensure pixel instances are up-to-date for this render
      if (mesh) {
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      }
      renderer.render(scene, camera);
    }
  }, [showGrid]);

  // Update pixel instances on data change
  useEffect(() => {
    const mesh = meshRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    if (!mesh || !renderer || !scene || !camera) return;

    const cellSize = pixelSize + gridGap;
    const matrix = new THREE.Matrix4();
    let idx = 0;
    pixelData.forEach((row, y) => {
      row.forEach((color, x) => {
        if (color) {
          matrix.makeTranslation(
            x * cellSize + pixelSize / 2,
            (gridHeight - y - 1) * cellSize + pixelSize / 2,
            0
          );
          mesh.setMatrixAt(idx, matrix);
          mesh.setColorAt(idx, new THREE.Color(color));
          idx++;
        }
      });
    });
    mesh.count = idx;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    renderer.render(scene, camera);
  }, [pixelData, gridWidth, gridHeight, pixelSize, gridGap]);

  return (
    <div
      ref={containerRef}
      style={{
        width: gridWidth * (pixelSize + gridGap),
        height: gridHeight * (pixelSize + gridGap)
      }}
    />
  );
}));

export default WebGLRenderer; 