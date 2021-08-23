<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center pb-1">Syventävät opinnot</h2>
    <div v-for="(course, i) in courses" :key="i" class="flex flex-col">
      <div class="text-center pb-1" v-html="course.preface" />
      <table class="table-auto text-xs sm:text-base">
        <thead>
          <tr class="font-bold text-left">
            <th>Koulu</th>
            <th>Kurssi</th>
            <th>Opintopisteet / Kreditit</th>
            <th>Päivämäärä</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in course.courses" :key="c.course">
            <td class="font-bold">
              {{ c.school }}
            </td>
            <td>
              <a v-if="c.url" :href="c.url"> {{ c.course }}</a>
              <span v-else>{{ c.course }} </span>
            </td>
            <td>{{ c.credits }}</td>
            <td>{{ c.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { courses, Courses } from "../../assets/data/components/courses"

export default defineComponent({
  name: "Courses",

  data(): { courses: Courses } {
    return {
      courses
    }
  }
})
</script>
<style lang="postcss" scoped>
tr:nth-child(2n-1) {
  @apply bg-gray-200;
}
th {
  @apply bg-white;
}
td,
th {
  @apply p-1 sm:p-2;
  hyphens: auto;
}
</style>
