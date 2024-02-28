import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@modules': path.resolve(__dirname, 'src/components/modules'),
      '@views': path.resolve(__dirname, 'src/components/views'),
    }
  }
});
