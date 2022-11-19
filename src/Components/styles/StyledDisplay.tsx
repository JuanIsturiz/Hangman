import styled from "styled-components";

interface StyledDisplayProps {
  res: boolean;
}

export const StyledDisplay = styled.div<StyledDisplayProps>`
  position: absolute;
  top: ${({ res }) => (!res ? "10.25rem" : "6rem")};
  left: 0;
  right: 0;
  width: 55%;
  align-self: center !important;
  margin: auto;
  background-color: ${({ res }) => (res ? "rgba(0, 0, 0, 0.35)" : "")};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: top 750ms ease-in-out;
  transition-delay: 750ms;
  animation: intro 1s ease-out;
  @keyframes intro {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 55%;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 890px) {
    width: 75%;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

interface LetterContainerProps {
  res: string;
}

export const LetterContainer = styled.div<LetterContainerProps>`
  width: 3rem;
  div:first-child {
    color: ${({ res }) =>
      res === "" ? "#222" : res === "loss" ? "#F55858" : "#6CF593"};
    font-size: 3rem;
    width: auto;
    height: 3.5rem;
    padding: 0.25rem;
    opacity: 0;
    transition: opacity 350ms linear;
  }
`;

interface UnderlineProps {
  res: string;
}

export const Underline = styled.div<UnderlineProps>`
  width: 100%;
  border-top: 0.2rem solid
    ${({ res }) =>
      res === "" ? "#222" : res === "loss" ? "#F55858" : "#6CF593"};
`;
