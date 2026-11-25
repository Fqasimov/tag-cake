<script setup lang="ts">
// Circular text badge that turns slowly; uses the serif face because it has İ.
defineProps<{ text: string }>()
</script>

<template>
  <span class="spin" aria-hidden="true">
    <svg class="spin__ring" viewBox="0 0 120 120">
      <defs><path id="spinPath" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" /></defs>
      <text><textPath href="#spinPath" textLength="285">{{ text }}</textPath></text>
    </svg>
    <svg class="spin__star" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.2L12 17.7 5.8 21.4l1.6-7.2L2 9.5l7.1-.6z" /></svg>
  </span>
</template>
