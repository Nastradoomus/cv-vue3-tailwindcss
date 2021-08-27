<template>
  <div class="pb-3 pt-1 pagebreak">
    <h2 class="text-center pb-1">Portfolio</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3">
      <div v-for="p in portfolio" :key="p.title" class="pb-3 pt-1">
        <div v-if="printMode" class="flex justify-center">
          <img
            :src="p.image.src"
            :alt="p.image.alt"
            :class="p.image.class"
            style="transform: scale(0.6)"
          />
          <div v-if="printMode" class="text-lg font-bold pt-2 pb-1">
            {{ p.title + " (" + $stripHttps(p.url) + ")" }}
            <span class="block whitespace-nowrap text-lg tracking-widest"> ({{ p.year }})</span>
          </div>
        </div>
        <div v-if="!printMode">
          <img
            :src="p.image.src"
            :alt="p.image.alt"
            :class="p.image.class"
            width="72"
            height="72"
          />
          <a :href="p.url" class="text-lg font-bold pt-2 pb-1">{{ p.title }}</a>
          <span class="whitespace-nowrap text-lg tracking-widest"> ({{ p.year }})</span>
        </div>
        <div v-html="p.html" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import { PrintModeStore } from "../../store/printMode"
import { portfolio, Portfolio } from "../../assets/data/components/portfolio"

export default defineComponent({
  name: "Portfolio",
  setup() {
    const printModeStore: PrintModeStore | undefined = inject("printModeStore")
    let printMode
    if (printModeStore?.state) {
      printMode = printModeStore.state.printMode
    }
    return { printMode }
  },
  data(): { portfolio: Portfolio } {
    return {
      portfolio
    }
  }
})
</script>
