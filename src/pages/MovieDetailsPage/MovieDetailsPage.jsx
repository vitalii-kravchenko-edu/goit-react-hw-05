import { lazy, useEffect, useRef, useState } from "react";
import {
  Link,
  useParams,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

import { getMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovieDetails(movieById);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <Link to={backLinkRef.current}>⬅ Go back</Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width={300}
            />
            <ul>
              <li>
                <h2>
                  {movieDetails.title} ({movieDetails.release_date})
                </h2>
                <p>User score: {movieDetails.vote_average}</p>
              </li>
              <li>
                <h3>Overview </h3>
                <p>{movieDetails.overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <p>
                  {movieDetails.genres.map((genre) => genre.name).join(", ")}
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
              <Outlet />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
