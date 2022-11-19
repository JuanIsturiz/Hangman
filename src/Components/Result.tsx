import { useState, useEffect } from "react";
import { ResultContainer } from "./styles/ResultContainer";

interface ResultProps {
  condition: boolean;
  result: string;
  lang: string;
  onNewWord: () => void;
  play: boolean;
}

const Result = ({ condition, result, lang, onNewWord, play }: ResultProps) => {
  const [resHeader, setResHeader] = useState("");
  const [resButton, setResButton] = useState("");

  useEffect(() => {
    if (result === "" && !play) {
      setTimeout(() => {
        setResHeader("");
        setResButton("");
      }, 2000);
    }

    if (lang === "english" && play) {
      setResHeader(result === "loss" ? `You lose` : `You won`);
      setResButton(result === "won" ? "Next Word" : "Try Againg?");
      return;
    }
    if (lang === "spanish" && play) {
      setResHeader(result === "loss" ? `Perdiste` : `Ganaste`);
      setResButton(
        result === "won" ? "Siguiente Palabra" : "Intentarlo de nuevo"
      );
      return;
    }
  }, [lang, result, play]);

  return (
    <>
      {condition && (
        <ResultContainer res={result}>
          <h2>{resHeader}</h2>
          <button onClick={onNewWord}>{resButton}</button>
        </ResultContainer>
      )}
    </>
  );
};

export default Result;
