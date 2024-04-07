import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  return (
    <div>
      {" "}
      <h1>Home</h1>
      <h2>Popular movies today</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
              <h4>Description:</h4>
              <p>{movie.overview}</p>
              <h4>Popularity: </h4>
              <p>{movie.vote_average}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
