import { useEffect, useState } from 'react';
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
            value={query}
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

// import { Component } from 'react';
// import MovieList from '../../components/MovieList/MovieList';
// import api from '../../services/fetchMovies';
// import { Button, Form, MovieCont } from './MoviesPage.styled';

// class MoviesPage extends Component {
//   state = {
//     movies: [],
//     query: '',
//     from: '',
//   };

//   componentDidMount() {
//     if (this.state.query) {
//       api.fetchMoviesName(this.state.query).then(movies =>
//         this.setState({
//           movies: [...movies],
//           from: this.props.location.state?.from,
//           query: this.props.location.state?.query,
//         }),
//       );
//     }
//   }

//   onHandleChange = event => {
//     event.preventDefault();

//     this.setState({ query: event.target.value.toLowerCase() });
//   };

//   onFindMovies = event => {
//     event.preventDefault();
//     const inputValue = this.state.query;
//     api.fetchMoviesName(inputValue).then(films =>
//       this.setState({
//         movies: [...films],
//       }),
//     );

//     this.props.history.push({
//       pathname: this.props.match.url,
//       search: `query=${inputValue}`,
//     });
//   };

//   render() {
//     const { movies } = this.state;
//     return (
//       <>
//         <MovieCont>
//           <Form onSubmit={this.onFindMovies}>
//             <input
//               type="text"
//               name="query"
//               value={this.state.query}
//               onChange={this.onHandleChange}
//               autoComplete="off"
//               autoFocus
//               placeholder="Search movie"
//             />
//             <Button type="submit">Search</Button>
//           </Form>
//         </MovieCont>
//         {movies.length > 0 && <MovieList movies={movies} />}
//       </>
//     );
//   }
// }

// export default MoviesPage;
