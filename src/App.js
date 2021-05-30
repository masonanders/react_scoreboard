import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Scoreboard from "./views/Scoreboard";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * { 
    font-family: 'Orbitron', sans-serif !important;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Scoreboard />
    </React.Fragment>
  );
}

export default App;
