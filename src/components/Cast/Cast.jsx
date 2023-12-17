import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { StyledCast } from './Cast.styled';

const defaultImg =
  'https://i.pinimg.com/564x/00/59/57/005957e914d39cf6497fa6d778c02b7c.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieCast && (
        <StyledCast>
          {movieCast.map(({ id, name, character, profile_path }) => (
            <li className="actor" key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
              <b>{name}</b>
              <p>{character}</p>
            </li>
          ))}
        </StyledCast>
      )}
    </>
  );
};

export default Cast;
