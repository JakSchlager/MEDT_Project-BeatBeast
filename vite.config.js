import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:80/Uebungen/Sommersemester/MEDT_Project-BeatBeast_Backend/api/",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "")
        },

        
      },
    },
  },
});