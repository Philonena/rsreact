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
  page: number
  moviesArray: MoviesApiType[]
  isLoading: boolean
}

export type ChangeStateType = {
  array: MoviesApiType[]
  isLoad: boolean
}

export type GetMoviesType = {
  page?: number
  request?: string
  getApiRequest: ({ array, isLoad }: ChangeStateType) => void
}
