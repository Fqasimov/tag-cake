<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ id: string; title: string; lead: string; light?: boolean }>()
const words = computed(() => props.title.split(' '))
</script>

<template>
  <div class="sec__head" :class="{ 'sec__head--light': light }">
    <!-- Words rise out of their line, one after another -->
    <h2 :id="id" v-reveal class="split" :aria-label="title">
      <span v-for="(word, i) in words" :key="i" class="split__w" aria-hidden="true">
        <span :style="{ '--i': i }">{{ word }}</span>
      </span>
    </h2>
    <p v-reveal="2">{{ lead }}</p>
  </div>
</template>
