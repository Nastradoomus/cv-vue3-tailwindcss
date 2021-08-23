interface Image {
  url: string
  alt: string
}

export interface Personal {
  text: string
  image: Image
  more: string
}

export const personal: Personal = {
  text:
    "Vuonna <b>1981</b> syntynyt Sipoolainen, jolla on jo tarpeeksi lapsia, koira, auto sekä omakotitalo." +
    "<br /><br />" +
    "Etsin uusia haasteita ja olisi hienoa tehdä töitä ryhmässä, jolloin saisi vuorovaikutusta, palautetta työn jäljestä sekä kokemusta. " +
    "<br /><br />" +
    "Kykenen työskentelemään erittäin joustavasti sekä etänä että yhteisissä tiloissa." +
    "<br /><br />" +
    "Satunnaiset pidemmät ajomatkat eivät ole este työnteolle.",
  image: { url: "img/manne.png", alt: "Manne Muoniovaara" },
  more:
    "Inspiroidun uusista haasteista. Ne ajavat oppimaan ja opettelemaan jotain uutta." +
    "<br /><br />" +
    "Pyrin myös ottamaan selvää uusista trendeistä ohjelmoinnin sekä tietotekniikan saralla. " +
    "<br /><br />" +
    "Harrastuksiin kuuluu myös veneily, lumilautailu, perhe, käsillä tekeminen sekä kaikennäköinen tietokoneisiin liittyvä."
}
