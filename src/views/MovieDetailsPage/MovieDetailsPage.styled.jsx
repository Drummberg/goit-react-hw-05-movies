import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
    position: absolute;
    padding: 5px;
    font-size: 16px;
    width: 100px;
    margin-left: 10px;
    margin-bottom: 15px;
    margin-top: 3px;
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 5px;
        &:hover {
           background-color: orange;
           color: blue;
           font-weight: 700;
`;

export const MovieCont = styled.div`
  display: flex;
  background-color: grey;
  color: black;
`;

export const MovieAbout = styled.div`
  margin-left: 20px;
  margin-top: 15px;
`;

export const MovieGenres = styled.div`
  display: flex;
`;

export const MovieGenresP = styled.p`
  margin-right: 15px;
  font-weight: 400;
  margin-top: 0;
`;
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);
`;

export const Links = styled.div`
  background-color: grey;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
`;

export const StyleLink = styled(NavLink)`
    padding-bottom: 12px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: color: red;
  text-decoration: none;
  list-style: none;
  margin-right: 20px;
    &:hover {
    cursor: pointer;
    color: red;
  }
  `;

export const Img = styled.img`
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 40px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.9);
`;
