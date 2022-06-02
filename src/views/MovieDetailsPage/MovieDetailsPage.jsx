import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useHistory,
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
  const match = useRouteMatch();
  const poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const history = useHistory();

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(location);
  function buttonBack() {
    history.push(location.state.from);
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
            <StyleLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </StyleLink>
          </li>
        </MenuUl>
      </Links>
      <Suspense fallback={<div>Loading...Please wait..</div>}></Suspense>
      <Switch>
        <Route path={`${match.path}/cast`} exact component={Casts} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch>
    </>
  );
}
