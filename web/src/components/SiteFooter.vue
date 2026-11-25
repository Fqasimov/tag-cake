<script setup lang="ts">
import { nav } from '../config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="foot__row">
        <nav class="foot__nav" aria-label="Alt menyu">
          <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
          <a href="#sifaris">Sifariş</a>
        </nav>
        <p class="foot__copy">© {{ year }} Tag Cake</p>
      </div>
      <img v-reveal class="foot__mark" src="img/logo-wordmark-light.svg" alt="Tag Cake" width="703" height="197" />
    </div>
  </footer>
</template>
