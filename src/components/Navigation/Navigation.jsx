import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className="NavLink" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="NavLink" activeClassName="selected">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
