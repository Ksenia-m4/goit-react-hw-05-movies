import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Notiflix from "notiflix";

import { getMovieReviews } from "../../services/getMovies";
import { ReviewsAuthor, ReviewsItem, ReviewsList } from "./MovieReviews.styled";

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
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : reviewList.length > 0 ? (
        <ReviewsList>
          {reviewList.map((review) => (
            <ReviewsItem key={review.id}>
              <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
              <p>{review.content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <p>We don`t have any reviews for this movie</p> // Показать только после завершения загрузки
      )}
    </>
  );
};

export default MovieReviews;
