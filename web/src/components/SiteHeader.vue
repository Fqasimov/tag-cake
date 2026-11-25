<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { nav } from '../config'

const open = ref(false)
const solid = ref(false)

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}
const onScroll = () => {
  solid.value = window.scrollY > 40
}
onMounted(() => {
  onScroll()
  window.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- Transparent over the hero video, solid burgundy once the page scrolls. -->
  <header class="top" :class="{ 'top--solid': solid || open }">
    <div class="top__in">
      <a class="top__logo" href="#" aria-label="Tag Cake — ana səhifə">
        <img src="img/logo-wordmark-light.svg" alt="Tag Cake" width="703" height="197" />
      </a>
      <nav id="menyu" class="top__nav" :class="{ open }" aria-label="Əsas menyu" @click="open = false">
        <a v-for="item in nav" :key="item.href" class="top__link" :href="item.href">{{ item.label }}</a>
        <a class="btn btn--light btn--sm" href="#sifaris">Sifariş et</a>
      </nav>
      <button class="top__toggle" type="button" :aria-expanded="open" aria-controls="menyu" @click="open = !open">
        {{ open ? 'Bağla' : 'Menyu' }}
      </button>
    </div>
  </header>
</template>
