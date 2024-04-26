import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

import { getSearchMovies } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputSearch = searchParams.get("query");

  useEffect(() => {
    if (!inputSearch) return;
    async function getMoviesByQuery() {
      try {
        setLoading(true);
        const movies = await getSearchMovies(inputSearch);
        setMovies(movies.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
        setIsError(false);
      }
    }
    getMoviesByQuery();
  }, [inputSearch]);

  const onSubmit = (inputSearch) => {
    setSearchParams({ query: inputSearch });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {Array.isArray(movies) && movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export default MoviesPage;
