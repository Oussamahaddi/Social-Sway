

export type PortfolioT = {
  id: string
  name: string
  desc: string
  country: string
  category: string
  img: string
  favColor: string
  photos : PhotoT[]
}

export type PhotoT = {
  id: number
  url: string
  title: string
  photoDesc: string
}

export type RootStackParamListT = {
  Accueil : undefined,
  Profile : { portfolio : PortfolioT }
  Faq : undefined
}