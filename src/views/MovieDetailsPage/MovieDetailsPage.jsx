import { useEffect, useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Button,
  MovieCont,
  MovieAbout,
  MovieGenres,
  MovieGenresP,
  MenuUl,
  Links,
  StyleLink,
  Img,
} from './MovieDetailsPage.styled';
import api from '../../services/fetchMovies';

const Casts = lazy(() =>
  import('../../components/Casts/Casts' /* webpackChunkName: "cast-view" */),
);

const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "reviews-view" */
  ),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { title, vote_average, overview, genres, poster_path } = movie;
  const location = useLocation();
  const { movieId } = useParams();
  const poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const [page] = useState(location.state.from);
  let navigate = useNavigate();

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function buttonBack() {
    navigate(page);
  }

  return (
    <>
      <MovieCont>
        <Button type="button" onClick={buttonBack}>
          Go back
        </Button>
        <Img src={poster_path && poster} alt={title} />
        <MovieAbout>
          <h2>{title}</h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <MovieGenres>
            {genres &&
              genres.map(genre => (
                <MovieGenresP key={genre.id}>{genre.name}</MovieGenresP>
              ))}
          </MovieGenres>
        </MovieAbout>
      </MovieCont>
      <Links>
        <MenuUl>
          <li>
            <StyleLink to={`cast`} state={{ from: location }}>
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink to={`reviews`} state={{ from: location }}>
              Reviews
            </StyleLink>
          </li>
        </MenuUl>
      </Links>
      <Suspense fallback={<div>Loading...Please wait..</div>}></Suspense>
      <Routes>
        <Route path="/cast" exact element={<Casts />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

MovieDetailsPage.propTypes = {
  onClick: PropTypes.func,
};
