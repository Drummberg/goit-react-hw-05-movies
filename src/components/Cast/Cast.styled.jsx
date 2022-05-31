import styled from 'styled-components';

export const Img = styled.img`
  height: auto;
  width: 111px;
  border-radius: 5px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: grey;
  margin-top: 0;
`;

export const List = styled.li`
  margin-right: 15px;
  text-align: center;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  color: white;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`;

export const Char = styled.p`
  color: white;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`;
