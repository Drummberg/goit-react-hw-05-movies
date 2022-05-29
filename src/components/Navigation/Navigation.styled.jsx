import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
    padding-bottom: 12px;
  color: 'black';
  font-size: 18px;
  font-weight: 500;
  font-family: 'Comfortaa', sans-serif;
  border-bottom: 3px solid transparent;
  transition: color: #red;
  text-decoration: none;
  list-style: none;
  margin-right: 20px;

    &.active {
    color: 'red';
    // border-bottom: 3px solid #000;
  }

  &:hover {
    cursor: pointer;
    color: 'red';
  }
  `;

export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 20px;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  margin-top: 0;
  padding-top: 10px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);
`;
