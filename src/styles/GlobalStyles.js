import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Backgrounds */
    --bg-primary: #121212;        /* Very dark charcoal (Canvas) */
    --rgb-bg-primary: 18, 18, 18;
    --bg-secondary: #1E1E1E;    /* Dark charcoal (UI elements) */
    --rgb-bg-secondary: 30, 30, 30;
    --bg-tertiary: #2C2C2C;     /* Medium-dark charcoal (Input tracks) */
    --rgb-bg-tertiary: 44, 44, 44;
    --bg-hover: #3A3A3A;         /* Hover grey */

    /* Text */
    --text-primary: #F0F0F0;      /* Off-white */
    --text-secondary: #AAAAAA;    /* Light grey */
    --text-accent: #FFFFFF;       /* White text on accent */

    /* Borders */
    --border-color: #3A3A3A;      /* Subtle grey border */
    --rgb-border-color: 58, 58, 58;
    --border-accent: #E6007A;     /* Accent pink border */

    /* Accents */
    --accent-color: #E6007A;       /* Vibrant Pink/Magenta */
    --rgb-accent-color: 230, 0, 122;
    --accent-hover: #FF33A1;      /* Brighter pink hover */

    /* Other */
    --switch-handle: #F0F0F0;     /* Off-white handle */
    --input-bg: var(--bg-secondary); /* Use UI element bg for inputs */
    --input-text: var(--text-primary);
    --button-text: var(--text-primary);

    /* Fonts (Example - if you want to standardize) */
    /* --font-family-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    /* --font-size-base: 1rem; */
    /* --font-size-small: 0.85rem; */
    /* --font-size-label: 0.8rem; */

    /* Spacing (Example - if you want to standardize) */
    /* --space-xs: 0.25rem; */
    /* --space-sm: 0.5rem; */
    /* --space-md: 1rem; */
    /* --space-lg: 1.5rem; */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary); /* Uses the darkest color now */
    color: var(--text-primary);
    line-height: 1.5;
    height: 100%; /* Add height 100% to body */
    overflow: hidden; /* Prevent body scrolling */
  }

  #root { /* Assuming your app mounts to an element with id="root" */
    height: 100%;
  }

  /* ReactCrop styles */
  .ReactCrop {
    position: relative;
    display: inline-block;
    cursor: crosshair;
    touch-action: none;
  }

  .ReactCrop__crop-selection {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: crosshair;
    touch-action: none;
  }

  .ReactCrop__drag-handle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: move;
    touch-action: none;
  }

  .ReactCrop__drag-handle.ord-n {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactCrop__drag-handle.ord-e {
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
  }

  .ReactCrop__drag-handle.ord-s {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactCrop__drag-handle.ord-w {
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  .ReactCrop__drag-handle.ord-ne {
    top: -5px;
    right: -5px;
  }

  .ReactCrop__drag-handle.ord-nw {
    top: -5px;
    left: -5px;
  }

  .ReactCrop__drag-handle.ord-se {
    bottom: -5px;
    right: -5px;
  }

  .ReactCrop__drag-handle.ord-sw {
    bottom: -5px;
    left: -5px;
  }

  .ReactCrop__image {
    max-width: 100%;
    max-height: 70vh;
    display: block;
  }

  .ReactCrop__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;

export default GlobalStyles; 