import styled from "styled-components";

export const StyleForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #eee;
`;

export const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  padding: 15px;
  transition: 0.5s linear;

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.03);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;
