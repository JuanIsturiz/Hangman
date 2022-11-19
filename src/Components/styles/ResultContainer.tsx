import styled from "styled-components";

interface ResultContainerProps {
  res: string;
}

export const ResultContainer = styled.div<ResultContainerProps>`
  opacity: ${({ res }) => (res === "" ? 0 : 1)};
  width: 29rem;
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 1.5rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 1s linear;
  transition-delay: 0.5s;
  pointer-events: ${({ res }) => (res === "" ? "none" : "auto")};

  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 0.75rem;
    animation: grow 2s infinite linear;
    animation-delay: 0.5s;
  }
  button {
    width: 15rem;
    height: 3rem;
    cursor: ${({ res }) => (res ? "pointer" : "")};
    font-size: 1.25rem;
    color: #fff;
    padding: 0.75rem;
    background-color: rgba(0, 0, 0, 0.2);
    border: 0.15rem solid rgba(0, 0, 0, 0.5);
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
  }
  button:hover {
    background-color: rgba(61, 73, 136, 0.6);
  }
  button:active {
    scale: 1.1;
  }
  @keyframes grow {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.05;
    }
    100% {
      scale: 1;
    }
  }

  @media only screen and (max-width: 890px) {
    margin-top: 6.5rem;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 8rem;
  }
`;
