import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovie } from '../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchMoviesByKeyword = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovie(query);
        setSearchedMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByKeyword();
  }, [query]);

  const onSubmit = evt => {
    evt.preventDefault();
    const searchWord = evt.currentTarget.searchInput.value.trim();
    if (!searchWord) {
      return toast.warn('Please, enter your keyword!');
    }
    setSearchParams({ query: searchWord });

    evt.currentTarget.reset();
  };

  return (
    <div>
      <Searchbar handleSubmit={onSubmit} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Slide}
        theme="colored"
        style={{ top: '100px' }}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {searchedMovies && <MoviesList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
