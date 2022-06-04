import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';
import { Button, Form, MovieCont } from './MoviesPage.styled';

export default function MoviesPage() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const history = useHistory();
  const { movieId } = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    setQuery(query);

    const fetchMoviesName = () => {
      api.get(`'movies'/${query}`).then(films => setMovie(films));
    };

    fetchMoviesName();
  }, [movieId]);

  function onFindMovies(event) {
    event.preventDefault();
    const inputValue = query;
    api.fetchMoviesName(inputValue).then(films => setMovie(films));

    history.push({
      pathname: `${match.url}`,
      search: `query=${query}`,
      state: {
        from: location,
      },
    });
  }

  function onHandleChange(event) {
    setQuery(event.target.value.toLowerCase());
  }

  return (
    <>
      <MovieCont>
        <Form onSubmit={onFindMovies}>
          <input
            type="text"
            name="query"
            onChange={onHandleChange}
            autoComplete="on"
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

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
};
