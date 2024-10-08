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

export { getPopularMovies };
