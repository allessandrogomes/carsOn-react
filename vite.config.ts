import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [react(), WindiCSS(), basicSsl()],
  server: {
    https: {
      key: './server.key',
      cert: './server.cert',
    },
  },
})
