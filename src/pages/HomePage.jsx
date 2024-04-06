import { useEffect, useState } from "react";
import axios from "axios";
import { getApi } from "../servises/api";
export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const response = await getApi();
      setMovies(response.data.results);
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Popular movies today</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <h4>Description: </h4>
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

// "page": 1,
// "results": [
//   {
//     "adult": false,
//     "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
//     "id": 693134,
//     "title": "Dune: Part Two",
//     "original_language": "en",
//     "original_title": "Dune: Part Two",
//     "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//     "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
//     "media_type": "movie",
//     "genre_ids": [
//       878,
//       12
//     ],
//     "popularity": 704.576,
//     "release_date": "2024-02-27",
//     "video": false,
//     "vote_average": 8.4,
//     "vote_count": 2422
//   },
