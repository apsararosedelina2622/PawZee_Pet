import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host : '0.0.0.0',
    port : 5000,
    allowedHosts: ['pawzee-pet-shop-admin.onrender.com']
  }
})
