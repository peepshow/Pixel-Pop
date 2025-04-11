import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ZoomControls from '../canvas/ZoomControls';

// Mock FontAwesomeIcon to avoid SVG-related issues in tests
vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <span data-testid={`icon-${icon.iconName}`}></span>
}));

describe('ZoomControls', () => {
  it('renders zoom buttons and current zoom level', () => {
    const zoomIn = vi.fn();
    const zoomOut = vi.fn();
    const state = { scale: 1.5 };

    render(
      <ZoomControls 
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        state={state}
      />
    );

    // Check if zoom percentage is displayed correctly
    expect(screen.getByText('150%')).toBeInTheDocument();
    
    // Check if zoom buttons are rendered with their icons
    expect(screen.getByTestId('icon-plus')).toBeInTheDocument();
    expect(screen.getByTestId('icon-minus')).toBeInTheDocument();
  });

  it('displays 100% when no state is provided', () => {
    render(
      <ZoomControls 
        zoomIn={() => {}}
        zoomOut={() => {}}
        state={null}
      />
    );

    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('calls zoomIn when plus button is clicked', () => {
    const zoomIn = vi.fn();
    const zoomOut = vi.fn();
    
    render(
      <ZoomControls 
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        state={{ scale: 1 }}
      />
    );

    const plusButton = screen.getByTestId('icon-plus').closest('button');
    fireEvent.click(plusButton);
    
    expect(zoomIn).toHaveBeenCalledTimes(1);
    expect(zoomOut).not.toHaveBeenCalled();
  });

  it('calls zoomOut when minus button is clicked', () => {
    const zoomIn = vi.fn();
    const zoomOut = vi.fn();
    
    render(
      <ZoomControls 
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        state={{ scale: 1 }}
      />
    );

    const minusButton = screen.getByTestId('icon-minus').closest('button');
    fireEvent.click(minusButton);
    
    expect(zoomOut).toHaveBeenCalledTimes(1);
    expect(zoomIn).not.toHaveBeenCalled();
  });
}); 