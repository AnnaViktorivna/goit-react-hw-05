import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCast from "../components/MovieCast/MovieCast";
import { MovieReviews } from "../components/MovieReviews/MovieReviews";
import { getMovieById } from "../servises/api";

import { Routes, Route } from "react-router-dom";
const IMG = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await getMovieById(movieId);
        setMovieDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details:{movieId}</h1>
      <img src={`${IMG}${movieDetail.poster_path}`} alt='' />
      <h2>{movieDetail.title}</h2>
      <p>User Score:{movieDetail.vote_average}</p>
      <h3>Owerview</h3>
      <p>{movieDetail.overview}</p>

      <ul>
        <h3>Genres</h3>
        {movieDetail.genres &&
          movieDetail.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>
      <h3>Additional information</h3>
      <Link style={{ display: "flex" }} to='cast'>
        Cast
      </Link>
      <Link style={{ display: "flex" }} to='reviews'>
        Reviews
      </Link>
      <Routes>
        <Route path='cast' element={<MovieCast />} />
        <Route path='reviews' element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
// {
//   "adult": false,
//   "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//   "belongs_to_collection": null,
//   "budget": 63000000,
//   "genres": [
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     }
//   ],
//   "homepage": "http://www.foxmovies.com/movies/fight-club",
//   "id": 550,
//   "imdb_id": "tt0137523",
//   "original_language": "en",
//   "original_title": "Fight Club",
//   "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//   "popularity": 61.416,
//   "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//   "production_companies": [
//     {
//       "id": 508,
//       "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
//       "name": "Regency Enterprises",
//       "origin_country": "US"
//     },
//     {
//       "id": 711,
//       "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
//       "name": "Fox 2000 Pictures",
//       "origin_country": "US"
//     },
//     {
//       "id": 20555,
//       "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
//       "name": "Taurus Film",
//       "origin_country": "DE"
//     },
//     {
//       "id": 54051,
//       "logo_path": null,
//       "name": "Atman Entertainment",
//       "origin_country": ""
//     },
//     {
//       "id": 54052,
//       "logo_path": null,
//       "name": "Knickerbocker Films",
//       "origin_country": "US"
//     },
//     {
//       "id": 4700,
//       "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
//       "name": "The Linson Company",
//       "origin_country": "US"
//     },
//     {
//       "id": 25,
//       "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
//       "name": "20th Century Fox",
//       "origin_country": "US"
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "1999-10-15",
//   "revenue": 100853753,
//   "runtime": 139,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Mischief. Mayhem. Soap.",
//   "title": "Fight Club",
//   "video": false,
//   "vote_average": 8.433,
//   "vote_count": 26280
// }
