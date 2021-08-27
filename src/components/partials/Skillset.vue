<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Osaaminen</h2>
    <div v-if="printMode">
      <div
        v-for="(skills, j) in splittedSkillset"
        :key="j"
        :class="{ pagebreak: j < splittedSkillset.length - 2 }"
      >
        <div class="flex">
          <div
            v-for="skill in skills"
            :key="skill.titles[0].title"
            class="text-center cell mt-3 mb-1 sm:mx-2"
            :class="{ lastChild: skills.length === 1 }"
          >
            <span v-for="(title, y) in skill.titles" :key="y" class="text-lg font-bold pt-3 pb-1">
              <a v-if="title.url" :href="title.url">{{ title.title }}</a>
              <span v-else>{{ title.title }}</span>
              <span v-if="y < skill.titles.length - 1"> / </span>
            </span>
            <div v-if="skill.rating" class="grid justify-items-center -mt-2 -mb-1">
              <div class="stars" :style="setLevel(skill.rating)">
                &starf;&starf;&starf;&starf;&starf;
              </div>
            </div>
            <div v-else>&nbsp;</div>
            <div class="text-left" v-html="skill.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!printMode" class="sm:flex sm:flex-wrap sm:justify-center pb-3 pt-1">
      <div
        v-for="(skill, i) in skillset"
        :key="skill.titles[0].title"
        class="text-center cell mt-3 mb-1 sm:mx-2"
        :class="{ lastChild: i === skillset.length - 1 }"
      >
        <span v-for="(title, y) in skill.titles" :key="y" class="text-lg font-bold pt-3 pb-1">
          <a v-if="title.url" :href="title.url">{{ title.title }}</a>
          <span v-else>{{ title.title }}</span>
          <span v-if="y < skill.titles.length - 1"> / </span>
        </span>
        <div v-if="skill.rating" class="grid justify-items-center -mt-2 -mb-1">
          <div class="stars" :style="setLevel(skill.rating)">
            &starf;&starf;&starf;&starf;&starf;
          </div>
        </div>
        <div v-else>&nbsp;</div>
        <div class="text-left" v-html="skill.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import cloneDeep from "lodash.clonedeep"
import { PrintModeStore } from "../../store/printMode"
import { skillset, Skillset, Skill } from "../../assets/data/components/skillset"

export default defineComponent({
  name: "Skillset",
  setup() {
    const printModeStore: PrintModeStore | undefined = inject("printModeStore")
    let printMode
    if (printModeStore?.state) {
      printMode = printModeStore.state.printMode
    }
    return { printMode }
  },
  data(): { skillset: Skillset } {
    return {
      skillset
    }
  },
  computed: {
    splittedSkillset() {
      const clone: Skillset = cloneDeep(this.skillset)
      const result = clone.reduce(
        (resultArray: Array<Array<Skill>>, item: Skill, index: number) => {
          const i = Math.floor(index / 2)
          if (!resultArray[i]) {
            // eslint-disable-next-line no-param-reassign
            resultArray[i] = []
          }
          resultArray[i].push(item)
          return resultArray
        },
        []
      )
      return result
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

.lastChild {
  flex: 100;
}
</style>
