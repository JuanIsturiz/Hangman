/* 
  todo add play again and language features
*/

import { useEffect, useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Lives from "./Lives";
import Result from "./Result";
import { getRandomWord } from "../utils/getRandomWord";
import { GameContainer } from "./styles/GameContainer";

const Game = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [word, setWord] = useState<string>("");
  const [answer, setAnswer] = useState<Array<string>>(["", "", "", "", "", ""]);
  const [lives, setLives] = useState<number>(8);
  const [guesses, setGuesses] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [livesIcons, setLivesIcons] = useState<Array<boolean>>(
    Array(8).fill(true)
  );

  useEffect(() => {
    const word = getRandomWord();
    setWord(word);
    setAnswer(Array(word.length).fill(""));
    setPlay(true);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", handleKeydown);

    return () => {
      document.removeEventListener("keypress", handleKeydown);
    };
  }, [play, guesses]);

  useEffect(() => {
    if (lives < 1) {
      setResult("loss");
      setAnswer(word.split(""));
      setTimeout(() => setPlay(false), 1000);
    }
  }, [lives]);

  useEffect(() => {
    if (lives < 1 || !play) return;
    if (word === answer.join("")) {
      setResult("won");
      setTimeout(() => setPlay(false), 1000);
    }
  }, [word, answer, play]);

  const handleKeydown = (e: KeyboardEvent): void => {
    if (!play) return;
    const letter = e.key;
    console.log(letter);
    if (guesses.includes(letter) || letter === "Enter" || !/[a-z]/.test(letter))
      return;
    setGuesses((prev) => prev + letter);
    if (!word.includes(letter)) {
      wrongGuess();
      return;
    }
    correctGuess(letter);
  };

  const wrongGuess = () => {
    console.log("wrong!!");
    setLives((prev) => prev - 1);
    setLivesIcons((prev) => {
      const lastTrue = prev.lastIndexOf(true);
      prev[lastTrue] = false;
      return prev;
    });
  };

  const correctGuess = (letter: string) => {
    console.log("correct!!");
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

  return (
    <>
      <GameContainer>
        <div>
          <Lives
            remaining={livesIcons}
            condition={!!word && play}
            lives={lives}
          />
          <Display answer={answer} condition={!!word} result={result} />
          {/* <Result condition={!!result} result={result} word={word} /> */}
        </div>
        <Keyboard guesses={guesses} onClick={handleClick} />
      </GameContainer>
    </>
  );
};

export default Game;
