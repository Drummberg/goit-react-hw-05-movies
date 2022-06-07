import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleLink, Li, Img, Ul } from './MovieList.styled';
import notfound from '../../images/notfound.png';

export default function MovieList({ movies }) {
  const [query, setQuery] = useState('');
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (query) {
      setQuery(query);
    }
  }, [query]);

  return (
    <>
      {movies && (
        <Ul>
          {movies.map(({ id, title, name, poster_path }) => {
            const poster = `https://image.tmdb.org/t/p/w342${poster_path}`;
            return (
              <Li key={id}>
                <Img src={poster_path ? poster : notfound} alt={name} />
                <StyleLink to={`/movies/${id}`} state={{ from: location }}>
                  {title ? title : name}
                </StyleLink>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
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
