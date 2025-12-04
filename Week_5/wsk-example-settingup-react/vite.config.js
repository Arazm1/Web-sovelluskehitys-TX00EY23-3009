import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   base: '/~arazm/Web-sovelluskehitys_TX00EY23-3009_träöåpolkijgfd/Week_6/wsk_tailwind/wsk-example-settingup-react',
})
