# PixelPop Figma Plugin Implementation Plan

This document outlines the step-by-step process for converting PixelPop into a Figma plugin while maintaining the standalone web app functionality.

## 1. Branch Setup

- [ ] Create a new branch for Figma plugin development
  ```bash
  git checkout -b figma-plugin
  ```
- [ ] Push branch to remote repository for collaboration
  ```bash
  git push -u origin figma-plugin
  ```

## 2. Project Structure Setup

- [x] Create new directory for Figma-specific code
  ```bash
  mkdir -p figma-plugin/src
  ```
- [x] Create initial Figma plugin files:
  - [x] Create `figma-plugin/manifest.json` (plugin configuration)
  - [x] Create `figma-plugin/src/code.ts` (plugin main code)
  - [x] Create `figma-plugin/src/ui.html` (plugin UI wrapper)

## 3. Figma Plugin Configuration

- [x] Configure `manifest.json` with plugin information:
  - [x] Name, ID, and version
  - [x] Entry points for code and UI
  - [x] Plugin capabilities and permissions
  - [x] Menu item structure

## 4. Initial Build Setup

- [x] Create TypeScript configuration for the plugin (`tsconfig.json`)
- [x] Create Vite configuration for building the plugin (`vite.config.js`)
- [x] Update package.json with build scripts and dependencies

## 5. Development Workflow

To develop the Figma plugin:

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development build with auto-reload:
   ```bash
   npm run dev:figma
   ```

3. In Figma desktop app:
   - Open a new file
   - Go to Plugins > Development > Import plugin from manifest
   - Select the `manifest.json` file from the `figma-plugin` directory

4. For production build:
   ```bash
   npm run build:figma
   ```

## 6. Communication Layer

- [x] Implement message passing between UI and plugin code
  - [x] Define message types and interfaces
  - [x] Set up event listeners in plugin code
  - [x] Create UI message handling utilities
- [x] Test basic communication between UI and plugin

## 7. User Experience Flow

The PixelPop Figma plugin supports two primary workflows:

### Web App to Figma Export via Clipboard (MVP Approach)
1. User creates pixel art in the PixelPop web application
2. User clicks "Export to Figma" option in the Export modal
3. Data is copied to the clipboard in a special format
4. User switches to the Figma desktop app where the PixelPop plugin is open
5. User clicks "Paste from Clipboard" in the plugin
6. Pixel art is imported into Figma as rectangles, maintaining:
   - Exact pixel positions
   - Colors
   - Overall composition
7. User can now use the pixel art within their Figma designs

### Plugin-First Approach (Future Enhancement)
1. User opens Figma and activates the PixelPop plugin
2. User creates pixel art directly in the plugin or imports existing work
3. Art is immediately available in the Figma document

### Default Plugin State
- When not actively receiving data, the plugin shows a waiting state
- Simple interface with instructions and buttons to paste from clipboard or import test data
- Easy-to-follow workflow instructions for users

## 8. Export to Figma Feature (MVP)

- [x] Modify ExportModal.jsx to include "Export to Figma" option
  - [x] Add a new button for Figma export
  - [x] Update conditional rendering for better visibility
- [x] Create adapter utility for converting PixelPop data to Figma format
  - [x] Create `src/utils/figmaExport.js` with conversion function
  - [x] Add pixel shape and effects handling
- [x] Implement clipboard-based export mechanism
  - [x] Copy formatted pixel data to clipboard
  - [x] Add clear user instructions
- [x] Add new export method to App.jsx
  - [x] Create `handleExportToFigma` function with clipboard support
  - [x] Update ExportModal props to include the new method

### MVP Requirements for Export
- [x] Support basic pixel art export (single frame)
- [x] Create individual rectangles for each non-transparent pixel
- [x] Maintain exact pixel positions and colors
- [x] Group pixels in a named frame with appropriate dimensions
- [x] Provide basic error handling and feedback to user
- [x] Support square pixels only (no custom shapes in MVP)

## 9. Core Functionality Adaptation

- [ ] Identify reusable components from the web app
- [ ] Adapt the pixel grid system for Figma integration
- [ ] Modify the rendering system to support Figma node creation
- [x] Update the export system to communicate with Figma
  - [x] Convert pixel data to Figma-compatible format
  - [x] Create export to Figma functionality

## 10. Figma API Integration

- [x] Implement Figma node creation for pixel art
  - [x] Create frame container for pixel art
  - [x] Generate rectangle nodes for each pixel
  - [x] Apply correct colors and positions
- [ ] Handle user selection and positioning in Figma
- [ ] Optimize node creation for large pixel art pieces
- [ ] Implement error handling for API operations

## 11. UI Adaptation

- [x] Create a wrapper HTML file for the React app
- [ ] Adapt the PixelPop UI for the Figma plugin environment
  - [ ] Adjust UI layout for Figma's panel dimensions
  - [ ] Update styles to match Figma's design system
  - [ ] Remove or adapt features not applicable in Figma
- [ ] Add Figma-specific UI controls and options
- [ ] Test UI responsiveness in Figma's panel environment

## 12. Complete Build System

- [x] Configure Vite to bundle both UI and plugin code
- [ ] Set up asset handling and optimization
- [x] Create production build process
- [x] Test the built plugin in Figma

## 13. Testing Strategy

- [ ] Set up Figma plugin testing environment
- [ ] Create test cases for different pixel art imports
  - [ ] Test small pixel art grids
  - [ ] Test large pixel art grids
  - [ ] Test different color configurations
- [ ] Test edge cases and error handling
- [ ] Perform user testing with different workflows

## 14. Documentation

- [ ] Document Figma plugin architecture
- [ ] Create usage instructions for end-users
- [ ] Update main documentation to include Figma plugin information
- [ ] Create developer documentation for future maintenance

## 15. Deployment

- [ ] Prepare plugin for submission to Figma Community
  - [ ] Create plugin icon and cover image
  - [ ] Write plugin description and instructions
  - [ ] Prepare screenshots and examples
- [ ] Submit plugin for review
- [ ] Plan for updates and maintenance

## 16. Future Enhancements

- [ ] Two-way sync between Figma and PixelPop
- [ ] Import existing Figma designs as pixel art
- [ ] Additional Figma-specific features
- [ ] Integration with Figma's design system and variables
- [ ] Embedded simplified PixelPop editor in plugin UI

## Development Workflow Notes

- Develop on the figma-plugin branch
- Keep the main branch for the web app version only
- Merge shared improvements between branches as needed
- Use feature flags to conditionally enable Figma functionality
- Maintain backward compatibility with the standalone web app

## Next Steps (Implementation Priority)

1. ~~Create the Figma export utility file~~ ✅
2. ~~Update the ExportModal to include Figma export option~~ ✅
3. ~~Add Figma plugin detection in the web app~~ ✅
4. ~~Test basic communication between UI and plugin~~ ✅
5. ~~Implement clipboard-based export mechanism~~ ✅
   - ~~Copy pixel data to clipboard in the web app~~ ✅
   - ~~Add paste functionality to the Figma plugin~~ ✅
   - ~~Add validation and error handling~~ ✅
6. Test and refine the complete flow:
   - [ ] Test with different pixel art sizes
   - [ ] Test with different pixel shapes
   - [ ] Test with various browsers for clipboard compatibility
7. Polish the user experience:
   - [ ] Add success/failure feedback in the web app
   - [ ] Improve visual feedback in the Figma plugin
   - [ ] Add progress indicators for large pixel art imports
8. Documentation and distribution:
   - [ ] Update README with Figma plugin usage instructions
   - [ ] Create screenshots and examples
   - [ ] Prepare for Figma Community submission

---

Last updated: June 2024 