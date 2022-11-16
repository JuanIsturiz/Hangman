import { Life, StyledLives } from "./styles/StyledLives";

interface LivesProps {
  lives: number;
  condition: boolean;
  remaining: boolean[];
}
const Lives = ({ condition, remaining, lives }: LivesProps) => {
  return (
    <>
      {condition && (
        <StyledLives lives={lives}>
          {remaining.map((life, idx) => (
            <Life key={`life_${idx}`} bg={life} />
          ))}
        </StyledLives>
      )}
    </>
  );
};

export default Lives;
