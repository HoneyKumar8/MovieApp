import {useHistory} from 'react-router-dom'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

function MovieCard({movie}) {
  const history = useHistory()

  const goToDetails = () => {
    history.push(`/movie/${movie.id}`)
  }

  return (
    <div className="movie-card">
      <img src={IMG_URL + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>

      <button type="button" onClick={goToDetails}>
        View Details
      </button>
    </div>
  )
}

export default MovieCard
