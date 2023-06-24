import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import * as fs from 'fs'
import { join } from 'path'

const manifest = JSON.parse(fs.readFileSync(join(__dirname, 'manifest.json'), 'utf8'))

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
})