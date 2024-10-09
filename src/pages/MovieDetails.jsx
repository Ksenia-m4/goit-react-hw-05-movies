import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieById } from "../services/getMovies";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load movies. Please try again later."
        );
      }
    }

    fetchMovieById();
  }, [movieId]);

  return (
    movie && (
      <main>
        <div className="movie-details">
          <button className="back-button">&larr; Go back</button>

          <div className="movie-container">
            <div className="img-thmb">
              <img
                width="300px"
                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
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

        <Outlet />
      </main>
    )
  );
};

export default MovieDetails;
