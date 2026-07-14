import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), // यहाँ () लगाना सबसे जरूरी है
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.8,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      numbersToExpressions: true,
      simplify: true,
      stringArray: true,
      stringArrayThreshold: 0.8,
      splitStrings: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // यहाँ ./ का ध्यान रखें
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssMinify: true,
  },
});
