import { useState, useEffect } from 'react';
import { fetchFilms } from '../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendFilms = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFilms();
        const filmsData = data.results;
        setTrendFilms(filmsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendFilms();
  }, []);

  return (
    <div className="home-page">
      <h1 className="main-title">Trending today</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {trendFilms && <MoviesList movies={trendFilms} />}
    </div>
  );
};

export default Home;
