<script setup lang="ts">
import type { Product } from '../data/catalog'

withDefaults(defineProps<{ product: Product; tall?: boolean; delay?: number }>(), { tall: false, delay: 0 })
</script>

<template>
  <article v-reveal="delay" v-tilt class="card" :class="{ 'card--tall': tall }">
    <div class="card__media">
      <img
        :src="product.photo.src"
        :alt="product.photo.alt"
        :width="product.photo.width"
        :height="product.photo.height"
        loading="lazy"
        decoding="async"
      />
      <span class="card__shine" aria-hidden="true" />
      <a class="card__cta" href="#sifaris" :aria-label="`${product.name} — sifariş et`">
        Sifariş et
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" /></svg>
      </a>
    </div>
    <div class="card__txt">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
  </article>
</template>
