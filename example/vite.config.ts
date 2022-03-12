import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // https://github.com/vitejs/vite/issues/6215#issuecomment-1064247764
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
});
