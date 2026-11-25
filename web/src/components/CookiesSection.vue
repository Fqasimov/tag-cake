<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHead from './SectionHead.vue'
import { cookies, signatureCookie as sig } from '../data/catalog'
</script>

<template>
  <section id="kukiler" class="sec sec--ivory" aria-labelledby="kukiler-t">
    <div class="wrap">
      <SectionHead
        id="kukiler-t"
        title="Kukilər"
        lead="Böyük, qalın və içi dolu. Hər kukinin öz xəmiri, öz içliyi və öz üst bəzəyi var."
      />
      <article class="feature">
        <img :src="sig.photo.src" :alt="sig.photo.alt" :width="sig.photo.width" :height="sig.photo.height" loading="lazy" />
        <div class="feature__txt">
          <h3>{{ sig.name }}</h3>
          <p>{{ sig.description }}</p>
          <a class="link" href="#sifaris">Sifariş et</a>
        </div>
      </article>
      <div class="cookies">
        <ProductCard v-for="(item, i) in cookies" :key="item.id" :product="item" :tall="i === 0" />
      </div>
    </div>
  </section>
</template>
