<script setup lang="ts">
import { contact } from '../config'
import { orderSteps } from '../data/catalog'
</script>

<template>
  <section id="sifaris" class="sec sec--burgundy order" aria-labelledby="sifaris-t">
    <div class="wrap">
      <h2 id="sifaris-t">Sifariş necə verilir</h2>
      <ol class="steps">
        <li v-for="step in orderSteps" :key="step.title">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
      <div class="order__cta">
        <a class="btn btn--light" :href="contact.whatsapp" target="_blank" rel="noopener">WhatsApp-da yaz</a>
        <a class="btn btn--ghost" :href="contact.instagram" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </section>
</template>
