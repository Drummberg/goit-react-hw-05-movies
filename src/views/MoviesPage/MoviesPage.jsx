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
    if (this.props.location.query) {
      api.fetchMoviesName(this.props.location.query).then(films =>
        this.setState({
          movies: [...films],
          query: this.props.location.query,
        }),
      );
    }
  }

  onHandleChange = event => {
    this.setState({ query: event.target.value });
  };

  onFindMovies = () => {
    const inputValue = this.state.query;
    this.props.history.push({
      pathname: this.props.match.url,
      search: `query=${inputValue}`,
    });
    api.fetchMoviesName(inputValue).then(films =>
      this.setState({
        movies: [...films],
      }),
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Form>
          <input
            type="text"
            value={this.state.query}
            onChange={this.onHandleChange}
          />
          <Button type="submit" onClick={this.onFindMovies}>
            Search
          </Button>
          {movies.length > 0 && (
            <MovieList movies={movies} query={this.state.query} />
          )}
        </Form>
      </>
    );
  }
}

export default MoviesPage;
