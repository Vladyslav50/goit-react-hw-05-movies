import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetails } from 'services/api';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchFilmDetails = async () => {
      try {
        setIsLoading(true);
        const details = await fetchDetails(movieId);
        setFilmDetails(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {filmDetails && <MovieInfo movie={filmDetails} />}
    </>
  );
};

export default MovieDetails;
