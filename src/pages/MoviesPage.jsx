import MovieList from "../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";

export const MoviesPage = () => {
  return (
    <>
      <Formik>
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
      );
      {/* <MovieList movies={movies} /> */}
    </>
  );
};
