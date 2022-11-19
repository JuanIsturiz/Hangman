import styled from "styled-components";

export const StyledKeyboard = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2rem;
  gap: 2rem;
  animation: slide 1s ease-out;

  @keyframes slide {
    0% {
      transform: translateY(150%);
    }
    75% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

interface KeyProps {
  bg: boolean;
}

export const Key = styled.div<KeyProps>`
  text-align: center;
  color: #222;
  border-radius: 10%;
  width: 3.5rem;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border: 0.2rem solid #222;
  background-color: ${({ bg }) => (bg ? "#af8e2c" : "#F5D36C")};
  transition: background-color 500ms linear;

  &:hover {
    background-color: #af8e2c;
    transition: background-color 250ms linear;
  }
`;
