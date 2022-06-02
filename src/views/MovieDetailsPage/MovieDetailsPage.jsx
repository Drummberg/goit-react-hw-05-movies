import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
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

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function buttonBack() {}

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
              to={`${match.url}/cast`}
              state={{ from: location }}
              activeStyle={{ fontWeight: 'bold', color: 'orange' }}
            >
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink
              to={`${match.url}/reviews`}
              state={{ from: location }}
              activeStyle={{ fontWeight: 'bold', color: 'orange' }}
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

// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import {
//   Button,
//   MovieCont,
//   MovieAbout,
//   MovieGenres,
//   MovieGenresP,
//   MenuUl,
//   Links,
//   StyleLink,
//   Img,
// } from './MovieDetailsPage.styled';
// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';
// import api from '../../services/fetchMovies';

// class MovieDetailsPage extends Component {
//   state = {
//     movie: {},
//     query: '',
//     casts: [],
//     reviews: [],
//     from: '',
//   };

//     this.setState({
//       from: this.props.location.state?.from,
//       query: this.props.location.state?.query,
//     });
//   }

//   buttonBack = () => {
//     const { history } = this.props;
//     history.goBack();
//   };

//   render() {
//     const { title, vote_average, overview, genres, poster_path } =
//       this.state.movie;
//
//
// }

// export default MovieDetailsPage;
