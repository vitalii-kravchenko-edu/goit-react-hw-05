import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsCast = await getMovieCast(movieId);
        setMovieDetails(movieDetailsCast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return (
    <ul>
      {movieDetails !== null &&
        movieDetails.cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              width="200"
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
