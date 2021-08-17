import { createApp } from "vue"
import App from "./App.vue"
import emailSpamProtect from "./plugins/emailSpamProtect"
import "./index.css"

createApp(App).use(emailSpamProtect).mount("#app")
