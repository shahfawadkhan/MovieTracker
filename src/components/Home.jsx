import React, { useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";
const Home = () => {
    const { addFavMovie } = useContext(MoviesContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "f6eff5011a1b9b55c1a0f4edb0766399";

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!searchQuery.trim()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
      );
      const data = await response.json();

      if (data.results.length === 0) {
        setError("No movies found. Please try a different search.");
      }

      setMovies(data.results);
    } catch (err) {
      setError("Error fetching movies. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-screen-xl mx-auto">
        {movies.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-3 ">
            Welcome to MovieTracker
          </h1>
          <p className="text-xl text-gray-400">
            Discover and explore the world of movies. Find your next favorite movie
            and add it to your watchlist!
          </p>
        </div>
      
        <div className="flex justify-center items-center ">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a movie..."
            className="p-4 w-80 text-gray-900 rounded-l-lg focus:outline-none "
          />
          <button
            onClick={handleSearchSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-r-lg transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </div>
        )}

      
        {loading && (
          <div className="text-center text-blue-400 ">Loading movies...</div>
        )}

       
        {error && <div className="text-center text-red-500 mb-6">{error}</div>}
        
        {movies.length > 0 && !loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[70px]">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl 
                transition-shadow duration-300 p-4 flex flex-col justify-between gap-4"
              >
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">No poster available</span>
                  </div>
                )}
                <h2 className="text-lg font-semibold text-gray-100 mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-3">{movie.overview}</p>
                <button
                onClick={() => addFavMovie(movie)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Add to Favourites
              </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;