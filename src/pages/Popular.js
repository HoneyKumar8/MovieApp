import {useEffect, useState} from 'react'
import {fetchPopular} from '../services/api'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

function Popular() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const response = fetchPopular(page)

    if (response && typeof response.then === 'function') {
      response
        .then(res => res.json())
        .then(data => {
          setMovies(data.results || [])
        })
    } else {
      setMovies(response.results || [])
    }
  }, [page])

  return (
    <div>
      <h1>Popular</h1>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Popular
