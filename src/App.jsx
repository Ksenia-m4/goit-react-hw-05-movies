import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

import "./App.css";

// Api key = 7623ff9d25d3ceb616f45fb343789764

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
