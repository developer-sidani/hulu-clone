const { API_KEY } = process.env
const getUrl = (route, opts) => `/${route}?api_key=${API_KEY}&${opts}`

export const requests = {
  fetchTrending: {
    title: 'Trending',
    url: getUrl('trending/all/week', 'language=en-US'),
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: getUrl('movie/top_rated', 'language=en-US'),
  },
  fetchActionMovies: {
    title: 'Action Movies',
    url: getUrl('discover/movie', 'with_genres=28'),
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: getUrl('discover/movie', 'with_genres=35'),
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: getUrl('discover/movie', 'with_genres=27'),
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: getUrl('discover/movie', 'with_genres=10749'),
  },
  fetchMystery: {
    title: 'Mystery',
    url: getUrl('discover/movie', 'with_genres=9648'),
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: getUrl('discover/movie', 'with_genres=878'),
  },
  fetchWestern: {
    title: 'Western',
    url: getUrl('discover/movie', 'with_genres=37'),
  },
  fetchAnimation: {
    title: 'Animation',
    url: getUrl('discover/movie', 'with_genres=16'),
  },
  fetchTV: {
    title: 'TV Movie',
    url: getUrl('discover/movie', 'with_genres=10770'),
  },
}
