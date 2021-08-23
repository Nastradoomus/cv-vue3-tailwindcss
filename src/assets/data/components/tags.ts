export type Tags = { tag: string; count: number }[]
const string =
  "ohjelmointi, ohjelmoija, vene, perämoottori, kirjanpito, yritys, yrittäjä, html, css, javascript, typescript, php, asp.net, python, sql, mongodb, tietokannat, node.js, vue.js, react, svelte, angular, deno, webpack, rollup, pwa, mobile first, ssr, grunt, gulp, magento, magento2, verkkokauppa, laravel, amazon, aws, microsoft, azure, vuetify"

export function tags(): Tags {
  const array = string.split(", ")
  const result: Tags = []
  array.forEach((tag) => {
    result.push({ tag, count: 0 })
  })
  return result
}
