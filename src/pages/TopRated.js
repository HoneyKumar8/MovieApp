import {useEffect, useState} from 'react'
import {fetchTopRated} from '../services/api'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

function TopRated() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchTopRated(page)
        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error(error)
      }
    }

    loadMovies()
  }, [page])

  return (
    <div>
      <h1>Top Rated Movies</h1>

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  )
}

export default TopRated
