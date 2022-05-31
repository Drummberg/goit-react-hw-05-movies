import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
  padding-bottom: 12px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  list-style: none;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  margin: 0;
  padding-top: 10px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);
  background-color: grey;
`;
