import { OptionsContainer } from "./styles/OptionsContainer";
import spain from "../assets/images/spain.svg";
import usa from "../assets/images/usa.svg";

interface OptionsProps {
  condition: boolean;
  onLang: (lang: string) => void;
}

const Options = ({ condition, onLang }: OptionsProps) => {
  return (
    <>
      {condition && (
        <OptionsContainer>
          <h2>Choose a language</h2>
          <div>
            <img src={usa} alt="" onClick={() => onLang("english")} />
            <img src={spain} alt="" onClick={() => onLang("spanish")} />
          </div>
        </OptionsContainer>
      )}
    </>
  );
};

export default Options;
