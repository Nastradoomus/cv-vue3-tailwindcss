<template>
  <Main />
  <div class="flex md:flex-row flex-col">
    <div class="md:flex-initial md:text-left">
      <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-1">
        <div>
          <Contact />
          <Education />
        </div>
        <References />
      </div>
    </div>
    <div class="md:flex-1 md:ml-2">
      <Skillset />
    </div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <Portfolio />
    <Experience />
    <Courses />
    <Personal />
    <Tags />
  </div>
  <div class="text-center">
    <a href="https://github.com/Nastradoomus/cv-vue3-windi">Lähdekoodit GitHubissa</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Main from "../partials/Main.vue"
import Contact from "../partials/Contact.vue"
import Education from "../partials/Education.vue"
import References from "../partials/References.vue"
import Skillset from "../partials/Skillset.vue"
import Portfolio from "../partials/Portfolio.vue"
import Experience from "../partials/Experience.vue"
import Courses from "../partials/Courses.vue"
import Personal from "../partials/Personal.vue"
import Tags from "../partials/Tags.vue"

export default defineComponent({
  name: "Grid",
  components: {
    Main,
    Contact,
    Education,
    References,
    Skillset,
    Portfolio,
    Experience,
    Courses,
    Personal,
    Tags
  },
  props: {
    components: {
      type: Object,
      default: undefined
    }
  }
})
</script>
