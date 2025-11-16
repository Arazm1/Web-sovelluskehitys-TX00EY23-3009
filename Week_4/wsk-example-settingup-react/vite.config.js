import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  //base: '/~arazm/Web-sovelluskehitys_TX00EY23-3009_träöåpolkijgfd/Week_4/wsk_routing/wsk-example-settingup-react/',

})
