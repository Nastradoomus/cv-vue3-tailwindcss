<template>
  <h1>SELECT</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "SelectComponents",
  props: {
    components: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    isMobile(): boolean {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (this as any).$vuetify.display.smAndDown
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: true
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // showDrawerOnLoad: (this as any).$vuetify.display.smAndDown
    }
  }
})
</script>
