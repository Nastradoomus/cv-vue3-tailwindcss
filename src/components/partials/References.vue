<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Suosittelijat</h2>
    <div class="pb-1" v-for="reference in references" :key="reference.company">
      <a class="company-title" :href="reference.url">{{ reference.company }}</a>
      <span v-for="contact in reference.contacts" :key="contact.name" class="pl-1 pb-1"
        >{{ contact.name }}
        <a :href="'tel:' + contact.phone" class="block pl-1">{{ contact.phone }}</a>
        <a
          href="protected-from-spambots"
          class="mail block pl-1"
          :data-name="contact.email.name"
          :data-domain="contact.email.domain"
          :data-tld="contact.email.tld"
          @click="$emailSpamProtect(contact.email.name, contact.email.domain, contact.email.tld)"
        >
          {{ contact.email.name }}(at){{ contact.email.domain }}.{{ contact.email.tld }}
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { references, References } from "../../assets/data/components/references"

export default defineComponent({
  name: "References",

  data(): { references: References } {
    return {
      references
    }
  }
})
</script>
<style lang="postcss" scoped>
.company-title {
  @apply pt-2 pb-1 font-bold block cursor-pointer;
}
</style>
