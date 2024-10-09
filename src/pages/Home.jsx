import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/getMovies";
import Notiflix from "notiflix";
import MovieList from "../components/MovieList/MovieList";

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
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
