import React from "react";
import { StyledHome } from "./styles/StyledHome";
import houseSolid from "../assets/images/houseSolid.svg";
interface HomeProps {
  onHome: () => void;
  condition: boolean;
}
const Home = ({ onHome, condition }: HomeProps) => {
  return (
    <>
      {condition && (
        <StyledHome onClick={onHome}>
          <img src={houseSolid} alt="" />
        </StyledHome>
      )}
    </>
  );
};

export default Home;
