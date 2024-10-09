// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieReviews } from "../../services/getMovies";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const reviewList = await getMovieReviews(movieId);
        setReviewList(reviewList);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load reviews. Please try again later."
        );
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <h3> Reviews</h3>
      {reviewList?.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        reviewList.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </>
  );
};

export default MovieReviews;
