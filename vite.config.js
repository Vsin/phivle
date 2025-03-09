import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative paths for better compatibility
export default defineConfig({
  plugins: [react()],
  base: './',
});
