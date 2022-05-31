import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
  color: black;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: white;
    font-weigth: 700;
  }
`;

export const Li = styled.li`
  margin-right: 15px;
  text-align: center;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  height: auto;
  width: 111px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: grey;
  padding-top: 20px;
  margin: 0;
`;
