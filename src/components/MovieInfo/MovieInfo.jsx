import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, useRef, lazy } from 'react';
import { MainInfo, StyledContainer } from './MovieInfo.styled';
import { AdditionalInfo } from './MovieInfo.styled';
import { StyledLink } from './MovieInfo.styled';
import Loader from 'components/Loader/Loader';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const defaultImg =
  'https://i.pinimg.com/564x/00/59/57/005957e914d39cf6497fa6d778c02b7c.jpg';

const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const BackLinkHref = useRef(location.state?.from ?? '/');

  return (
    <StyledContainer>
      <StyledLink to={BackLinkHref.current}>&#9754; Go back</StyledLink>
      <MainInfo>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div className="movie-info">
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {movie.vote_average.toFixed(1)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className="genres-list">
            {movie.genres &&
              movie.genres.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </MainInfo>
      <h3>Additional information:</h3>
      <AdditionalInfo>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AdditionalInfo>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};

export default MovieInfo;
