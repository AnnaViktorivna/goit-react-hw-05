import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";

function App() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.active]: isActive,
            })
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.active]: isActive,
            })
          }
          to='/details'
        >
          Movie Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.active]: isActive,
            })
          }
          to='/movies'
        >
          Movies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.active]: isActive,
            })
          }
          to='/*'
        >
          Not Found
        </NavLink>
      </nav>
    </header>
  );
}

export default App;

// import { NavLink, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import HomePage from "path/to/pages/HomePage";
// import MovieDetailsPage from "path/to/pages/MovieDetailsPage";
// import MoviesPage from "path/to/pages/MoviesPage";
// import NotFoundPage from "path/to/pages/NotFoundPage";

// <Routes>
//   <Route path='/' element={<HomePage />} />
//   <Route path='/details' element={<MovieDetailsPage />} />
//   <Route path='/movies' element={<MoviesPage />} />
//   <Route path='/*' element={<NotFoundPage />} />
// </Routes>
//57min
