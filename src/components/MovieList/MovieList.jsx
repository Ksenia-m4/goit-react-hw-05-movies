import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  MovieItem,
  MovieLink,
  MovieListWrapper,
  MovieThumb,
  MoviePic,
  MovieTitle,
} from "./Movielist.styled";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MovieListWrapper>
        {movies?.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieThumb>
                <MoviePic
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
              </MovieThumb>
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieListWrapper>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
