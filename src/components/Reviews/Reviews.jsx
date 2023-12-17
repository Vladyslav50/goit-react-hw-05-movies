import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { StyledReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchReviews(movieId);
        setMovieReviews(results);
        console.log(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieReviews.length ? (
        <StyledReviews>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </StyledReviews>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
