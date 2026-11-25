<script setup lang="ts">
import type { Product } from '../data/catalog'

withDefaults(defineProps<{ product: Product; tall?: boolean }>(), { tall: false })
</script>

<template>
  <article class="card" :class="{ 'card--tall': tall }">
    <img
      :src="product.photo.src"
      :alt="product.photo.alt"
      :width="product.photo.width"
      :height="product.photo.height"
      loading="lazy"
      decoding="async"
    />
    <div class="card__txt">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
  </article>
</template>
