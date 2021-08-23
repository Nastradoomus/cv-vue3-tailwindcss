interface Title {
  title: string
  url: string | undefined
}

interface Skill {
  titles: Title[]
  rating: number | undefined
  content: string | undefined
}

export type Skillset = Skill[]

export const skillset: Skillset = [
  {
    titles: [
      {
        title: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      }
    ],
    rating: 80,
    content:
      "Ensikosketus JavaScriptiin oli <a href='https://jquery.com/'>jQuery</a>, jolla oli helppoa tehdä ensimmäisiä " +
      "<a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents'>DOM</a> manipulaatioita. " +
      "<br /><br />" +
      "Jonkin ajan kuluttua puhdas JavaScript. " +
      "Lähtisin erittäin mielelläni projekteihin kirjoittamaan myös puhdasta JavaScriptiä ilman kirjastoja." +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Loogiset operaatiot</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Funktionaalinen sekä luokkapohjainen ohjelmointi</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Objektien sekä taulukoiden (Arrays) käsittely</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Tiedon muuttaminen toiseen muotoon (Maps)</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Suora DOM manipulaatio</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Best Practises, eli käytännöt jolla kirjoitetaan parempaa (universaalia) koodia johtuen kokemuksen sekä rutiinien puutteesta</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Deep Knowledge, JavaScript on paljon syvempi kieli kuin mitä antaa ymmärtää</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "TypeScript",
        url: "https://www.typescriptlang.org/"
      }
    ],
    rating: 60,
    content:
      "TypeScript on ottanut paikkansa omissa projekteissa sekä ajatuksissa. JavaScript ilman tyyppisuojia, on herkkä ohjelmoijan virheille. " +
      "TypeScript karsii suurimman osan näistä virheistä. " +
      "<br /><br />" +
      "Näen TypeScriptin isona osana kollektiivista kehitystyötä, koska se auttaa jäsentämään paremmin tietoa muuttujista sekä funktioista. " +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Tyypit sekä tyyppisuojat</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Tyypitys tietueen tai objektin pohjalta</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Työkalujen optimointi, jotta saadaan mahdollisimman suuri hyöty tyypitetystä tiedosta</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>TypeScriptin kanssa voi olla toisinaan hieman solmussa ennenkuin alitajunta tai dokumentointi auttaa ratkaisemaan ongelman</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "PHP",
        url: "https://www.php.net/"
      }
    ],
    rating: 75,
    content:
      "PHP on ensikosketus asiakas-palvelin -ohjelmointiin. Tuntui jo heti ensimetreillä tutulta ja suoraviivaiselta. " +
      "Aina kun palaa PHP:n pariin huomaa että kieli on edelleen kehittynyt (<a href='https://www.php-fig.org/psr/'>PSRs</a>)." +
      "<br /><br />" +
      "Mielestäni PHP on myös nättiä kieltä kirjoitettuna josta yleensä saa selkoa melko pienellä vaivalla varsinkin kun koodia on pakko dokumentoida, jotta pysyy standardeissa. " +
      "<br /><br />" +
      "PHP:n parissa työskennellessä olisi mukavaa jos ei välillä tarvitsisi kirjoittaa JavaScriptiä, koska syntaksien samankaltaisuus sekoittaa sujuvaa kirjoitusta. " +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Loogiset perusteet, luokat sekä funktionaalinen ohjelmointi</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Objektien sekä taulukoiden käsittelyn koen sujuvammaksi JavaScriptillä, mutta ei ole ongelma PHP:llä</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Työkalujen optimointi, jotta saadaan PHP:n vahvuuksista kaikki irti (linttaus & intellisense)</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>PHP:tä tulee käytettyä nykyään vähemmän, joten aluksi voi kone hieman yskähdellä</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Standardit eivät ole täysin hallussa johtuen kokemuksen sekä rutiinien puutteesta</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "HTML",
        url: "https://www.w3.org/html/"
      },
      {
        title: "CSS",
        url: "https://www.w3.org/Style/CSS/"
      }
    ],
    rating: 95,
    content:
      "HTML + CSS tuli tutuksi lukiossa ennen vuotta 2000. " +
      "Sen jälkeen olen tasaisin väliajoin päivittänyt tietojani aiheesta. " +
      "Nykyisin on tullut tutuksi erilaiset kirjastot (<a href='https://getbootstrap.com/'>Bootstrap</a>, <a href='https://tailwindcss.com/'>TailWindCSS</a> jne.), " +
      "joiden pohjalta on helppo rakentaa konkreettisia sivustoja nopealla aikataululla" +
      "<br /><br />" +
      "Pystyn työskentelemään kaikilla HTML/CSS kirjastoilla enkä koe että joku olisi ylitse muiden. " +
      "Kirjastoista tulee mieleen lähinnä se negatiivinen puoli että toisinaan tuntuu siltä kuin ne kaikki näyttäisivät samalta. " +
      "<br /><br />" +
      "Osaava graafinen suunnittelija poimii kyllä kirjastoista parhaat puolet ja tekee ulkoasusta persoonallisen. " +
      "Itse <span class='font-bold'>en ole</span> graafinen suunnittelija, " +
      "mutta kykenen tekemään sivuista juuri sellaiset kuin suunnittelija on halunnut." +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>SCSS, SASS, Stylus, PostCSS eivät tuota ongelmia</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>HTML & CSS Validoinnit sekä eri selainympäristöt</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span><a href='https://developers.google.com/web/tools/lighthouse'>Lighthouse</a> sekä muut analyysityökalut</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Uusimmat CSS operaattorit & operaatiot eivät välttämättä ole tuttuja, mutta seuraan aihetta läheltä ja pyrin käyttämään uusia ominaisuuksia tarvittaessa</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "Python",
        url: "https://www.python.org/"
      },
      {
        title: "ASP.NET Core",
        url: "https://docs.microsoft.com/en-us/aspnet/core/"
      }
    ],
    rating: 55,
    content:
      "Pythonista sekä ASP.NET Coresta on käytynä peruskurssit <a href='https://amkoodari.fi/'>AMKoodari</a> -linjalla. " +
      "Kun on aiemmin käynyt läpi mm. Pascal, Java sekä nämä aiemmin mainittujen kielten syntaksit sekä periaatteet voi näistä kahdesta myös sanoa että " +
      "osaan vähintään perusteet." +
      "<br /><br />" +
      "Kumpikaan kieli ei kuulu itselle niihin läheisimpiin, mutta mielellään näitä kahta opiskelisi lisää sekä myös työskentelisi niiden parissa. " +
      "<br /><br />" +
      "Python varsinkin on helposti lähestyttävissä. ASP.NET Coressa taas on hyvä dokumentointi, " +
      "jonka lisäksi kielellä voi rakentaa saumattomasti sekä frontend että backend puolet, jolloin ei tarvitse sukkuloida eri kielten välillä." +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Vähintäänkin perusteet hallussa</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>ASP.NET Coren tyypitys muistuttaa vahvasti TypeScriptiä</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Pythonin suoraviivainen kirjoitusasu kiehtoo</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Vaatii ehdottomasti treeniä ennenkuin isompaan projektiin voi hypätä</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "Frontend kirjastot",
        url: "https://www.google.com/search?q=front+end+libraries+and+frameworks"
      }
    ],
    rating: 65,
    content:
      "Olen käyttänyt eniten <a href='https://vuejs.org/'>Vue.js</a> sekä jonkin verran <a href='https://reactjs.org/'>React</a> kirjastoja." +
      "<br /><br />" +
      "Eri kirjastojen opettelun tärkein opetus on ollut se kuinka niitä sisäistetään, eli opitaan. " +
      "Uusien kirjastojen opettelu on helpompaa kun tietää itse miten oppii parhaiten sekä osaa selata dokumentointia ja ymmärtää niistä myös jotain. " +
      "<br /><br />" +
      "Jos nyt kysyttäisiin mikä seuraavaksi, sanoisin ehkä että <a href='https://svelte.dev/'>Svelte</a>, " +
      "mutta olisi huomattavasti järkevämpää vastata <a href='https://nuxtjs.org/'>Nuxt.js</a>, sillä Vue on suurinpiirtein hallussa. " +
      "React taas on edelleen se suosituin joka takaisi varmasti töitä." +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Äärimmäisen motivoitunut oppimaan uutta tällä osa-alueella</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Pystyisin suoraan hyppäämään Vue.js sekä React kehitykseen</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Async / Await, Try / Catch / Throw -konseptit on tuttuja</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>SSR (Server side rendering) -teknologia ei ole vielä hallussa. Toimintaperiaatteisiin olen hieman perehtynyt.</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Angularista on alle perustason taidot. Tähän haluaisin myös muutosta.</li>" +
      "</ul>"
  },

  {
    titles: [
      {
        title: "Mobile First",
        url: "https://en.wikipedia.org/wiki/Responsive_web_design"
      },
      {
        title: "Progressive Web Application",
        url: "https://en.wikipedia.org/wiki/Progressive_web_application"
      }
    ],
    rating: 80,
    content:
      "Mobile first -käsite tuli tutuksi kun löysin Bootstrap -kírjaston. " +
      "Siitä lähtien ulkoasut on tehty ensin matkapuhelin- sekä tabletnäytöt huomioiden. " +
      "<br /><br />" +
      "Myös tämä sivusto on 100% PWA ja pyrkii yli 90% pisteisiin Lighthousessa joka saralla." +
      "<br /><br />" +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Kummatkin käsitteet kehittyvät ja oppimishalu on näissä asioissa suuri</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Kykenen tekemään sekä frontend että backend kehitystä</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Kehitys- sekä bundlingtyökalut (<a href='https://rollupjs.org/'>Rollup</a>, <a href='https://webpack.js.org/'>Webpack</a>), <a href='https://en.wikipedia.org/wiki/Tree_shaking'>treeshaking</a> -teknologiat</li>" +
      "<li ><span class='font-bold text-red-600'>- </span><a href='https://developers.google.com/web/tools/workbox'>Workbox</a> tietous kaipaa jatkuvaa päivittämistä</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "MySQL",
        url: "https://www.mysql.com/"
      },
      {
        title: "Tietokannat",
        url: "https://towardsdatascience.com/top-10-databases-to-use-in-2021-d7e6a85402ba"
      }
    ],
    rating: 60,
    content:
      "Tietokannoista on perustiedot hallussa ja jättäisinkin ehkä mielummin SQL -syntaksien opettelut muille. " +
      "Tarvittaessa voin kyllä myös opetella syvempää tietokantaosaamista, jos sitä työtehtävissä edellytetään. " +
      "<br /><br />" +
      "Olen käyttänyt myös muita tietokantoja (mm. <a href='https://www.mongodb.com/'>MongoDB</a>, <a href='https://www.postgresql.org/'>PostgreSQL</a>), " +
      "joissa syntaksit ja toimintaperiaatteet on periaatteessa tuttuja. " +
      "<br /><br />" +
      "AMKoodarin MongoDB kurssilla käytiin läpi myös tietokantojen käsitteitä sekä yleistietoa." +
      "<br /><br />" +
      "<div  class='font-bold pb-1 pt-2'>Itsearvio:</div>" +
      "<ul class='pl-2'>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Pystyn sisäistämään eri tietokantojen toimintaperiaatteet</li>" +
      "<li ><span class='font-bold text-green-600'>+ </span>Seuraan uusimpia trendejä myös tietokantojen kehityksessä</li>" +
      "<li ><span class='font-bold text-red-600'>- </span>Tietokannat eivät varsinaisesti kuulu syvempään osaamisalueeseen</li>" +
      "</ul>"
  },
  {
    titles: [
      {
        title: "Muu osaaminen",
        url: undefined
      }
    ],
    rating: undefined,
    content:
      "Sekä työn että harrastuksen puolesta on tullut tutuksi myös veneet sekä moottorit. Lähinnä perämoottorit, mutta myös jonkin verran sisäperämoottorit. " +
      "<br /><br />" +
      "Huollot, korjaukset, tekninen kirjallisuus, varaosien tilaaminen sekä vaihto, talvisäilytykset, pesut, maalaukset, vahaukset onnistuu." +
      "<br /><br />" +
      "Kurssien myötä on tullut myös seikkailtua mm. Amazonin <a href='https://aws.amazon.com/'>AWS</a> sekä Microsoft <a href='https://azure.microsoft.com/'>Azuren</a> pilvipalveluissa. Niiden käytöstä löytyy ainakin perustaidot." +
      "<br /><br />" +
      "Lisäksi olemme pyörittäneet perheen kesken yksityisyritystä jo noin 10 vuotta. Sitä kautta on tullut osaamista mm. kirjan- sekä taloudenpitoon, " +
      "laskutukseen, veroasioihin, palkanmaksun jne."
  }
]
