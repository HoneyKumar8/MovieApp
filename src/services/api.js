const API_KEY = 'YOUR_API_KEY' // replace this
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchPopular = (page = 1) =>
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)

export const fetchTopRated = (page = 1) =>
  fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`)

export const fetchUpcoming = (page = 1) =>
  fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`)

export const fetchMovieDetails = id =>
  fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)

export const fetchMovieCredits = id =>
  fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)

export const searchMovies = (query, page = 1) =>
  fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  )
