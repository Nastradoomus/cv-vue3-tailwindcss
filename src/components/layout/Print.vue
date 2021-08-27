<template>
  <Main />
  <div class="grid grid-cols-2 justify-items-center pagebreak">
    <div>
      <Contact />
      <Education />
    </div>
    <References />
  </div>
  <div>
    <Skillset class="pagebreak" />
    <Portfolio class="pagebreak" />
    <Experience class="pagebreak" />
    <Courses class="pagebreak" />
    <Personal />
    <Tags />
  </div>
  <div class="text-center">github.com/nastradoomus/cv-vue3-windi</div>
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
  name: "Print",
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
<style>
body {
  margin-top: 0;
  padding-top: 0;
}
</style>
