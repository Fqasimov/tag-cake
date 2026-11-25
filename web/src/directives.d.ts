import type { vReveal, vTilt } from './motion'

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof vReveal
    vTilt: typeof vTilt
  }
}

export {}
