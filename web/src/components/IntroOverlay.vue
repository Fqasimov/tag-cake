<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { INTRO_MS, finishIntro, introActive, markIntroSeen } from '../intro'

let timer: number | undefined
const skip = () => {
  window.clearTimeout(timer)
  finishIntro()
}

onMounted(() => {
  if (!introActive.value) return
  markIntroSeen()
  timer = window.setTimeout(finishIntro, INTRO_MS)
  window.addEventListener('keydown', skip, { once: true })
})
onBeforeUnmount(() => {
  window.clearTimeout(timer)
  window.removeEventListener('keydown', skip)
})
</script>

<template>
  <!-- Wordmark rises, the ring of the round logo draws, then it opens onto the hero. -->
  <div v-if="introActive" class="intro" aria-hidden="true" @click="skip">
    <div class="intro__mark">
      <svg class="intro__ring" viewBox="0 0 200 200"><circle cx="100" cy="100" r="98" pathLength="1" /></svg>
      <img class="intro__word" src="img/logo-wordmark-light.svg" alt="" width="703" height="197" />
    </div>
  </div>
</template>
