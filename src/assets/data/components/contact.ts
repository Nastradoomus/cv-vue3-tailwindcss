interface Url {
  title: string
  url: string
}

interface Addresses {
  title: string
  url: string
}

interface Email {
  name: string
  domain: string
  tld: string
}

export interface Contact {
  addresses: Addresses[]
  phones: string[]
  emails: Email[]
  web: Url[]
}

export const contact: Contact = {
  addresses: [
    {
      title: "Vesterbackantie 84",
      url: "https://www.google.com/maps/place/Vesterbackantie+84,+01120+Sipoo"
    },
    {
      title: "01120 Västerskog",
      url: "https://www.google.com/maps/place/Vesterbackantie+84,+01120+Sipoo"
    }
  ],
  phones: ["+358407578626"],
  emails: [{ name: "manne", domain: "helppoelama", tld: "net" }],
  web: [
    {
      title: "GitHub",
      url: "https://github.com/Nastradoomus/"
    },
    {
      title: "Helppo Elämä",
      url: "https://helppoelämä.fi"
    }
  ]
}
