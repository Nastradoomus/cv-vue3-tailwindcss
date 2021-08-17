<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Osaaminen</h2>
    <div class="sm:flex sm:flex-wrap sm:justify-center pb-3 pt-1">
      <div v-for="skill in skillset" :key="skill.titles[0].title" class="text-center cell sm:m-2">
        <span v-for="(title, i) in skill.titles" :key="i" class="text-lg font-bold pt-2 pb-1">
          <a v-if="title.url" :href="title.url">{{ title.title }}</a>
          <span v-else>{{ title.title }}</span>
          <span v-if="i < skill.titles.length - 1"> / </span>
        </span>
        <div class="grid justify-items-center -mt-2 -mb-1">
          <div class="stars" :style="setLevel(skill.rating)">
            &starf;&starf;&starf;&starf;&starf;
          </div>
        </div>
        <div class="text-left" v-html="skill.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { skillset, Skillset } from "../../assets/data/components/skillset"

export default defineComponent({
  name: "Skillset",

  data(): { skillset: Skillset } {
    return {
      skillset
    }
  },
  methods: {
    setLevel(level: number) {
      return `--level: ${level}%`
    }
  }
})
</script>
<style scoped>
.stars {
  font-size: 2.4rem;
  background: rgb(249, 255, 0);
  background: linear-gradient(
    90deg,
    rgba(249, 255, 0, 1) 0%,
    rgba(249, 255, 0, 1) var(--level),
    white calc(var(--level) + 10%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.stars:after {
  content: "\2605 \2605 \2605 \2605 \2605";
  left: 0;
  position: absolute;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  top: 0;
  z-index: -1;
}

.cell {
  flex: 0 0 calc(45%);
}
</style>
