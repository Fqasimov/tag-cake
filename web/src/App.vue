<script setup lang="ts">
import IntroOverlay from './components/IntroOverlay.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBand from './components/MarqueeBand.vue'
import CookiesSection from './components/CookiesSection.vue'
import ScoopSection from './components/ScoopSection.vue'
import CheesecakeSection from './components/CheesecakeSection.vue'
import CakesSection from './components/CakesSection.vue'
import OrderSection from './components/OrderSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip" href="#esas">Əsas məzmuna keç</a>
  <IntroOverlay />
  <SiteHeader />
  <main id="esas">
    <HeroSection />
    <MarqueeBand />
    <CookiesSection />
    <ScoopSection />
    <CheesecakeSection />
    <CakesSection />
    <OrderSection />
  </main>
  <SiteFooter />
</template>
