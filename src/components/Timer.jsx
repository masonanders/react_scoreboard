import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 128px;
  text-align: center;
  h4 {
    font-size: 24px;
  }
`;

export default function ({ children }) {
  return (
    <Container>
      {children}
      <h4>Elapsed time</h4>
    </Container>
  );
}
