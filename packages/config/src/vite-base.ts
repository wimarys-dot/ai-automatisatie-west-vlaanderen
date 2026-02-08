import path from 'path';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';

export function createViteConfig(appDir: string, port: number): UserConfig {
  return {
    server: {
      port,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(appDir, 'src'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
}
