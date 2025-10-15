import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.endsWith('.js') || id.includes('node_modules')) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react({
      include: '**/*.{jsx,tsx,js,ts}',
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
});
