import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Scoreboard from "./views/Scoreboard";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Scoreboard />
    </>
  );
}

export default App;
