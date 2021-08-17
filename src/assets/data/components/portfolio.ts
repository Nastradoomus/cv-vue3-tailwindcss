interface Image {
  src: string
  alt: string
  class: string
}

interface Project {
  title: string
  url: string
  year: string
  image: Image
  html: string
}

export type Portfolio = Project[]

export const portfolio: Portfolio = [
  {
    title: "Villa ja Cafe Sibbe",
    url: "https://sibbe.fi",
    year: "2021 →",
    image: {
      src: "img/sibbe.png",
      alt: "Villa &amp; Cafe Sibbe",
      class: "pr-2 float-left"
    },
    html: "<a href='https://laravel.com/'>Laravel</a> ja <a href='https://vuejs.org/'>Vue</a> (JavaScript backend, TypeScript frontend) pohjalta tehty palvelupaketti Villa &amp; Cafe Sibbe -konseptille. 100% PWA ja saa hyvät pisteet Lighthousesta, kunhan kuvat on välimuistissa."
  },
  {
    title: "Geezers the Shop",
    url: "https://geezers.fi",
    year: "2019 →",
    image: {
      src: "img/geezers.png",
      alt: "Geezers the Shop",
      class: "pr-2 float-left"
    },
    html: "<a href='https://github.com/magento/magento2'>Magento2</a> hjelmiston päälle rakennettu verkkokauppa. Vastaan kaupan teknisistä asioista kuten koodista, käännöksistä sekä päivityksistä."
  }
]
