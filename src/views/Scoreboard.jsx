import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressTracker from "../components/ProgressTracker";
import Timer from "../components/Timer";
import getData from "../util/getData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const intervalRefreshValue = 500;

export default function Scoreboard() {
  const [statusData, setStatusData] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getData();
      setStatusData(data);
    }, intervalRefreshValue);
    return () => clearInterval(interval);
  }, []);

  if (!statusData) return null;

  const { ElapsedGameTimeFormatted, PointsToWin, Teams } = statusData;

  return (
    <Container>
      <Timer>{ElapsedGameTimeFormatted}</Timer>
      <ProgressTracker />
    </Container>
  );
}

// {
//   ElapsedGameTime: 0,
//   ElapsedGameTimeFormatted: "00:00",
//   PointsToWin: 300,
//   Teams: [
//     {
//       teamName: "Red",
//       isActive: false,
//       timerStartedAt: null,
//       elapsedTimeInSeconds: 0
//     },
//     {
//       teamName: "Blue",
//       isActive: false,
//       timerStartedAt: null,
//       elapsedTimeInSeconds: 0
//     }
//   ]
// };
