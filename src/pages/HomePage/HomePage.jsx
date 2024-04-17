import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

import { getTrandingMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrandingMovies();
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsError(false);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies !== null && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
