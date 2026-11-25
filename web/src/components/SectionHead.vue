<script setup lang="ts">
defineProps<{ id: string; title: string; lead: string }>()
</script>

<template>
  <div class="sec__head">
    <h2 :id="id">{{ title }}</h2>
    <p>{{ lead }}</p>
  </div>
</template>
