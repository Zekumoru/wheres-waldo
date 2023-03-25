import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const packages = ['firebase'];
const manualChunks = (id: string) => {
  if (!id.includes('node_modules')) return;

  const packageName = packages.find((p) => id.includes(p));
  if (packageName) {
    return `vendor-${packageName}`;
  }

  return 'vendor';
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});
