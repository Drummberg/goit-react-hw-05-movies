import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';
import { Button, Form } from './MoviesPage.styled';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    if (this.query) {
      api.fetchMoviesName(this.query).then(movies =>
        this.setState({
          movies: [...movies],
          query: this.props.location.query,
        }),
      );
    }
  }

  onHandleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value.toLowerCase() });
  };

  onFindMovies = () => {
    const inputValue = this.state.query;
    this.props.history.push({
      pathname: this.props.match.url,
      search: `query=${inputValue}`,
    });
    api.fetchMoviesName(inputValue).then(movies =>
      this.setState({
        movies: [...movies],
      }),
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Form onSubmit={this.onFindMovies}>
          <input
            type="text"
            name="name"
            value={this.state.query}
            onChange={this.onHandleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <Button type="submit">Search</Button>
          {movies.length > 0 && <MovieList movies={movies} />}
        </Form>
      </>
    );
  }
}

export default MoviesPage;
