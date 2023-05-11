import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        dark: path.resolve('src', 'dark.ts'),
        light: path.resolve('src', 'light.ts'),
        shared: path.resolve('src', 'shared.ts'),
      },
    }
  },
});