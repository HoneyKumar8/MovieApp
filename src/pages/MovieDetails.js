import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchMovieDetails, fetchMovieCredits} from '../services/api'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

function MovieDetails() {
  const {id} = useParams()

  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id)
        const castData = await fetchMovieCredits(id)

        setMovie(movieData)
        setCast(castData.cast.slice(0, 12))
      } catch (error) {
        console.error(error)
      }
    }

    loadDetails()
  }, [id])

  if (!movie) return <h2>Loading...</h2>

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>

      <img
        src={
          movie.poster_path
            ? IMG_URL + movie.poster_path
            : 'https://via.placeholder.com/300x450?text=No+Image'
        }
        alt={movie.title}
      />

      <p>
        <strong>Rating:</strong> ⭐ {movie.vote_average}
      </p>
      <p>
        <strong>Duration:</strong> {movie.runtime} mins
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ')}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>

      <h2>Cast</h2>

      <div className="cast-grid">
        {cast.map(member => (
          <div key={member.id} className="cast-card">
            <img
              src={
                member.profile_path
                  ? IMG_URL + member.profile_path
                  : 'https://via.placeholder.com/150?text=No+Image'
              }
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
