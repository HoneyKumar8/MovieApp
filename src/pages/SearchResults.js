import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {searchMovies} from '../services/api'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

function SearchResults() {
  const {query} = useParams()

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Reset page when query changes
  useEffect(() => {
    setPage(1)
  }, [query])

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await searchMovies(query, page)
        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error(error)
      }
    }

    loadMovies()
  }, [query, page])

  return (
    <div>
      <h1>Search Results for &quot;{query}&quot;</h1>

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  )
}

export default SearchResults
