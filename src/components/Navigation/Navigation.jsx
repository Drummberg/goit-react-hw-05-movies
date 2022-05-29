import React from 'react';
import { StyleLink, MenuUl } from './Navigation.styled';

const Navigation = () => {
  return (
    <MenuUl>
      <li>
        <StyleLink
          exact
          to="/"
          activeStyle={{ fontWeight: 'bold', color: 'orange' }}
        >
          Home
        </StyleLink>
      </li>
      <li>
        <StyleLink
          exact
          to="/movies"
          activeStyle={{ fontWeight: 'bold', color: 'orange' }}
        >
          Movies
        </StyleLink>
      </li>
    </MenuUl>
  );
};

export default Navigation;
