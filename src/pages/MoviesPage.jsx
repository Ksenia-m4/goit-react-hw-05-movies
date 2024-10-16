import { useContext, useEffect, useState } from "react";

import Notiflix from "notiflix";

import { getMovie } from "../services/getMovies";
import { ContextAlert } from "../context/ContextProvider";

import MovieList from "../components/MovieList/MovieList";
import Searchbox from "../components/SearchBox/Searchbox";
import { Loader } from "../components/Loader/Loader";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const { movies, setMovies } = useContext(ContextAlert);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await getMovie(query);
        if (fetchedMovies.length === 0) {
          Notiflix.Notify.failure("No movies found for this query.");
        } else {
          setMovies(fetchedMovies);
        }
      } catch {
        Notiflix.Notify.failure(
          "Failed to load movies. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query, setMovies]);

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <Searchbox onSubmit={handleSubmit}></Searchbox>

      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
