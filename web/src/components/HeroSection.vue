<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { HERO_REVEAL_MS, introActive } from '../intro'

const video = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const el = video.value
  if (!el) return
  // Lighter file on phones; start playing as the intro opens onto the hero.
  el.src = window.innerWidth < 700 ? 'media/hero-arch-720.mp4' : 'media/hero-arch.mp4'
  const play = () => el.play().catch(() => {})
  if (introActive.value) window.setTimeout(play, HERO_REVEAL_MS)
  else play()
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__stage">
      <h1 id="hero-title" class="sr-only">Marşmelou kuki</h1>
      <!-- Title bends along the top of the dome: circle centred on the arch, radius 548 of 1000. -->
      <svg class="hero__arc" viewBox="-200 -190 1400 700" aria-hidden="true">
        <path id="arc" d="M -48 500 A 548 548 0 0 1 1048 500" fill="none" />
        <text><textPath href="#arc" startOffset="50%" text-anchor="middle">Marşmelou kuki</textPath></text>
      </svg>
      <div class="hero__arch">
        <video
          ref="video"
          class="hero__video"
          muted
          playsinline
          loop
          preload="metadata"
          poster="media/hero-arch-poster.webp"
          aria-label="Marşmelou kukinin iki yerə bölünməsi"
        />
      </div>
    </div>
    <div class="hero__copy">
      <p class="hero__lead">Qızardılmış marşmelou, şokolad və bölünəndə uzanan yumşaq iç. Tag Cake-in imza kukisi.</p>
      <div class="hero__cta">
        <a class="btn btn--light" href="#sifaris">Sifariş et</a>
        <a class="btn btn--ghost" href="#kukiler">Menyuya bax</a>
      </div>
    </div>
  </section>
</template>
