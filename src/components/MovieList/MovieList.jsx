import { useEffect, useState } from 'react';
import {
  useLocation,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleLink, Li, Img, Ul } from './MovieList.styled';
import notfound from '../../images/notfound.png';

export default function MovieList({ movies }) {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (query) {
      setQuery(query);
    }

    history.push({
      pathname: `${match.url}`,
      search: `query=${query}`,
      state: {
        from: location,
      },
    });
  }, [history, match.url, query]);

  return (
    <Ul>
      {movies.map(({ id, title, name, poster_path }) => {
        const poster = `https://image.tmdb.org/t/p/w342${poster_path}`;
        return (
          <Li key={id}>
            <Img src={poster_path ? poster : notfound} alt={name} />
            <StyleLink
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {title ? title : name}
            </StyleLink>
          </Li>
        );
      })}
    </Ul>
  );
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
