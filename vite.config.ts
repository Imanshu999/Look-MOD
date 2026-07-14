import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';
import { ViteSitemap } from 'vite-plugin-sitemap'; // यहाँ प्लगइन इम्पोर्ट किया है

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
    ViteSitemap({ // यहाँ प्लगइन को ऐड कर दिया है
      hostname: 'https://look-mod.vercel.app',
      dynamicRoutes: ['/app/capcut'], // अपने अन्य ऐप्स के पाथ यहाँ जोड़ते रहें
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
