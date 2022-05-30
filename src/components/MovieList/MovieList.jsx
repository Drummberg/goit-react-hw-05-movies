import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyleLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <StyleLink to={`movies/${id}`}>{title ? title : name}</StyleLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
