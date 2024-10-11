import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "7623ff9d25d3ceb616f45fb343789764";

async function getPopularMovies() {
  const params = {
    api_key: API_KEY,
  };

  try {
    const response = await axios.get("trending/movie/day", { params });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
}

async function getMovieById(movieId) {
  const params = {
    api_key: API_KEY,
  };

  try {
    const response = await axios.get(`movie/${movieId}`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
}

async function getMovieCast(movieId) {
  const params = {
    api_key: API_KEY,
  };
  // movie/917496/credits?api_key=7623ff9d25d3ceb616f45fb343789764
  try {
    const response = await axios.get(`movie/${movieId}/credits`, { params });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
}

async function getMovieReviews(movieId) {
  const params = {
    api_key: API_KEY,
  };
  //movie/{movie_id}/reviews
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, { params });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
}

async function getMovie(query) {
  const params = {
    api_key: API_KEY,
    query,
  };
  // search/movie

  try {
    const response = await axios.get("search/movie", { params });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
}

export {
  getPopularMovies,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovie,
};
