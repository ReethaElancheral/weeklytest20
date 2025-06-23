import { useState} from "react";

const API_KEY= "39e8286a";

const MovieSearch=()=>{

 const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error || "No results found");
          setMovies([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch");
        setLoading(false);
      });
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
    <div className="movie-app">
      <header className="movie-header">
        <h1 className="movieh1">🎬  Movie Search App</h1>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search movies"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <main className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image"}
              alt={movie.Title}
            />
            <div className="movie-info">
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2025 Movie Search App</p>
      </footer>
    </div>
    
    </>
)

}

export default MovieSearch;

