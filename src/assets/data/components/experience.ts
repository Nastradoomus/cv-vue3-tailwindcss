export type Experience = {
  title: string
  url: string | undefined
  year: string
  content: string | undefined
}[]

export const experience: Experience = [
  {
    title: "Skumppa Oy",
    url: "https://skumppa.fi",
    year: "2019 →",
    content:
      "Perheomisteinen Osakeyhtiö jonka avulla voimme tehdä vapaasti töitä omilla aikatauluilla. " +
      "Yhtiön tarkoitus on myös opettaa lapsillemme yrityskulttuuria" +
      "<br /><br />" +
      "Omiin työtehtäviin on kuulunut kaikki hallinnolliset asiat kuten kirjanpito, verotukseen liittyvät asiat sekä taloudenhallinta. " +
      "<br /><br />" +
      "Lisäksi teen sekä B2B että B2C töitä veneiden, moottoreiden, juhlien järjestämisen, " +
      "ohjelmoinnin sekä tietoteknisten ohjelmistojen ja ratkaisuiden parissa."
  },
  {
    title: "Helppo Elämä",
    url: "https://helppoelämä.fi",
    year: "2012 - 2019",
    content:
      "Helppoelämä on nykyään Skumppa Oy:n aputoiminimi. Teimme avopuolison kanssa ensin töitä omilla toiminimillä, " +
      "mutta päätimme yhdistää nämä kaksi." +
      "<br /><br />" +
      "Työtehtävät olivat samoja kuin Skumppa Oy:ssä"
  },
  {
    title: "MPA Helsinki Oy / Molotw Finland / Geezers.fi",
    url: "https://geezers.fi",
    year: "2009 - 2012",
    content:
      "MPA Helsinki Oy tuo maahan korkeatasoisia taidetarvikkeita mm. Saksasta. " +
      "<br /><br />" +
      "Geezers the Shop on tämän yrityksen verkkokauppa, joka aloitti ensin kivijalkaliikkeenä Helsingissä. " +
      "Nykyisen kivijalkaliikkeen nimi on " +
      "<a href='https://www.google.com/maps/place/Molotow+Helsinki+(Molotow+Finland)/@60.1929063,24.9481874,15z/data=!4m5!3m4!1s0x0:0x6db7597c9e28c009!8m2!3d60.1930832!4d24.9484811'>Molotow Helsinki</a>. " +
      "<br /><br />" +
      "Tein Geezers the Shop sekä töitä sekä verkkokaupan että kivijalkaliikkeen puolella. Työtehtäviin kuului kaikkea mitä pienyrityksen kaupan pitoon kuuluu." +
      "Hyllytystä, asiakaspalvelua, tietoteknistä apua, koodaamista, varastotyötä. " +
      "<br /><br />" +
      "Paljon tuli opittua myös yrityksen pyörittämisestä."
  },
  {
    title: "Muut työtehtävät",
    url: undefined,
    year: "1998 - 2011",
    content:
      "Työkokemusta on tullut myös monesta muusta paikasta. Olen toiminut mm. Ravintola Helmessä plokkarina sekä baarityöntekijänä. " +
      "Yökerhossa työskentely on tuonut mukanaan rutkasti paineensietokykyä, sillä työympäristö oli välillä suorastaan hektinen. " +
      "<br /><br />" +
      "<a href='Oy Grundfoss Environment Finland Ab'>Grundfossilla</a> vesi- sekä viemäripumppujen kokoonpanijana että testaajana. " +
      "<br /><br />" +
      "Erilaisissa varastotöissä työvoimavuokrausyritysten kautta, " +
      "<br /><br />" +
      "<a href='https://k-hartwall.com/'>K. Hartwall Oy Ab</a> automaattirobottihitsaajana " +
      "<br /><br />" +
      "sekä kahvilatyöntekijänä pienessä kioskikahvilassa."
  }
]
