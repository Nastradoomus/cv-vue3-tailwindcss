interface Image {
  url: string
  alt: string
}

interface About {
  title: string
  text: string
}

interface Hobbies {
  title: string
  text: string
}

export interface Personal {
  image: Image
  about: About
  hobbies: Hobbies
}

export const personal: Personal = {
  image: { url: "img/manne.png", alt: "Manne Muoniovaara" },
  about: {
    title: "Sipoolainen",
    text: "19.06.1981 syntynyt perheenisä, jolla on jo koira, auto sekä omakotitalo."
  },
  hobbies: {
    title: "Harrastukset",
    text: "Veneily, lumilautailu, perhe, käsillä tekeminen sekä kaikennäköinen tietokoneisiin liittyvä."
  }
}
