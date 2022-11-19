import styled from "styled-components";

export const StyledHome = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0.15rem solid rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
  letter-spacing: 0.1rem;
  animation: fade 1s ease-out;
  &:hover {
    background-color: rgba(150, 81, 182, 0.8);
  }
  &:active {
    scale: 1.1;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 2rem;
  }
`;
