import { Key, StyledKeyboard } from "./styles/StyledKeyboard";

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface KeyboardProps {
  guesses: string;
  onClick: (e: any) => void;
}

const Keyboard = ({ guesses, onClick }: KeyboardProps) => {
  return (
    <StyledKeyboard>
      {abc.split("").map((letter) => (
        <Key
          bg={guesses.includes(letter.toLowerCase())}
          key={letter}
          onClick={onClick}
        >
          {letter}
        </Key>
      ))}
    </StyledKeyboard>
  );
};

export default Keyboard;
