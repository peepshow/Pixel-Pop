import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Plugin code (code.ts) must be built separately from UI
export default defineConfig({
  build: {
    // Output directory for the build
    outDir: 'figma-plugin/dist',
    emptyOutDir: true,
    // Build as library
    lib: {
      // Source entry file
      entry: resolve(__dirname, 'src/code.ts'),
      // Output file
      name: 'code',
      fileName: 'code',
      // Build as IIFE (immediately invoked function expression) for Figma
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        // No external dependencies for plugin code
        inlineDynamicImports: true,
        entryFileNames: '[name].js',
      },
    },
    // Minify production builds
    minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
    // Source maps for development
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  // Add a second Vite configuration for the UI part
  plugins: [
    {
      name: 'figma-ui-html',
      buildStart() {
        // Read HTML file
        const htmlContent = readFileSync(resolve(__dirname, 'src/ui.html'), 'utf-8');
        
        // The ui.html already contains the embedded JS in the file
        // No need to replace script tag - just use the HTML as is
        
        // Output the HTML file
        this.emitFile({
          type: 'asset',
          fileName: 'ui.html',
          source: htmlContent
        });
      }
    }
  ]
}); 