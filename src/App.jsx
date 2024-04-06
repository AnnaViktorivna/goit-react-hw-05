import { NavLink, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { MoviesPage } from "./pages/MoviesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import clsx from "clsx";
import css from "./App.module.css";

const getActiveClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getActiveClassName} to='/'>
            Home
          </NavLink>
          {/* <NavLink className={getActiveClassName} to='/details'>
            Movie Details
          </NavLink> */}
          <NavLink className={getActiveClassName} to='/movies'>
            Movies
          </NavLink>
          <NavLink className={getActiveClassName} to='/*'>
            Not Found
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

//
// import { useState } from "react";

//
//57min
