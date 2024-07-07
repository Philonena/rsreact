export type MoviesApiType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type StateType = {
  request: string
  arrayRequest: string
  page: number
  moviesArray: MoviesApiType[]
  isLoading: boolean
  isError: boolean
}

export type ChangeStateType = {
  array: MoviesApiType[]
  isLoad: boolean
}

export type GetMoviesType = {
  page: number
  request: string
  getApiRequest: ({ array, isLoad }: ChangeStateType) => void
}

export type HeaderPropsType = {
  request: string
  handleRequestChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: (ev: React.FormEvent) => void
  handleCheckError: () => void
}

export type MainPropsType = {
  moviesArray: MoviesApiType[]
  isError: boolean
  arrayRequest: string
}

export type CardPropsType = {
  card: MoviesApiType
}
