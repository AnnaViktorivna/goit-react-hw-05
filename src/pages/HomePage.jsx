import { useEffect, useState } from "react";
import axios from "axios";
import { getApi } from "../servises/api";
import MovieList from "../components/MovieList/MovieList";

// import { Link, useParams } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await getApi();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Popular movies today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
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
