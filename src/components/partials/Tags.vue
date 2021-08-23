<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Hakusanat</h2>
    <div class="flex flex-wrap justify-center items-center pb-3 pt-1">
      <div v-for="(t, i) in tags" :key="i" class="px-2" :style="getSize(t.count)">
        {{ t.tag }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue"
import { tags as tagsArray, Tags } from "../../assets/data/components/tags"

const tags = ref<Tags>(tagsArray())

nextTick(() => {
  tags.value.forEach((tag, i) => {
    tags.value[i].count = +(document.body.innerText.split(tag.tag).length - 1)
  })
})

const getSize = (count: number): string => `font-size: ${7 + 3.7 * count}px`
</script>
