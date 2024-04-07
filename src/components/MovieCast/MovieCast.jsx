import { getMovieByCredits } from "../../servises/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const IMG = "https://image.tmdb.org/t/p/w500";
const MovieCast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCasts() {
      try {
        const response = await getMovieByCredits(movieId);
        console.log(response.data);
        setMovieCasts(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCasts();
  }, [movieId]);
  return (
    <div>
      <ul>
        {movieCasts.map((cast) => (
          <li key={cast.id}>
            <img
              style={{ width: "150px" }}
              src={`${IMG}${cast.profile_path}`}
              alt=''
            />
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

// "cast": [
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 15556,
//       "known_for_department": "Acting",
//       "name": "Rebecca Hall",
//       "original_name": "Rebecca Hall",
//       "popularity": 65.983,
//       "profile_path": "/cVZaQrUY7F5khCBYdKDlEppHnQi.jpg",
//       "cast_id": 10,
//       "character": "Dr. Ilene Andrews",
//       "credit_id": "6307a3a8bb070d0095ae6147",
//       "order": 0
//     },
