import styled from "styled-components";

export const OptionsContainer = styled.div`
  margin-top: 5rem;

  h2 {
    color: #fff;
    font-size: 3.5rem;
    text-shadow: 2px 2px 2px #333;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  img {
    width: 6rem;
  }

  img:first-child {
    animation: up 2s infinite linear, grow 1s ease-in-out;
  }
  img:last-child {
    animation: down 2s infinite linear, grow 1s ease-in-out;
  }
  img:hover {
    cursor: pointer;
    scale: 1.1;
  }
  img:active {
    scale: 1;
  }

  img {
    stroke: blue;
    fill: blue;
  }
  button svg {
    background-color: blue;
    stroke: blue;
    fill: blue;
  }
  button path {
    fill: blue;
    stroke: blue;
  }

  @keyframes up {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-0.15rem);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(0.15rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes down {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(0.15rem);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-0.15rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes grow {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
`;
