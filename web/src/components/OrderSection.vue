<script setup lang="ts">
import { contact } from '../config'
import { orderSteps } from '../data/catalog'
</script>

<template>
  <section id="sifaris" class="sec sec--burgundy order" aria-labelledby="sifaris-t">
    <div class="wrap">
      <h2 id="sifaris-t" v-reveal class="split" aria-label="Sifariş necə verilir">
        <span v-for="(w, i) in ['Sifariş', 'necə', 'verilir']" :key="w" class="split__w" aria-hidden="true">
          <span :style="{ '--i': i }">{{ w }}</span>
        </span>
      </h2>
      <ol class="steps">
        <li v-for="(step, i) in orderSteps" :key="step.title" v-reveal="i + 1">
          <span class="steps__n" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
      <div v-reveal="4" class="order__cta">
        <a class="btn btn--light" :href="contact.whatsapp" target="_blank" rel="noopener">
          WhatsApp-da yaz
          <svg class="btn__arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" /></svg>
        </a>
        <a class="btn btn--ghost" :href="contact.instagram" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </section>
</template>
