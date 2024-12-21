import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gray-800 shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        <div className="text-white text-2xl font-bold tracking-wider">
          <NavLink to="/" className="hover:text-blue-500 transition duration-200">
            MovieTracker
          </NavLink>
        </div>

        
        <ul className="hidden md:flex space-x-7">
        <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              Popular
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/horror"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              Horror
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/TopRated"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              Top Rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/action"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
                  : 'text-white hover:text-blue-400 transition duration-200'
              }
            >
              Action
            </NavLink>
          </li>
        </ul>

        
        <div className="text-white hover:text-blue-400 transition duration-200">
          <NavLink
            to="/favouriteMovies"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-white hover:text-blue-400 transition duration-200'
            }
          >
            My Favourites
          </NavLink>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
