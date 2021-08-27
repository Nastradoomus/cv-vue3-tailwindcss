<template>
  <div :class="{ 'container p-2 mx-auto': !printMode }">
    <BreakPoints v-if="developerMode" />
    <PrintButton :print-mode="printMode" @click="setPrintMode()" />
    <Print v-if="printMode" />
    <Grid v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue"

import BreakPoints from "./helpers/Breakpoints.vue"
import PrintButton from "./ui/ButtonPrint.vue"
import Grid from "./layout/Grid.vue"
import Print from "./layout/Print.vue"
import { PrintModeStore } from "../store/printMode"

export default defineComponent({
  name: "Layout",
  components: {
    BreakPoints,
    PrintButton,
    Grid,
    Print
  },
  setup() {
    const printModeStore: PrintModeStore | undefined = inject("printModeStore")
    const printMode = computed(() => printModeStore?.state.printMode)
    const developerMode = computed(() => process.env.NODE_ENV === "development")

    printModeStore?.setters.disablePrintMode()
    function setPrintMode(): void {
      try {
        printModeStore?.setters.togglePrintMode()
      } catch (err) {
        console.error(err)
      }
    }
    return {
      printMode,
      developerMode,
      setPrintMode
    }
  }
})
</script>
