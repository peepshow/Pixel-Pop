# PixelPop Documentation

Welcome to the PixelPop documentation. This documentation will help you understand the architecture, features, and implementation details of the PixelPop pixel art creation tool.

## Table of Contents

- [Core Architecture](./architecture.md) - Component structure, state management, and data flow
- [Features Guide](./features.md) - Detailed description of all features
- [Implementation Details](./implementation.md) - Technical details about the implementation
- [Extending PixelPop](./extending.md) - Guide for adding new features
- [Troubleshooting](./troubleshooting.md) - Solutions for common issues
- [Figma Plugin Plan](./figma-plugin-plan.md) - Implementation plan for Figma integration
- [Figma Plugin Testing](./figma-plugin-testing.md) - Guide for testing the Figma plugin

## Overview

PixelPop is a powerful pixel art creation tool built with React that provides a simple yet powerful interface for creating and editing pixel art. The application supports multiple tools, effects, and export options to create stunning pixel art for various purposes.

### Key Features

- **Drawing Tools**: Pencil, Eraser, Fill, and Selection tools for precise pixel editing
- **Effects**: Add visual effects like glow, custom pixel shapes, and corner radius
- **Export Options**: Export your pixel art as SVG, PNG, or JPG
- **Multiple Renderers**: Canvas and SVG rendering engines for different use cases
- **Touch Support**: Full support for touch devices with pinch-to-zoom and touch drawing
- **Figma Integration**: Export your pixel art directly to Figma (in development)

### Project Structure

- `src/components/`: React components organized by feature
- `src/hooks/`: Custom React hooks for shared functionality
- `src/utils/`: Utility functions and helper modules
- `src/styles/`: Global styles and theme definitions
- `src/test/`: Test configuration and utilities
- `figma-plugin/`: Figma plugin integration code

## Getting Started

To get started with PixelPop, refer to the main [README.md](../README.md) file for installation and usage instructions. 