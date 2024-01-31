

export type DataT = {
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