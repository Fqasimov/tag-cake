<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { HERO_REVEAL_MS, introActive } from '../intro'

/** Stylised like the brand lettering: lowercase i inside capitals. */
const TITLE = 'MARŞMELOU KUKi'

const hero = ref<HTMLElement | null>(null)
const video = ref<HTMLVideoElement | null>(null)
const titleWrap = ref<HTMLElement | null>(null)
const ruler = ref<SVGTextElement | null>(null)

const size = ref({ w: 1440, h: 900 })
/** Rendered title length per 1px of font size; measured once the font has loaded. */
const lengthPerPx = ref(9.4)

/**
 * The title runs along the top of a circle centred under the cookie.
 * Wide screens: a gentle, wide arc. Phones: a tighter arc so the letters stay large.
 */
const arc = computed(() => {
  const { w, h } = size.value
  const narrow = w < 700
  // Wide screens: a long, shallow arch. Phones: tighter so the letters stay large.
  const radius = narrow ? w * 0.44 : Math.min(w * 0.78, 1500)
  const sweep = narrow ? 1.12 : 0.58 // half-angle in radians the text may occupy
  const fontSize = Math.min((2 * sweep * radius) / lengthPerPx.value, narrow ? 80 : 170, h * 0.18)
  const top = narrow ? 104 : 92 // clears the header
  const baseline = top + fontSize * 0.74
  const cx = w / 2
  const cy = baseline + radius
  return {
    fontSize,
    d: `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`,
  }
})

let resizeObs: ResizeObserver | null = null
let frame = 0

function onScroll() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const h = size.value.h
    const y = Math.min(window.scrollY, h)
    // Title drifts up and fades; the video eases in a little. Transform/opacity only.
    titleWrap.value?.style.setProperty('--lift', `${(-y * 0.28).toFixed(1)}px`)
    titleWrap.value?.style.setProperty('--fade', `${Math.max(0, 1 - y / (h * 0.75)).toFixed(3)}`)
    video.value?.style.setProperty('--zoom', `${(1 + (y / h) * 0.08).toFixed(4)}`)
  })
}

onMounted(() => {
  const el = hero.value
  const v = video.value
  if (!el || !v) return

  resizeObs = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect
    size.value = { w: Math.round(width), h: Math.round(height) }
  })
  resizeObs.observe(el)

  document.fonts?.ready.then(() => {
    const len = ruler.value?.getComputedTextLength()
    if (len) lengthPerPx.value = len / 100
  })

  v.src = window.innerWidth < 900 ? 'media/hero-full-1280.mp4' : 'media/hero-full.mp4'
  const play = () => v.play().catch(() => {})
  if (introActive.value) window.setTimeout(play, HERO_REVEAL_MS)
  else play()

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  resizeObs?.disconnect()
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section ref="hero" class="hero" aria-labelledby="hero-title">
    <video
      ref="video"
      class="hero__video"
      muted
      playsinline
      loop
      preload="metadata"
      poster="media/hero-full-poster.webp"
      aria-label="Marşmelou kukinin iki yerə bölünməsi"
    />
    <div class="hero__scrim" aria-hidden="true" />

    <h1 id="hero-title" class="sr-only">Marşmelou kuki</h1>

    <div ref="titleWrap" class="hero__titleWrap" aria-hidden="true">
      <div class="hero__title">
        <!-- Frosted glass: blurs the video behind it, cut to the letter shapes. -->
        <div class="hero__glass" />
        <svg class="hero__arc" :viewBox="`0 0 ${size.w} ${size.h}`">
          <defs>
            <path id="heroArc" :d="arc.d" />
            <clipPath id="heroTextClip" clipPathUnits="userSpaceOnUse">
              <text class="hero__text" :font-size="arc.fontSize">
                <textPath href="#heroArc" startOffset="50%" text-anchor="middle">{{ TITLE }}</textPath>
              </text>
            </clipPath>
            <linearGradient id="heroSheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#fff" stop-opacity=".5" />
              <stop offset=".45" stop-color="#fff" stop-opacity=".1" />
              <stop offset="1" stop-color="#fff" stop-opacity=".28" />
            </linearGradient>
          </defs>
          <!-- Sheen and bright rim on top of the glass -->
          <text class="hero__text hero__text--face" :font-size="arc.fontSize">
            <textPath href="#heroArc" startOffset="50%" text-anchor="middle">{{ TITLE }}</textPath>
          </text>
          <text ref="ruler" class="hero__text hero__ruler" font-size="100" x="-9999" y="-9999">{{ TITLE }}</text>
        </svg>
      </div>
    </div>

    <div class="hero__bottom">
      <p class="hero__lead">Qızardılmış marşmelou, şokolad və bölünəndə uzanan yumşaq iç. Tag Cake-in imza kukisi.</p>
      <div class="hero__cta">
        <a class="btn btn--light" href="#sifaris">
          Sifariş et
          <svg class="btn__arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" /></svg>
        </a>
        <a class="btn btn--glass" href="#kukiler">Menyuya bax</a>
      </div>
    </div>
  </section>
</template>
