import { Key, StyledKeyboard } from "./styles/StyledKeyboard";

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface KeyboardProps {
  condition: boolean;
  guesses: string;
  onClick: (e: any) => void;
}

const Keyboard = ({ guesses, onClick, condition }: KeyboardProps) => {
  return (
    <>
      {condition && (
        <StyledKeyboard>
          {abc.split("").map((letter) => (
            <Key
              bg={guesses.includes(letter.toLowerCase())}
              key={letter.toLowerCase()}
              onClick={onClick}
            >
              {letter}
            </Key>
          ))}
        </StyledKeyboard>
      )}
    </>
  );
};

export default Keyboard;
