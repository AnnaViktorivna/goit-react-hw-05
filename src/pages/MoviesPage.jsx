import MovieList from "../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { getMovieByQuery } from "../servises/api";
import { useState, useEffect } from "react";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await getMovieByQuery(query);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const handleSubmit = (values) => {
    setQuery(values.searchMovie);
  };

  return (
    <>
      <Formik initialValues={{ searchMovie: "" }} onSubmit={handleSubmit}>
        <Form>
          <h2>Search movie by name</h2>
          <label>
            <Field
              type='text'
              name='searchMovie'
              placeholder='Enter search query...'
            />
          </label>
          <button type='submit' aria-label='Search'>
            🔍
          </button>
        </Form>
      </Formik>

      <div>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </>
  );
};
