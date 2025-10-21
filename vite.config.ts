import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 Remove all 'css' configuration to simplify the build process.
  // Vite will now rely on the presence of tailwind.config.cjs 
  // and the import in src/index.css to automatically compile Tailwind.
});
