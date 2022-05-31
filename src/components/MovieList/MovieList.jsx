import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyleLink, Li, Img, Ul } from './MovieList.styled';
import notfound from '../../images/notfound.png';

const MovieList = ({ movies }) => {
  return (
    <Ul>
      {movies.map(({ id, title, name, poster_path }) => {
        const poster = `https://image.tmdb.org/t/p/w342${poster_path}`;
        return (
          <Li key={id}>
            <Img src={poster_path ? poster : notfound} alt={name} />
            <StyleLink to={`/movies/${id}`}>{title ? title : name}</StyleLink>
          </Li>
        );
      })}
    </Ul>
  );
};

export default withRouter(MovieList);
