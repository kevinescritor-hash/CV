import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANTE: Si tu repositorio en GitHub no se llama "CV", 
// cambia '/CV/' por '/NombreDeTuRepo/'
export default defineConfig({
  plugins: [react()],
  base: '/CV/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});