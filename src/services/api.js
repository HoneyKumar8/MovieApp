const API_KEY = 'YOUR_API_KEY' // <-- replace with your real TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3'

const fetchData = async url => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export const fetchPopular = page =>
  fetchData(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

export const fetchTopRated = page =>
  fetchData(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

export const fetchUpcoming = page =>
  fetchData(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

export const fetchMovieDetails = id =>
  fetchData(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)

export const fetchMovieCredits = id =>
  fetchData(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)

export const searchMovies = (query, page) =>
  fetchData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
  )
