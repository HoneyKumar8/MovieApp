import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {searchMovies} from '../services/api'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

function SearchResults() {
  const {query} = useParams()

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const response = searchMovies(query, page)

    if (response && typeof response.then === 'function') {
      response
        .then(res => res.json())
        .then(data => {
          setMovies(data.results || [])
        })
    } else {
      setMovies(response.results || [])
    }
  }, [query, page])

  return (
    <div>
      <h1>Search</h1>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default SearchResults
