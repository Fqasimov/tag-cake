<script setup lang="ts">
import { scoopCookie as scoop } from '../data/catalog'
</script>

<template>
  <section id="skup" class="sec sec--burgundy" aria-labelledby="skup-t">
    <div class="wrap scoop">
      <div class="scoop__img">
        <img :src="scoop.photo.src" :alt="scoop.photo.alt" :width="scoop.photo.width" :height="scoop.photo.height" loading="lazy" />
      </div>
      <div class="scoop__txt">
        <h2 id="skup-t">{{ scoop.name }}</h2>
        <p class="scoop__lead">Qabda bişirilir, qaşıqla yeyilir.</p>
        <p>{{ scoop.description }}</p>
        <a class="btn btn--light" href="#sifaris">Skup kuki sifariş et</a>
      </div>
    </div>
  </section>
</template>
