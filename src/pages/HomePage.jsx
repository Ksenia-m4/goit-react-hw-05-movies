import { useEffect, useState } from "react";

import Notiflix from "notiflix";

import { getPopularMovies } from "../services/getMovies";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const fetchedMovies = await getPopularMovies();
        setMovies(fetchedMovies);
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
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
