import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/Community-Chat/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
