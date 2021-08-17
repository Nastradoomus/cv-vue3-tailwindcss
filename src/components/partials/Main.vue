<template>
  <div class="text-center pb-2">
    <h1 class="tracking-widest">{{ main.name }}</h1>
    <h2 class="font-normal">
      <span v-for="(title, i) in main.titles" :key="title + i"
        >{{ title }}<span v-if="i < main.titles.length - 1">, </span>
      </span>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { main, Main } from "../../assets/data/components/main"

export default defineComponent({
  name: "Main",

  data(): { main: Main } {
    return {
      main
    }
  }
})
</script>
