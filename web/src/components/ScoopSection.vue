<script setup lang="ts">
import StickerBadge from './StickerBadge.vue'
import { scoopCookie as scoop } from '../data/catalog'
</script>

<template>
  <section id="skup" class="sec sec--burgundy" aria-labelledby="skup-t">
    <div class="wrap scoop">
      <div v-reveal v-tilt class="scoop__img">
        <img :src="scoop.photo.src" :alt="scoop.photo.alt" :width="scoop.photo.width" :height="scoop.photo.height" loading="lazy" />
        <StickerBadge class="scoop__sticker" tone="caramel" :tilt="-10">QAŞIQLA YE!</StickerBadge>
      </div>
      <div class="scoop__txt">
        <h2 id="skup-t" v-reveal class="split" aria-label="Skup kuki">
          <span class="split__w" aria-hidden="true"><span style="--i: 0">Skup</span></span>
          <span class="split__w" aria-hidden="true"><span style="--i: 1">kuki</span></span>
        </h2>
        <p v-reveal="1" class="scoop__lead">Qabda bişirilir, qaşıqla yeyilir.</p>
        <p v-reveal="2">{{ scoop.description }}</p>
        <a v-reveal="3" class="btn btn--light" href="#sifaris">
          Skup kuki sifariş et
          <svg class="btn__arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>
