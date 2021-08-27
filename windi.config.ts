import { defineConfig } from "windicss/helpers"

export default defineConfig({
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Montserrat"]
      }
    }
  }
})
