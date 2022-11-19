import { useEffect, useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Lives from "./Lives";
import Result from "./Result";
import { getRandomWord } from "../utils/getRandomWord";
import { GameContainer } from "./styles/GameContainer";
import Options from "./Options";
import Home from "./Home";
import { useKey } from "../utils/useKey";

const Game = () => {
  const [language, setLanguage] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false);
  const [word, setWord] = useState<string>("");
  const [answer, setAnswer] = useState<Array<string>>(Array(6).fill(""));
  const [lives, setLives] = useState<number>(8);
  const [guesses, setGuesses] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [livesIcons, setLivesIcons] = useState<Array<boolean>>(
    Array(8).fill(true)
  );

  useKey(handleKeydown, guesses);

  useEffect(() => {
    if (!language) {
      setWord("");
      setAnswer(Array(6).fill(""));
      setLives(8);
      setGuesses("");
      setResult("");
      setLivesIcons(Array(8).fill(true));
      setPlay(false);
      return;
    }
    const word = getRandomWord(language);
    setWord(word);
    setAnswer(Array(word.length).fill(""));
    setPlay(true);
  }, [language]);

  useEffect(() => {
    if (lives < 1) {
      setResult("loss");
      setAnswer(word.split(""));
      setTimeout(() => setPlay(false), 1000);
    }
  }, [word, lives]);

  useEffect(() => {
    if (lives < 1 || !play) return;
    if (word === answer.join("")) {
      setResult("won");
      setTimeout(() => setPlay(false), 1000);
    }
  }, [lives, word, answer, play]);

  function handleKeydown(e: KeyboardEvent): void {
    if (!play) return;
    const letter = e.key.toLowerCase();
    console.log(letter);
    if (
      !language ||
      guesses.includes(letter) ||
      letter === "Enter" ||
      !/[a-z]/.test(letter)
    )
      return;
    setGuesses((prev) => prev + letter);
    if (!word.includes(letter)) {
      wrongGuess();
      return;
    }
    correctGuess(letter);
  }

  const wrongGuess = () => {
    setLives((prev) => prev - 1);
    setLivesIcons((prev) => {
      const lastTrue = prev.lastIndexOf(true);
      prev[lastTrue] = false;
      return prev;
    });
  };

  const correctGuess = (letter: string) => {
    const wordArr = word.split("");
    wordArr.forEach((lttr, idx) => {
      if (lttr === letter) {
        setAnswer((prev) => {
          prev[idx] = letter;
          return [...prev];
        });
      }
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!play) return;
    const target = e.target as HTMLElement;
    const letter = target.innerText.toLowerCase();
    if (guesses.includes(letter) || letter === "Enter" || !/[a-z]/.test(letter))
      return;
    console.log(letter);
    setGuesses((prev) => prev + letter);
    if (!word.includes(letter)) {
      wrongGuess();
      return;
    }
    correctGuess(letter);
  };

  const handleNewWord = () => {
    const newWord = getRandomWord(language);
    setWord(newWord);
    setAnswer(Array(newWord.length).fill(""));
    setLives(8);
    setGuesses("");
    setLivesIcons(Array(8).fill(true));
    setResult("");
    setPlay(true);
  };

  return (
    <>
      <GameContainer lang={language}>
        <Options
          condition={language === ""}
          onLang={(lang) => setLanguage(lang)}
        />

        <div>
          <Lives
            remaining={livesIcons}
            condition={!!word && play}
            lives={lives}
          />
          <Display answer={answer} condition={!!word} result={result} />
          <Result
            condition={!!language}
            result={result}
            lang={language}
            onNewWord={handleNewWord}
          />
        </div>
        <Keyboard
          guesses={guesses}
          onClick={handleClick}
          condition={!!language}
        />
      </GameContainer>
      <Home onHome={() => setLanguage("")} condition={!!language} />
    </>
  );
};

export default Game;
