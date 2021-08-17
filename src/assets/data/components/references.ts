interface Email {
  name: string
  domain: string
  tld: string
}

interface Contact {
  name: string
  phone: string
  email: Email
}

interface Company {
  company: string
  url: string
  contacts: Contact[]
}

export type References = Company[]

export const references: References = [
  {
    company: "MPA Helsinki Oy",
    url: "https://molotowfinland.fi",
    contacts: [
      {
        name: "Aku Djedidi",
        phone: "+358451135656",
        email: { name: "aku.djedidi", domain: "mpahelsinki", tld: "fi" }
      }
    ]
  },
  {
    company: "Sipoon Vene ja Moottori",
    url: "https://sipoonvenejamoottori.fi",
    contacts: [
      {
        name: "Leo Gleisner",
        phone: "+358400502545",
        email: { name: "sipoonvm", domain: "gmail", tld: "com" }
      }
    ]
  },
  {
    company: "Suomi Sisters Oy",
    url: "https://sibbe.fi",
    contacts: [
      {
        name: "Milla Suomi",
        phone: "+358407051706",
        email: { name: "milla.sohlstrom", domain: "gmail", tld: "com" }
      },
      {
        name: "Elina Suomi",
        phone: "+358504141822",
        email: { name: "enasuomi", domain: "gmail", tld: "com" }
      }
    ]
  },
  {
    company: "Erijo Oy",
    url: "https://erijo.fi",
    contacts: [
      {
        name: "Toffe Erikson",
        phone: "+358407037092",
        email: { name: "toffe.eriksson", domain: "erijo", tld: "fi" }
      }
    ]
  }
]
