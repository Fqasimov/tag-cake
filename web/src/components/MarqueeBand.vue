<script setup lang="ts">
// Display font has no İ/Ə, so words use the brand's lowercase-i styling and avoid ə.
const items = ['MARŞMELOU KUKi', 'SKUP KUKi', 'BRAUNi KUKi', 'OREO ÇiZKEYK', 'KUKi TARTLAR', 'BANAN-KARAMEL', 'TORTLAR']
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <template v-for="copy in 2" :key="copy">
        <span v-for="item in items" :key="`${copy}-${item}`" class="marquee__item">
          {{ item }}<svg class="marquee__star" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.2L12 17.7 5.8 21.4l1.6-7.2L2 9.5l7.1-.6z" /></svg>
        </span>
      </template>
    </div>
  </div>
</template>
