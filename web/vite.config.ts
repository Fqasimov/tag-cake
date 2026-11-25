import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `vite build` → normal production build for hosting (dist/).
// `vite build --mode artifact` → one self-contained HTML (JS, CSS and fonts inlined)
// for the shareable preview link; images and video stay as files beside it.
export default defineConfig(({ mode }) => {
  const artifact = mode === 'artifact'
  // Images and video live in public/ and are referenced by relative path, so templates must not bundle them.
  const vuePlugin = vue({ template: { transformAssetUrls: false } })
  return {
    base: './',
    plugins: artifact ? [vuePlugin, viteSingleFile({ removeViteModuleLoader: true })] : [vuePlugin],
    build: {
      outDir: artifact ? 'dist-artifact' : 'dist',
      copyPublicDir: !artifact,
      assetsInlineLimit: artifact ? 100_000_000 : 4096,
    },
  }
})
