import { Suspense, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
import BackLink from "../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  return (
    <>
      <BackLink backLink={backLink.current}>&larr; Go back</BackLink>

      <MovieCard />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
