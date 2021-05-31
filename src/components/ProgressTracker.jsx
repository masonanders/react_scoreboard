import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const ProgressBar = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 12px;
  width: 75%;
  height: 64px;
  overflow: hidden;
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

const TeamProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  border-left: ${(props) => props.right && "1px solid black"};
  border-right: ${(props) => props.left && "1px solid black"};
  background: linear-gradient(
    ${(props) => (props.left ? "to right" : "to left")},
    ${(props) => props.color} 0 ${(props) => props.percentComplete},
    transparent ${(props) => props.percentComplete}
  );
`;

export default function ({ teams, pointsToWin }) {
  const [team1, team2] = teams;

  return (
    <Container>
      <ProgressBar>
        <TeamProgress
          left
          color="rgba(255, 50, 50, 0.85)"
          percentComplete={(team1.elapsedTimeInSeconds / 300) * 100 + "%"}
        >
          {team1.elapsedTimeInSeconds}
        </TeamProgress>
        <TeamProgress
          right
          color="rgba(50, 50, 255, 0.85)"
          percentComplete={
            (team2.elapsedTimeInSeconds / pointsToWin) * 100 + "%"
          }
        >
          {team2.elapsedTimeInSeconds}
        </TeamProgress>
      </ProgressBar>
      <ProgressInfo>
        <h4>{team1.teamName}</h4>
        <h4>{pointsToWin}</h4>
        <h4>{team2.teamName}</h4>
      </ProgressInfo>
    </Container>
  );
}
