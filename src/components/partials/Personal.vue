<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Minä</h2>
    <div class="flex justify-center py-3 md:hidden">
      <img :src="personal.image.url" :alt="personal.image.alt" width="200" height="200" />
    </div>
    <div class="flex flex-col md:justify-evenly md:grid md:grid-cols-3 pb-3 pt-1">
      <span v-html="personal.text" />
      <div class="hidden md:flex justify-center pt-3">
        <div>
          <img :src="personal.image.url" :alt="personal.image.alt" width="200" height="200" />
        </div>
      </div>
      <div class="pt-3 md:pt-0">
        <span v-html="personal.more" />
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
