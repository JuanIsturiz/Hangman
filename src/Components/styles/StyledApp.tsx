import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 1rem 0;
  text-align: center;
  h1 {
    font-size: 3rem;
    color: #fff;
    text-shadow: 2px 2px 2px #333;
    margin-bottom: 2rem;
  }

  h1,
  h2 {
    animation: grow 1s ease-in-out;
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
