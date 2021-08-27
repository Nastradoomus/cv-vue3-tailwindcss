import { App } from "vue"

export default {
  install: (app: App): void => {
    function stripHttps(url: string): string {
      return url.replace(/(^\w+:|^)\/\//, "")
    }
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$stripHttps = stripHttps
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $stripHttps(url: string): string
  }
}
