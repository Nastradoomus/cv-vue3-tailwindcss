<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Minä</h2>
    <div class="flex flex-col md:justify-evenly md:grid md:grid-cols-3 pb-3 pt-1">
      <div>
        <h3 class="text-center">{{ personal.about.title }}</h3>
        {{ personal.about.text }}
      </div>
      <div class="hidden md:flex justify-center pt-3">
        <img :src="personal.image.url" :alt="personal.image.alt" width="200" height="200" />
      </div>
      <div class="pt-3 md:pt-0">
        <h3 class="text-center">{{ personal.hobbies.title }}</h3>
        {{ personal.hobbies.text }}
      </div>
      <div class="flex justify-center pt-3 md:hidden">
        <img :src="personal.image.url" :alt="personal.image.alt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { personal, Personal } from "../../assets/data/components/personal"

export default defineComponent({
  name: "Personal",

  data(): { personal: Personal } {
    return {
      personal
    }
  }
})
</script>
<style scoped>
.none {
  display: none;
}
</style>
