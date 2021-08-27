<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center pb-1">Työkokemus</h2>
    <div class="sm:grid sm:grid-cols-2 sm:gap-2 pb-3 pt-1">
      <div v-for="(e, i) in experience" :key="i" class="pb-3">
        <div class="text-lg pt-2 pb-1 text-center">
          <a v-if="e.url" :href="e.url" class="font-bold"> {{ e.title }}</a>
          <h3 v-else class="inline-block py-0">{{ e.title }}</h3>
          <span class="whitespace-nowrap text-lg tracking-widest"> ( {{ e.year }} )</span>
        </div>
        <div v-html="e.content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import { experience, Experience } from "../../assets/data/components/experience"
import { PrintModeStore } from "../../store/printMode"

export default defineComponent({
  name: "Experience",

  setup() {
    const printModeStore: PrintModeStore | undefined = inject("printModeStore")
    let printMode
    if (printModeStore?.state) {
      printMode = printModeStore.state.printMode
    }
    return { printMode }
  },
  data(): { experience: Experience } {
    return {
      experience
    }
  }
})
</script>
