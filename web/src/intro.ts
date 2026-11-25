import { ref } from 'vue'

/**
 * The opening sequence. index.html adds `intro-on` to <html> before first paint
 * (first visit, motion allowed) or `no-intro` otherwise; this module ends it.
 */
const root = document.documentElement
export const INTRO_MS = 3300
export const HERO_REVEAL_MS = 1700

export const introActive = ref(root.classList.contains('intro-on'))

export function finishIntro(): void {
  if (!introActive.value) return
  root.classList.remove('intro-on')
  root.classList.add('intro-done')
  introActive.value = false
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem('tc-intro', '1')
  } catch {
    /* storage unavailable: the intro simply plays again next time */
  }
}
