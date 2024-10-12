import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieById } from "../services/getMovies";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load movie details. Please try again later."
        );
      }
    }

    fetchMovieById();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>; // Состояние загрузки
  }

  return (
    movie && (
      <>
        <div className="movie-details">
          <Link to={backLinkLocation.current} className="back-button">
            &larr; Go back
          </Link>

          <div className="movie-container">
            <div className="img-thmb">
              <img
                width="300px"
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </div>

            <div className="movie-info">
              <h2 className="movie-title">
                {movie.title} ({movie.release_date?.slice(0, 4)})
              </h2>
              <p className="movie-score">
                User Score: {movie.vote_average * 10}%
              </p>
              <h3>Overview</h3>
              <p className="movie-overview">{movie.overview}</p>
              <h3>Genres</h3>
              <ul className="movie-genres">
                {movie.genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="additional-info">
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsPage;
