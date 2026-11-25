<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHead from './SectionHead.vue'
import { cheesecakesAndTarts } from '../data/catalog'
</script>

<template>
  <section id="cizkeyk" class="sec sec--ivory" aria-labelledby="cizkeyk-t">
    <div class="wrap">
      <SectionHead
        id="cizkeyk-t"
        title="Çizkeyk və tartlar"
        lead="Kuki əsası üzərində yüngül krem, şokolad örtüyü altında yumşaq çizkeyk."
      />
      <div class="duo">
        <ProductCard v-for="(item, i) in cheesecakesAndTarts" :key="item.id" :product="item" :tall="i === 0" />
      </div>
    </div>
  </section>
</template>
