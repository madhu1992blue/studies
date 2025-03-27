import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyLib',
      fileName: (format) => `mylib.${format}.js`,
    }
  }
});
