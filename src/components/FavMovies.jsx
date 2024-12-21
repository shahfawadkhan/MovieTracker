import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const FavoriteMovies = () => {
  const { favMovies, removeFavorites } = useContext(MoviesContext);
  console.log(favMovies);

  return (
    <div className="bg-gray-900 text-white p-6 max-w-screen-xl mx-auto h-[100vh] mt-[50px]">
      {favMovies.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <h2 className="text-2xl font-semibold mb-4">No Favorite Movies Yet</h2>
          <p className="text-gray-400">
            Start adding movies to your favorites to see them here!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-around gap-6">
          {favMovies.map((movie) => (
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
              <h2 className="text-2xl font-semibold text-gray-100 mb-3">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {movie.overview}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => removeFavorites(movie.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Remove Movie
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovies;