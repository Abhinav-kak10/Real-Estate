import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // to make proxy to localhost:3000 when we write api
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
