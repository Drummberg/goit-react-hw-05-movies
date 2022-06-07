import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import api from '../../services/fetchMovies';
import { Button, Form, MovieCont } from './MoviesPage.styled';

export default function MoviesPage() {
  // const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (query === '') {
      return;
    }

    setQuery(query);
    //  api.fetchMoviesName(query)
    //   .then(data => setMovie(data.results))
    // fetches(location.query);
    // console.log(location);
  }, [query]);

  function onFindMovies(event) {
    event.preventDefault();
    const inputValue = query;
    api.fetchMoviesName(inputValue).then(films => setMovie(films));

    history.push({
      search: `?query=${query}`,
      // state: {
      //   from: location
      // },
    });
  }

  function onHandleChange(event) {
    setQuery(event.target.value.toLowerCase());
  }

  // function fetches(query) {
  //   api.fetchMoviesName(query)
  //     .then(data => setMovie(data.results))
  // }

  return (
    <>
      <MovieCont>
        <Form onSubmit={onFindMovies}>
          <input
            type="text"
            defaultValue={query}
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
