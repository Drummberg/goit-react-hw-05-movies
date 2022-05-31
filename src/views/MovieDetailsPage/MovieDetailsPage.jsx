import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Cast from '../../components/Cast/Cast';
import api from '../../services/fetchMovies';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    query: '',
    casts: [],
    reviews: [],
    from: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.fetchMovieById(movieId).then(movie =>
      this.setState({
        movie,
      }),
    );
    api
      .fetchFilmCasts(movieId)
      .then(cast => this.setState({ casts: [...cast] }));

    api.fetchFilmReviews(movieId).then(review =>
      this.setState({
        reviews: [...review],
      }),
    );

    this.setState({
      from: this.props.location.state?.from,
      query: this.props.location.state?.query,
    });
  }

  buttonBack = () => {
    const { history } = this.props;
    this.state.query
      ? history.push({
          pathname: this.state?.from,
          search: `query=${this.state.query}`,
          query: this.state.query,
        })
      : history.push('/');
  };

  render() {
    const { title, vote_average, overview, genres, poster_path } =
      this.state.movie;
    const poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
    return (
      <>
        <MovieCont>
          <Button type="button" onClick={this.buttonBack}>
            Go back
          </Button>
          <Img src={poster_path && poster} alt={title} />
          <MovieAbout>
            <h2>{title}</h2>
            <p>User Score: {vote_average}/10</p>
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
                to={`${this.props.match.url}/cast`}
                activeStyle={{ fontWeight: 'bold', color: 'orange' }}
              >
                Cast
              </StyleLink>
            </li>
            <li>
              <StyleLink
                to={`${this.props.match.url}/reviews`}
                activeStyle={{ fontWeight: 'bold', color: 'orange' }}
              >
                Reviews
              </StyleLink>
            </li>
          </MenuUl>
        </Links>
        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            render={props => {
              return <Cast casts={this.state.casts} />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
