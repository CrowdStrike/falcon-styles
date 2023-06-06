import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('main.js'),
      name: 'toucan-styles',
    },
  },
});