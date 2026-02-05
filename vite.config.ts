
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CV/', // Ruta base para GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Limpia la carpeta dist antes de construir
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
