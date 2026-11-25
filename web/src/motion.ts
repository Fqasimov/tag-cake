import type { App, Directive } from 'vue'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

/* ---------- v-reveal: rise into place the first time an element scrolls into view ----------
 * Usage: v-reveal, or v-reveal="2" to stagger (each step = 90ms).
 * Content is only hidden once JS runs and motion is allowed; anything already on screen
 * is revealed on the first observer callback. */
let observer: IntersectionObserver | null = null
function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (reduceMotion() || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    el.style.setProperty('--d', `${(binding.value ?? 0) * 90}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

/* ---------- v-tilt: card leans a few degrees toward the pointer ---------- */
const MAX_TILT = 5

export const vTilt: Directive<HTMLElement> = {
  mounted(el) {
    if (reduceMotion() || !finePointer()) return
    let frame = 0
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${(x * MAX_TILT * 2).toFixed(2)}deg`)
        el.style.setProperty('--rx', `${(-y * MAX_TILT * 2).toFixed(2)}deg`)
        el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    ;(el as HTMLElement & { _tiltOff?: () => void })._tiltOff = () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  },
  unmounted(el) {
    ;(el as HTMLElement & { _tiltOff?: () => void })._tiltOff?.()
  },
}

export function installMotion(app: App): void {
  app.directive('reveal', vReveal)
  app.directive('tilt', vTilt)
}
