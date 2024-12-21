import React, { useState, useEffect, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const HorrorMovies = () => {
  const { addFavMovie } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);
  const API_KEY = "f6eff5011a1b9b55c1a0f4edb0766399"; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 max-w-screen-xl mx-auto mt-[50px]">
      {movies.length>0 ?(
        <div className="flex flex-wrap justify-around gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] p-5 flex flex-col justify-between"
          >
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105"
              />
            )}
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">{movie.title}</h2>
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">{movie.overview}</p>
            <div className="mt-auto">
              <button
                onClick={() => addFavMovie(movie)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Add to Favourites
              </button>
            </div>
          </div>
        ))}
      </div>
      ):(
        <div className="flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>      
      )}
    </div>
  );
};

export default HorrorMovies;
