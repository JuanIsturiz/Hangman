import styled from "styled-components";

interface StyledLivesProps {
  lives: number;
}

export const StyledLives = styled.div<StyledLivesProps>`
  width: 30rem;
  margin: auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  opacity: ${({ lives }) => (lives < 1 ? 0 : 1)};
  transition: opacity 750ms linear;
`;

interface LifeProps {
  bg: boolean;
}

export const Life = styled.div<LifeProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ bg }) => (bg ? "#6CF593" : "#F55858")};
  border: 0.2rem solid #333;
  border-radius: 100%;
  transition: background-color 600ms linear;
`;
