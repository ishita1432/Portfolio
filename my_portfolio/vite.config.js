import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define : {
    'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
      'process.env.REACT_APP_TEMPLATE_ID': JSON.stringify(process.env.VITE_TEMPLATE_ID),
      'process.env.REACT_APP_USER_ID': JSON.stringify(process.env.VITE_USER_ID),
  }
})
