<script setup lang="ts">
import { provide } from "vue"
// eslint-disable-next-line import/extensions, import/no-unresolved
import { useRegisterSW } from "virtual:pwa-register/vue"
import printModeStore from "./store/printMode"

import Layout from "./components/Layout.vue"

useRegisterSW({
  onRegistered() {
    // eslint-disable-next-line prefer-template
    console.log("💚 Serviceworker up and running!")
  },
  onRegisterError(error) {
    console.error("❌ SW registration error", error)
  }
})

provide("printModeStore", printModeStore)
provide("printMode", printModeStore.state.printMode)
</script>

<template>
  <Layout />
</template>
