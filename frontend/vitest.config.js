import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({mode}) => ({
  plugins: [svelte(), svgr()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@modules': path.resolve(__dirname, 'src/components/modules'),
      '@views': path.resolve(__dirname, 'src/components/views'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}))
