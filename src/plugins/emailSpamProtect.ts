import { App } from "vue"

export default {
  install: (app: App): void => {
    function emailSpamProtect(name: string, domain: string, tld: string): boolean {
      window.location.href = `mailto:${name}@${domain}.${tld}`
      return false
    }
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$emailSpamProtect = emailSpamProtect
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $emailSpamProtect(name: string, domain: string, tld: string): boolean
  }
}
