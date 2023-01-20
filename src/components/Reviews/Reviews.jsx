import { getMovieReviewsById } from 'api/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  useEffect(() => {
    getMovieReviewsById(params.movieId)
      .then(r => setReviews(r.results))
      .catch(console.log);
  }, [params.movieId]);
  console.log('reviews', reviews);
  if (!reviews) {
    return;
  }
  return (
    <>
      {reviews.length ? (
        <div>
          <h2>Reviews:</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>
                  <b>Author: {review.author}</b>
                </p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>No reviews yet</h3>
      )}
    </>
  );
};

export default Reviews