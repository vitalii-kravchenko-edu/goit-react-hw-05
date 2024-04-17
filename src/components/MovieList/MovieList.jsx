import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
