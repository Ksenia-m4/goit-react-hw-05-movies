import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/getMovies";
import {
  CastActor,
  CastActorCaracter,
  CastImgThumn,
  CastItem,
  CastList,
} from "./MovieCast.styled";

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
      {isLoading ? (
        <p>Loading cast...</p>
      ) : castList.length > 0 ? (
        <>
          <CastList>
            {castList.map((actor) => (
              <CastItem key={actor.id}>
                <CastImgThumn>
                  <img
                    src={`http://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={actor.name}
                  />
                </CastImgThumn>
                <div>
                  <CastActor>{actor.name}</CastActor>
                  <CastActorCaracter>
                    Character: {actor.character}
                  </CastActorCaracter>
                </div>
              </CastItem>
            ))}
          </CastList>
        </>
      ) : (
        <p>No cast information available.</p>
      )}
    </>
  );
};

export default MovieCast;
