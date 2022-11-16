import {
  LetterContainer,
  StyledDisplay,
  Underline,
} from "./styles/StyledDisplay";

interface DisplayProps {
  result: string;
  condition: boolean;
  answer: string[];
}

const Display = ({ condition, answer, result }: DisplayProps) => {
  return (
    <>
      {condition && (
        <StyledDisplay res={!!result}>
          {answer.map((letter, idx) => (
            <LetterContainer key={`letter_${idx}`} res={result}>
              <div style={{ opacity: !letter ? 0 : 1 }}>{letter}</div>
              <Underline res={result} />
            </LetterContainer>
          ))}
        </StyledDisplay>
      )}
    </>
  );
};

export default Display;
