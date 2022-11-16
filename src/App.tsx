import Game from "./Components/Game";
import GlobalStyles from "./Components/styles/Global";
import { StyledApp } from "./Components/styles/StyledApp";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Hangman</h1>
        <Game />
      </StyledApp>
    </>
  );
}

export default App;
