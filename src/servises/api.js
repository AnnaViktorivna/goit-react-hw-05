import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDllY2Y1ODNmMGJhOTIzMDEzMDY2ZTE3YjFkZmNjMCIsInN1YiI6IjY2MTAyY2ExMmQ1MzFhMDE3ZDdlZDRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bgDA313wh_03UHuL-uNJLPfD-b46N4wI9ypnbyL1Ta0",
  },
};
export const getApi = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=5e0b2f9c0f6a0f0f0f0f0f0f0f0f0f0f",
    options
  );
  console.log("Trending movies", response.data.results);
  return response;
};

export const getMovieById = async (id) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/${id}?language=en-US",
    options
  );
  console.log("Movie details:", response.data);
  return response;
};

export const getMovieByQuery = async (query) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1",
    options
  );
  console.log("Search movie by query:", response.data);
  return response;
};

export const getMovieByCredits = async (id) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/${id}/credits?language=en-US",
    options
  );
  console.log("Movie credits:", response.data);
  return response;
};

export const getMovieByReviews = async (id) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1",
    options
  );
  console.log("Movie reviews:", response.data);
  return response;
};
