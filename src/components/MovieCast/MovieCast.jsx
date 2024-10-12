import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/getMovies";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      setIsLoading(true);
      try {
        const castList = await getMovieCast(movieId);
        setCastList(castList);
      } catch {
        Notiflix.Notify.failure("Failed to load cast. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <h3>
        Top Billed Cast <span>({castList.length})</span>
      </h3>

      {isLoading ? (
        <p>Loading cast...</p>
      ) : castList.length > 0 ? (
        <ul>
          {castList.map((actor) => (
            <li key={actor.id}>
              <img
                src={`http://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </>
  );
};

export default MovieCast;
