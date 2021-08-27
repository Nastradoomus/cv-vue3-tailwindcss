import { createApp } from "vue"
import App from "./App.vue"
import emailSpamProtect from "./helpers/emailSpamProtect"
import stripHttps from "./helpers/stripHttps"
// eslint-disable-next-line import/no-unresolved
import "virtual:windi.css"
import "./index.css"

createApp(App).use(emailSpamProtect).use(stripHttps).mount("#app")
