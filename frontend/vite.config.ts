import {defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false,
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '../**/*',
        '../resources',
        '../resources/*.md',
        'resources/**/*',        
      ],
    },
  },
  plugins: [vue()],
})
