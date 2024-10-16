import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieById } from "../../services/getMovies";

import { Loader } from "../Loader/Loader";
import {
  AdditionalBtnGroup,
  AdditionalContainer,
  AdditionalLink,
  MovieContainer,
  MovieGenres,
  MovieGenresList,
  MovieInfo,
  MovieOverview,
  MoviePic,
  MoviePoster,
  MovieScore,
  MovieSubtitle,
  MovieTitle,
} from "./MovieCard.styled";

const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchMovieById() {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load movie details. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieById();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    movie && (
      <>
        <MovieContainer>
          <MoviePoster>
            {movie.poster_path ? (
              <MoviePic
                width="300px"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            ) : (
              <p>No poster available</p>
            )}
          </MoviePoster>

          <MovieInfo>
            <MovieTitle>
              {movie.title} ({movie.release_date?.slice(0, 4)})
            </MovieTitle>

            {movie.vote_average !== null && movie.vote_average !== undefined ? (
              movie.vote_average > 0 ? (
                <MovieScore>User Score: {movie.vote_average * 10}%</MovieScore>
              ) : (
                <MovieScore>No score available</MovieScore>
              )
            ) : (
              <MovieScore>No data available</MovieScore>
            )}

            <MovieSubtitle>Overview</MovieSubtitle>
            {movie.overview ? (
              <MovieOverview>{movie.overview}</MovieOverview>
            ) : (
              <MovieOverview>No overview available.</MovieOverview>
            )}

            <MovieSubtitle>Genres</MovieSubtitle>
            {movie.genres && movie.genres.length > 0 ? (
              <MovieGenresList>
                {movie.genres.map((genre) => (
                  <MovieGenres key={genre.id}>{genre.name}</MovieGenres>
                ))}
              </MovieGenresList>
            ) : (
              <p>
                Sorry, we don`t have any information about genres for this
                movie.
              </p>
            )}
          </MovieInfo>
        </MovieContainer>

        <AdditionalContainer>
          <MovieSubtitle>Additional information</MovieSubtitle>
          <AdditionalBtnGroup>
            <li>
              <AdditionalLink to="cast">Cast</AdditionalLink>
            </li>

            <li>
              <AdditionalLink to="reviews">Reviews</AdditionalLink>
            </li>
          </AdditionalBtnGroup>
        </AdditionalContainer>
      </>
    )
  );
};

export default MovieCard;
