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
    html:
      "Otin vastaan tämän projektin, sillä arvasin että nyt pääsee sekä haastamaan että näyttämään omaa osaamista ja oppimiskykyä." +
      "<br /><br />" +
      "Suurin osa pienistäkin projekteista tehdään yleensä WordPressillä, joka ei oikein omasta mielestä ole se työkalu, " +
      "jolla tehdään esimerkiksi hotellin tai ravintolan sivusto." +
      "<br /><br />" +
      "Oma visioni oli tehdä nollasta sovellus, johon kuuluu sekä Frontend että Backend -puolet toteutettuna avoimella lähdekoodilla." +
      "<br /><br />" +
      "Sibbe on tämän kehitystyön pilottikohde. Ohjelmiston on tarkoitus olla kaikkien saatavilla, " +
      "mutta koska toteutus edellyttää myös ohjelmointitaitoja, voi asiakas halutessaan valita itse projektin toteuttajan." +
      "<br /><br />" +
      "Backend puoli on toteutettu <a href='https://laravel.com/'>Laravel</a>, Frontend <a href='https://vuejs.org/'>Vuella</a> sekä <a href='https://vuetifyjs.com/'>Vuetifyllä</a>. " +
      "Projektin kehitys jatkuu aina kun sille löytyy aikaa enkä sulje pois sitä mahdollisuutta että projektin vetäminen siirtyisi taholle, " +
      "jolla on resursseja sekä tahtoa viedä sitä eteenpäin." +
      "<br /><br />" +
      "Projektissa on alusta asti huomioitu mobiiliystävällisyys ja optimointi." +
      "<br /><br />" +
      "<b>Lähdekoodit (Work in Progress) saa pyydettäessä nähtäville.<b>"
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
    html:
      "Erilaiset verkkokauppaohjelmistot kuten myös verkkokaupan toiminta on tullut tutuksi Geezers the Shopin parissa. " +
      "<br /><br />" +
      "Vimeisimmäksi ohelmistoksi on monen mutkan kautta valikoitunut <a href='https://github.com/magento/magento2'>Magento2</a>, " +
      "johon on räätälöity <a href='https://www.templatemonster.com/magetique.html'>Templatemonsterin Magetique</a> -teema. " +
      "<br /><br />" +
      "Projekti on opettanut kaikenlaista mm. <a href='https://en.wikipedia.org/wiki/Internationalization_and_localization'>118n</a> käsitteestä " +
      "sekä toimintatavoista. Lisäksi on tullut tutuksi Linuxin parissa työskentely, <a href='https://www.docker.com/'>Docker</a>, " +
      "<a href='https://gruntjs.com/'>Grunt, <a href='https://gulpjs.com/'>Gulp</a>, " +
      "<a href='https://en.wikipedia.org/wiki/Dependency_injection'>Dependency Injection</a>, " +
      "<a href='https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller'>MVC -arkkitehtuuri</a>, <a href='https://redis.io/'>Redis</a>, " +
      "<a href='https://www.mysql.com/'>MySQL</a> & <a href='https://en.wikipedia.org/wiki/Elasticsearch'>Elasticsearch</a>." +
      "<br /><br />" +
      "Projektin seuraava versio olisi syytä viedä pilvipalveluun, jotta Magenton uusimmat ominaisuudet saataisiin käyttöön yhdessä " +
      "100% PWA sekä optimoituna." +
      "<br /><br />" +
      "Nykyisellään se on <a href='https://hostingpalvelu.fi/'>Hostingpalvelun</a> alaisuudessa aivan tavallisessa internet palvelupaketissa, " +
      "johon sitä on vaikea optimoida uusimmilla <a href='https://docs.vuestorefront.io/v1/guide/installation/magento.html'>työkaluilla (SSR)</a>."
  }
]
