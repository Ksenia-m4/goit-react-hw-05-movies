import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/getMovies";
import Notiflix from "notiflix";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load movies. Please try again later."
        );
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      {movies?.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </>
  );
};

export default Home;
