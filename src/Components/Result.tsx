import { ResultContainer } from "./styles/ResultContainer";

interface ResultProps {
  condition: boolean;
  result: string;
  lang: string;
  onNewWord: () => void;
}

const setResultStrings = (lang: string, res: string) => {
  if (lang === "english") {
    return {
      text1: res === "" ? "" : res === "loss" ? `You lose` : `You won`,
      text2: res === "won" ? "Next Word" : "Try Againg?",
    };
  }
  if (lang === "spanish") {
    return {
      text1: res === "" ? "" : res === "loss" ? `Perdiste` : `Ganaste`,
      text2: res === "won" ? "Siguiente Palabra" : "Intentarlo de nuevo",
    };
  }

  return {
    text1: "",
    text2: "",
  };
};

const Result = ({ condition, result, lang, onNewWord }: ResultProps) => {
  return (
    <>
      {condition && (
        <ResultContainer res={result}>
          <h2>{setResultStrings(lang, result).text1}</h2>
          <button onClick={onNewWord}>
            {setResultStrings(lang, result).text2}
          </button>
        </ResultContainer>
      )}
    </>
  );
};

export default Result;
