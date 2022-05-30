import { Component } from 'react';
import MovieList from '../components/MovieList/MovieList';
import api from '../services/fetchMovies';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api.fetchPopularMovies().then(movies =>
      this.setState({
        movies: [...movies],
      }),
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
