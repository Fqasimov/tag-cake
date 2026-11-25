<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { nav } from '../config'

const open = ref(false)
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="top">
    <div class="top__in">
      <a class="top__logo" href="#" aria-label="Tag Cake — ana səhifə">
        <img src="img/logo-wordmark-light.svg" alt="Tag Cake" width="703" height="197" />
      </a>
      <nav id="menyu" class="top__nav" :class="{ open }" aria-label="Əsas menyu" @click="open = false">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a class="btn btn--light btn--sm" href="#sifaris">Sifariş et</a>
      </nav>
      <button class="top__toggle" type="button" :aria-expanded="open" aria-controls="menyu" @click="open = !open">
        {{ open ? 'Bağla' : 'Menyu' }}
      </button>
    </div>
  </header>
</template>
