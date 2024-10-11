import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovie } from "../services/getMovies";

import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [inputValue, setInputValue] = useState(query);

  const fetchMovies = async (query) => {
    try {
      const fetchedMovies = await getMovie(query);
      if (fetchedMovies.length === 0) {
        Notiflix.Notify.failure("No movies found for this query.");
      } else {
        setMovies(fetchedMovies);
      }
    } catch {
      Notiflix.Notify.failure("Failed to load movies. Please try again later.");
    }
  };

  const onChange = (evt) => {
    const searchQuery = evt.target.value;
    setInputValue(searchQuery);

    const nextParams = searchQuery !== "" ? { query: searchQuery } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      Notiflix.Notify.failure("Please enter a search query.");
      return;
    }

    setMovies([]);
    fetchMovies(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
