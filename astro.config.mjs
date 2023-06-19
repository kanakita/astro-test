import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    server: {
      open: true,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/app.js',
          assetFileNames: 'assets/css/style[extname]',
        }
      }
    }
  },
});
