import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { cloudflare } from "@cloudflare/vite-plugin";

const settings = {
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false, // HTTPS を強制しない
      },
    },
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
    react(),
    cloudflare(),
  ],
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      server: settings.server,
      plugins: settings.plugins,
    };
  } else {
    return {
      plugins: settings.plugins,
    };
  }
});
