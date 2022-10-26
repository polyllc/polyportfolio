import { build, defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        all: path.resolve(__dirname, "all.html"),
        birthday: path.resolve(__dirname, "birthday.html"),
        fdphysics: path.resolve(__dirname, "fdphysics.html"),
        planeagement: path.resolve(__dirname, "planeagement.html"),
        polyforums: path.resolve(__dirname, "polyforums.html"),
        polyllc: path.resolve(__dirname, "polyllc.html")
      }
    }
  }
})
