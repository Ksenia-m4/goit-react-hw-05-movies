// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.

import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/getMovies";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const castList = await getMovieCast(movieId);
        setCastList(castList);
      } catch {
        Notiflix.Notify.failure("Failed to load cast. Please try again later.");
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <div>
        Top Billed Cast <span>({castList.length})</span>
      </div>
      <ul>
        {castList?.map((actor) => (
          <li key={actor.id}>
            <img
              src={`http://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt=""
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
