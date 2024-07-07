import { apiUrl, apiUrlPopular, options } from '../constants/constants'
import { GetMoviesType } from '../types/types'

export const getMoviesByRequest = ({
  page,
  request,
  getApiRequest,
}: GetMoviesType) => {
  fetch(`${apiUrl}&page=${page}&query=${request}`, options)
    .then((response) => response.json())
    .then((response) =>
      getApiRequest({ array: response.results, isLoad: false })
    )
    .catch((err) => console.error(err))
}

export const getPopularMovies = ({ getApiRequest }: GetMoviesType) => {
  fetch(`${apiUrlPopular}&page=1`, options)
    .then((response) => response.json())
    .then((response) =>
      getApiRequest({ array: response.results, isLoad: false })
    )
    .catch((err) => console.error(err))
}
