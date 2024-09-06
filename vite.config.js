import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


///addd to package .json
//"homepage": "https://megabyte-webdev.github.io/olabisionabanjouniversitywithreact.com/",
// add to script
// "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"