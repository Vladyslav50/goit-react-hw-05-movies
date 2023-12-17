import axios from 'axios';

// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.params = {
  api_key: 'd584b83a8ac26c5232863b56a07deb02',
};

export const fetchFilms = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day'
  );
  return data;
};

export const fetchMovie = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`
  );
  return data;
};

export const fetchDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  return data;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  );
  return data;
};
