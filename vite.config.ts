import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load from .env files for local development
    const env = loadEnv(mode, '.', '');
    // Use process.env for Vercel (which provides env vars during build)
    // Fallback to loaded env for local development
    const geminiApiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || '';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(geminiApiKey),
        'process.env.API_KEY': JSON.stringify(geminiApiKey) // Keep for backward compatibility
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
