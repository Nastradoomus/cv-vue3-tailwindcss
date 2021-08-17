<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Koulutus</h2>
    <div v-for="e in education" :key="e.title">
      <h3>{{ e.title }}</h3>
      <span class="pl-1">({{ e.year }}) </span>
      <a :href="e.url">{{ e.school }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { education, Education } from "../../assets/data/components/education"

export default defineComponent({
  name: "Education",

  data(): { education: Education } {
    return {
      education
    }
  }
})
</script>
