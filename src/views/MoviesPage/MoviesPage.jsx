import { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';
import { Button, Form, MovieCont } from './MoviesPage.styled';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    from: '',
  };

  componentDidMount() {
    if (this.state.query) {
      api.fetchMoviesName(this.state.query).then(movies =>
        this.setState({
          movies: [...movies],
          from: this.props.location.state?.from,
          query: this.props.location.state?.query,
        }),
      );
    }
  }

  onHandleChange = event => {
    event.preventDefault();

    this.setState({ query: event.target.value.toLowerCase() });
  };

  onFindMovies = event => {
    event.preventDefault();
    const inputValue = this.state.query;
    api.fetchMoviesName(inputValue).then(films =>
      this.setState({
        movies: [...films],
      }),
    );

    this.props.history.push({
      pathname: this.props.match.url,
      search: `query=${inputValue}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <MovieCont>
          <Form onSubmit={this.onFindMovies}>
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.onHandleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            />
            <Button type="submit">Search</Button>
          </Form>
        </MovieCont>
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
