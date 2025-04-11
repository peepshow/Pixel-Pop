import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MonitorContainer = styled.div`
  position: fixed;
  bottom: ${props => props.$position.y}px;
  left: ${props => props.$position.x}px;
  background-color: rgba(var(--rgb-bg-secondary), 0.8);
  border: 1px solid rgba(var(--rgb-border-color), 0.5);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  color: var(--text-primary);
  backdrop-filter: blur(2px);
  z-index: 1000;
  user-select: none;
  font-family: monospace;
  display: ${props => props.$visible ? 'block' : 'none'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  min-width: 180px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(var(--rgb-border-color), 0.5);
  padding-bottom: 4px;
  margin-bottom: 4px;
  cursor: move;
  font-weight: bold;
  color: var(--accent-color);
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`;

const Label = styled.span`
  color: var(--text-secondary);
  margin-right: 8px;
`;

const Value = styled.span`
  color: ${props => {
    if (props.$value > props.$good) return '#4caf50'; // Green for good performance
    if (props.$value > props.$medium) return '#ff9800'; // Orange for medium performance
    return '#f44336'; // Red for poor performance
  }};
  font-weight: bold;
`;

const PerformanceMonitor = ({ visible = true, rendererType }) => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    renderTime: 0,
    memoryUsage: 0,
    nodeCount: 0
  });
  
  // For dragging functionality
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const frameRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const frameTimes = useRef([]);
  const animationFrameId = useRef(null);
  
  // For memory usage measurement
  const memoryTimerId = useRef(null);
  
  // For counting DOM nodes (SVG elements)
  const nodeTimerId = useRef(null);
  
  // Dragging handlers
  const handleMouseDown = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: window.innerHeight - e.clientY + dragOffset.y
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  // Performance monitoring effect
  useEffect(() => {
    // FPS and render time measurement
    const measurePerformance = (timestamp) => {
      // Calculate FPS
      frameRef.current++;
      const elapsed = timestamp - lastTimeRef.current;
      
      if (elapsed > 1000) { // Update every second
        const fps = Math.round((frameRef.current * 1000) / elapsed);
        
        // Calculate average render time from the last 60 frames (or less if not enough)
        const avgRenderTime = frameTimes.current.length > 0
          ? frameTimes.current.reduce((sum, time) => sum + time, 0) / frameTimes.current.length
          : 0;
        
        setMetrics(prev => ({
          ...prev,
          fps,
          renderTime: avgRenderTime.toFixed(2)
        }));
        
        frameRef.current = 0;
        lastTimeRef.current = timestamp;
        frameTimes.current = [];
      }
      
      // Measure render time for this frame
      const startRender = performance.now();
      
      // Schedule next animation frame
      animationFrameId.current = requestAnimationFrame(measurePerformance);
      
      // Record render time after the frame completes
      const renderTime = performance.now() - startRender;
      frameTimes.current.push(renderTime);
      
      // Keep only the last 60 frames for average calculation
      if (frameTimes.current.length > 60) {
        frameTimes.current.shift();
      }
    };
    
    // Memory usage measurement (less frequent)
    const measureMemory = async () => {
      try {
        if (window.performance && performance.memory) {
          const memoryInfo = performance.memory;
          const usedHeapSize = Math.round(memoryInfo.usedJSHeapSize / (1024 * 1024));
          
          setMetrics(prev => ({
            ...prev,
            memoryUsage: usedHeapSize
          }));
        }
      } catch (e) {
        console.warn('Memory measurement not supported', e);
      }
    };
    
    // Count SVG nodes when using SVG renderer
    const countNodes = () => {
      if (rendererType === 'svg') {
        const svgElements = document.querySelectorAll('svg *');
        setMetrics(prev => ({
          ...prev,
          nodeCount: svgElements.length
        }));
      }
    };
    
    // Start measurements if visible
    if (visible) {
      animationFrameId.current = requestAnimationFrame(measurePerformance);
      
      // Memory usage update every 2 seconds
      memoryTimerId.current = setInterval(measureMemory, 2000);
      
      // Node count update every 2 seconds (only for SVG)
      if (rendererType === 'svg') {
        nodeTimerId.current = setInterval(countNodes, 2000);
      }
    }
    
    return () => {
      // Clean up
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (memoryTimerId.current) {
        clearInterval(memoryTimerId.current);
      }
      
      if (nodeTimerId.current) {
        clearInterval(nodeTimerId.current);
      }
    };
  }, [rendererType, visible]);
  
  return (
    <MonitorContainer 
      ref={containerRef}
      $visible={visible} 
      $position={position}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <Header onMouseDown={handleMouseDown}>
        Performance Monitor
      </Header>
      
      <MetricRow>
        <Label>FPS:</Label>
        <Value 
          $value={metrics.fps} 
          $good={55} 
          $medium={30}
        >
          {metrics.fps}
        </Value>
      </MetricRow>
      
      <MetricRow>
        <Label>Render Time:</Label>
        <Value 
          $value={16 - metrics.renderTime} // Invert the scale (lower is better)
          $good={10} 
          $medium={0}
        >
          {metrics.renderTime} ms
        </Value>
      </MetricRow>
      
      {window.performance?.memory && (
        <MetricRow>
          <Label>Memory:</Label>
          <Value 
            $value={500 - metrics.memoryUsage} // Invert the scale (lower is better)
            $good={400} 
            $medium={300}
          >
            {metrics.memoryUsage} MB
          </Value>
        </MetricRow>
      )}
      
      {rendererType === 'svg' && (
        <MetricRow>
          <Label>DOM Nodes:</Label>
          <Value 
            $value={1000 - metrics.nodeCount} // Invert the scale (lower is better)
            $good={900} 
            $medium={500}
          >
            {metrics.nodeCount}
          </Value>
        </MetricRow>
      )}
      
      <MetricRow>
        <Label>Renderer:</Label>
        <span>{rendererType}</span>
      </MetricRow>
    </MonitorContainer>
  );
};

export default PerformanceMonitor; 