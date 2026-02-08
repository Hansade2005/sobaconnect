import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualEditorPlugin } from './vite-plugin-visual-editor'
import dyadTagger from '@dyad-sh/react-vite-component-tagger'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Component Tagger Plugin - enhances visual editor source mapping
    // Set VITE_ENABLE_VISUAL_EDITOR=true to activate
    process.env.VITE_ENABLE_VISUAL_EDITOR === 'true' && dyadTagger(),
    // Visual Editor Plugin - enables source mapping for visual editing
    // Set VITE_ENABLE_VISUAL_EDITOR=true to activate
    process.env.VITE_ENABLE_VISUAL_EDITOR === 'true' && visualEditorPlugin(),
  ].filter(Boolean),
  define: {
    // Make NODE_ENV available in the app for debugging system
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 3000,
    strictPort: true, // Ensure port 3000 is used
    hmr: {
      host: 'localhost', // HMR host for development
    },
    cors: true, // Enable CORS for external access
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.e2b.app', // Allow all E2B sandbox domains
      '3000-*.e2b.app', // Allow E2B preview domains
    ],
  },
})