<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHead from './SectionHead.vue'
import StickerBadge from './StickerBadge.vue'
import { cakes } from '../data/catalog'
</script>

<template>
  <section id="tortlar" class="sec sec--beige" aria-labelledby="tortlar-t">
    <div class="wrap">
      <div class="cakes__head">
        <SectionHead
          id="tortlar-t"
          title="Tortlar"
          lead="Ad günləri və xüsusi günlər üçün. Rəngi, dizaynı və üzərindəki yazını birlikdə seçirik."
        />
        <StickerBadge class="cakes__sticker" tone="burgundy" :tilt="7">YAZINI SiZ SEÇiN</StickerBadge>
      </div>
      <div class="cakes">
        <ProductCard v-for="(item, i) in cakes" :key="item.id" :product="item" :delay="i" />
      </div>
    </div>
  </section>
</template>
