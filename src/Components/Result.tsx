import { ResultContainer } from "./styles/ResultContainer";

interface ResultProps {
  condition: boolean;
  result: string;
  word: string;
}

const Result = ({ condition, result, word }: ResultProps) => {
  return (
    <>
      {condition && (
        <ResultContainer>
          <h2>
            {result === ""
              ? ""
              : result === "loss"
              ? `You lose the word was ${word}`
              : `You won the word was ${word}`}
          </h2>
        </ResultContainer>
      )}
    </>
  );
};

export default Result;
