<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHead from './SectionHead.vue'
import { cakes } from '../data/catalog'
</script>

<template>
  <section id="tortlar" class="sec sec--beige" aria-labelledby="tortlar-t">
    <div class="wrap">
      <SectionHead
        id="tortlar-t"
        title="Tortlar"
        lead="Ad günləri və xüsusi günlər üçün. Rəngi, dizaynı və üzərindəki yazını birlikdə seçirik."
      />
      <div class="cakes">
        <ProductCard v-for="item in cakes" :key="item.id" :product="item" />
      </div>
    </div>
  </section>
</template>
