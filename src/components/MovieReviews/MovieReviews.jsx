// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieReviews } from "../../services/getMovies";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      setIsLoading(true);
      try {
        const reviewList = await getMovieReviews(movieId);
        setReviewList(reviewList);
      } catch {
        Notiflix.Notify.failure(
          "Failed to load reviews. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : reviewList.length > 0 ? (
        <ul>
          {reviewList.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p> // Показать только после завершения загрузки
      )}
    </>
  );
};

export default MovieReviews;
