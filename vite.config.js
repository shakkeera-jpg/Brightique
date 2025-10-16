import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
   theme: {
    extend: {
      fontFamily: {
        logo: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),

  ],
  
})
