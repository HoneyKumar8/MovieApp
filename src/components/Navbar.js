import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import '../App.css'

function Navbar() {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    if (search.trim() !== '') {
      history.push(`/search/${search}`)
      setSearch('')
    }
  }

  return (
    <nav className="navbar">
      <h1>movieDB</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
