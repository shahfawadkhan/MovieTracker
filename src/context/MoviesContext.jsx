import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  const addFavMovie = (movie) => {
    setFavMovies((prev) => [...prev, movie]);
    console.log("movie added to fav" + movie.id
    )
    alert("Movie added to favourite list")
    ;
    
  };

  const removeFavorites = (movieId) => {
    setFavMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <MoviesContext.Provider value={{ favMovies, addFavMovie, removeFavorites }}>
      {children}
    </MoviesContext.Provider>
  );
};
