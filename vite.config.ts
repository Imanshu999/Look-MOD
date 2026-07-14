import tailwindcss from '@tailwindcss/vite'; // यह सही है
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(), // यहाँ () लगाना जरूरी है क्योंकि यह एक फंक्शन है
      obfuscator({
        // ... बाकी आपका कोड वही रहेगा
        compact: true,
        controlFlowFlattening: true,
        // ... बाकी सेटिंग्स
      })
    ],
    // ... बाकी कोड
  };
});
