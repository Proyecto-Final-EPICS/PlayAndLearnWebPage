import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PlayAndLearnWebPage/',
  plugins: [react()],
  test: {
    coverage: {
      all: true
    }
  },
})
