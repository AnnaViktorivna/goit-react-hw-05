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
  console.log(response.data.results);
  return response;
};
