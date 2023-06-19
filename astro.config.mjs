import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          assetFileNames: 'assets/index[extname]',
        }
      },
      minify: false
    },
  },
});
