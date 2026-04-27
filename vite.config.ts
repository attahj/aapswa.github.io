import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/repository-name/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
 
