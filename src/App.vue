<script setup lang="ts">
import { provide } from "vue"
import printModeStore from "./store/printMode"

import Layout from "./components/Layout.vue"

provide("printModeStore", printModeStore)
provide("printMode", printModeStore.state.printMode)
</script>

<template>
  <Layout />
</template>
