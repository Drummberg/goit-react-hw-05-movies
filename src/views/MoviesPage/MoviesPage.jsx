import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';
import { Button, Form, MovieCont } from './MoviesPage.styled';

export default function MoviesPage() {
  const { location } = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const history = createBrowserHistory({ window });
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const query = params.get('query');
    if (query) {
      setQuery(query);
      api.fetchMoviesName(query).then(films => setMovie(films));
    }
  }, [params]);

  function onFindMovies(event) {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }

    const inputValue = query;
    api.fetchMoviesName(inputValue).then(films => setMovie(films));
    setParams(`query=${query}`);

    history.push({
      ...location,
      search: `?query=${query}`,
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
            value={query}
            name="name"
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
