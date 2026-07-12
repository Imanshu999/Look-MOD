import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      // JavaScript Obfuscator: Jo code ko ulte-seedhe aksharon me badlega
      obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.8,
        deadCodeInjection: true, // Faltu ka fake code add karega taaki hacker confuse ho jaye
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
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      sourcemap: false, // Browser se original source code (.tsx) ko bilkul hide kar dega
      minify: 'terser', // Sabse tight compression lagayega
      terserOptions: {
        compress: {
          drop_console: true, // Saare console.log automatic delete kar dega
          drop_debugger: true,
        },
      },
      cssMinify: true, // CSS file ko ek single compressed line me badal dega
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
