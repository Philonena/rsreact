const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzdlMWMzZjBmMzBjN2Y0NzFiODQ3ZmViNmFmYTI4YSIsIm5iZiI6MTcyMDM0NDM3OC42OTM4MzEsInN1YiI6IjYyMDM5MTBmMTU4Yzg1MDAxYzkyNWQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nBBOeWSZQdl9oKSpx_yNSRKtIiOLFjhrqFAtKRr6sw'
export const apiUrl =
  'https://api.themoviedb.org/3/search/movie?&include_adult=false&language=en-US'
export const apiUrlPopular =
  'https://api.themoviedb.org/3/movie/popular?language=en-US'


export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
}
