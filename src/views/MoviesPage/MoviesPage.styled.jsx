import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  font-size: 16px;
  width: 100px;
  margin-left: 10px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    background-color: orange;
    border-radius: 5px;
    color: blue;
    font-weight: 700;
  }
`;
export const Form = styled.form`
  position: absolute;
  border-top: none;
  display: flex;
  width: 100%;
  padding-left: 20px;
  margin-top: 10px;

  color: white;
`;

export const MovieCont = styled.div`
  background-color: grey;
  width: 100%;
`;

export const Input = styled.input`
  background-color: transparent;
  border-top: none;
`;
