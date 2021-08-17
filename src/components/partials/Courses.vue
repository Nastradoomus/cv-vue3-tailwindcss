<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center pb-1">Syventävät opinnot</h2>
    <div v-for="course in courses" :key="course.title">
      <!--<h2 class="text-center pb-1">{{ course.title }}</h2>-->
      <table class="table-auto">
        <thead>
          <tr class="font-bold text-left">
            <th>Koulu</th>
            <th>Kurssi</th>
            <th>Opintopisteet / Kreditit</th>
            <th>Päivämäärä</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, i) in course.courses" :key="i">
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
  @apply p-2;
}
</style>
