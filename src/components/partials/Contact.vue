<template>
  <div class="pb-3 pt-1">
    <h2 class="text-center">Yhteystiedot</h2>
    <h3>Osoite</h3>
    <a
      v-for="(address, i) in contact.addresses"
      :key="address.title + i"
      :href="address.url"
      class="block pl-1"
    >
      {{ address.title }}
    </a>
    <h3>Puhelin</h3>
    <a
      v-for="(phone, i) in contact.phones"
      :key="phone + i"
      :href="'tel:' + phone"
      class="block pl-1"
    >
      {{ phone }}
    </a>
    <h3>Sähköposti</h3>
    <a
      v-for="(email, i) in contact.emails"
      :key="email.name + i"
      href="protected-from-spambots"
      class="mail block pl-1"
      :data-name="email.name"
      :data-domain="email.domain"
      :data-tld="email.tld"
      @click="$emailSpamProtect(email.name, email.domain, email.tld)"
    >
    </a>
    <h3>Verkko</h3>
    <a v-for="(w, i) in contact.web" :key="i" :href="w.url" class="block pl-1">
      {{ w.title }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { contact, Contact } from "../../assets/data/components/contact"

export default defineComponent({
  name: "Contact",
  data(): { contact: Contact } {
    return {
      contact
    }
  }
})
</script>
