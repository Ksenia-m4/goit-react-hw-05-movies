import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending today:</h1>
      <ul>
        {movies.map((movie) => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        ))}
      </ul>
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
