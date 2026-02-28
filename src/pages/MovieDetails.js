import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchMovieDetails, fetchMovieCredits} from '../services/api'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

function MovieDetails() {
  const {id} = useParams()

  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const movieResponse = fetchMovieDetails(id)
    const castResponse = fetchMovieCredits(id)

    if (movieResponse && typeof movieResponse.then === 'function') {
      movieResponse.then(res => res.json()).then(data => setMovie(data))
    } else {
      setMovie(movieResponse)
    }

    if (castResponse && typeof castResponse.then === 'function') {
      castResponse
        .then(res => res.json())
        .then(data => setCast(data.cast || []))
    } else {
      setCast(castResponse.cast || [])
    }
  }, [id])

  if (!movie) return <h2>Loading...</h2>

  return (
    <div>
      <h1>{movie.title}</h1>

      <img src={IMG_URL + movie.poster_path} alt={movie.title} />

      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>Duration:</strong> {movie.runtime} mins
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>

      <h3>Cast</h3>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {cast.slice(0, 10).map(member => (
          <div key={member.cast_id}>
            <p>{member.name}</p>
            <p>as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
