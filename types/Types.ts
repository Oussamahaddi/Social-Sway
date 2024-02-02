

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

export type PostT = {
  id: number
  url: string
  title: string
  photoDesc : string
}

export type RootStackParamListT = {
  Home : undefined
  Profile : { portfolio : PortfolioT }
  Faq : undefined
  Favorie : undefined
  SinglePost : { post : PostT }
}