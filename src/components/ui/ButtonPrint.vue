<template>
  <div>
    <button
      class="fixed bottom-2 right-2 no-print"
      :class="{
        'text-green-500 border-green-500': printMode,
        'text-red-500 border-red-500': !printMode
      }"
    >
      <div class="flex items-center">
        <PrinterIcon class="h-4 w-4 mr-1" />
        {{ printButtonText }}
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { PrinterIcon } from "@heroicons/vue/solid"

export default defineComponent({
  name: "ButtonPrint",
  components: { PrinterIcon },
  props: {
    printMode: Boolean
  },
  computed: {
    printButtonText() {
      if (this.printMode) {
        return "Tulostus"
      }
      return "Normaali"
    }
  }
})
</script>
