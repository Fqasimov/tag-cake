<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHead from './SectionHead.vue'
import SpinBadge from './SpinBadge.vue'
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
      <article v-reveal v-tilt class="feature">
        <div class="feature__media">
          <img :src="sig.photo.src" :alt="sig.photo.alt" :width="sig.photo.width" :height="sig.photo.height" loading="lazy" />
          <span class="card__shine" aria-hidden="true" />
          <SpinBadge class="feature__badge" text="İMZA KUKİSİ ★ TAG CAKE ★ İMZA KUKİSİ ★ TAG CAKE ★" />
        </div>
        <div class="feature__txt">
          <h3>{{ sig.name }}</h3>
          <p>{{ sig.description }}</p>
          <a class="btn btn--burgundy" href="#sifaris">
            Sifariş et
            <svg class="btn__arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" /></svg>
          </a>
        </div>
      </article>
      <div class="cookies">
        <ProductCard v-for="(item, i) in cookies" :key="item.id" :product="item" :tall="i === 0" :delay="i" />
      </div>
    </div>
  </section>
</template>
