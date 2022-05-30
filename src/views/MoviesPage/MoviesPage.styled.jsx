import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: orange;
    border-radius: 3px;
    color: blue;
    font-weight: 700;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100px;
  padding-left: 10px;
`;
