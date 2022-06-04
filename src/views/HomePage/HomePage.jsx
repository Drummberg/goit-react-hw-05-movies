import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';

export default function HomePage() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(movies => setMovie(movies));
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

HomePage.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
