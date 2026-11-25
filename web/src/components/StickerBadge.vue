<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'caramel' | 'cream' | 'burgundy'; tilt?: number }>(), { tone: 'caramel', tilt: -8 })
</script>

<template>
  <span class="sticker" :class="`sticker--${tone}`" :style="{ '--tilt': `${tilt}deg` }" aria-hidden="true"><slot /></span>
</template>
