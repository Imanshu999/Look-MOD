import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';
import Sitemap from 'vite-plugin-sitemap'; // यहाँ सही इम्पोर्ट है

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
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
    }),
    Sitemap({ // यहाँ Sitemap का इस्तेमाल करें
      hostname: 'https://look-mod.vercel.app',
      dynamicRoutes: ['/app/capcut'], 
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
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
