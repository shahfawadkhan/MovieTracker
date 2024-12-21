import { useState } from 'react';
import './App.css';
import MoviesList from './components/PopularMovies';
import { MoviesProvider } from './context/MoviesContext';
import FavoriteMovies from './components/FavMovies';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopRatedMovies from './components/TopRatedMovies';
import ActionMovies from './components/ActionMovies';
import HorrorMovies from './components/HorrorMovies';
import History from './components/History';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <MoviesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<MoviesList />} />
          <Route path="/favouriteMovies" element={<FavoriteMovies />} />
          <Route path="/TopRated" element={<TopRatedMovies />} />
          <Route path="/action" element={<ActionMovies />} />
          <Route path="/horror" element={<HorrorMovies />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </MoviesProvider>
    </Router>
  );
}

export default App;
