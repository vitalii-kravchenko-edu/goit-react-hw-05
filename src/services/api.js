import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTEwZGM2Yzg0ZjVjY2UyNjBhNmJlMjU4NmU0OWVlOSIsInN1YiI6IjY2MWUwNjI5M2M0MzQ0MDE0OTAyMWFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLiu-h5A8EUMmvgFcmc_pTC5_202xrOtEvDXln2qmXw";

export const getTrandingMovies = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/trending/movie/day`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};

export const getMovieById = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getMovieCast = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getMovieReviews = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
