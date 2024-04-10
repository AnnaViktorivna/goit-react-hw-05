import { lazy } from "react";
import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

// import { HomePage } from "./pages/HomePage";
// import { MovieDetailsPage } from "./pages/MovieDetailsPage";
// import { MoviesPage } from "./pages/MoviesPage";
// import { NotFoundPage } from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId/*' element={<MovieDetailsPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

//
// import { useState } from "react";

//
//57min
