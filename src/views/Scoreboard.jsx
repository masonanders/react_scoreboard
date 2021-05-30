import React, { useEffect, useState } from "react";
import getData from "../util/getData";

var interval = null;
const intervalRefreshValue = 500;

export default function Scoreboard() {
  const [statusData, setStatusData] = useState({
    Teams: [
      {
        teamName: "Red",
        isActive: false,
        timerStartedAt: null,
        elapsedTimeInSeconds: 0
      },
      {
        teamName: "Blue",
        isActive: false,
        timerStartedAt: null,
        elapsedTimeInSeconds: 0
      }
    ],
    ElapsedGameTime: 0,
    ElapsedGameTimeFormatted: "00:00"
  });

  useEffect(() => {
    interval = setInterval(async () => {
      const data = await getData();
      setStatusData(data);
    }, intervalRefreshValue);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Game Time: {statusData.ElapsedGameTimeFormatted} <br />
          {statusData.Teams["0"].teamName}:{" "}
          {statusData.Teams["0"].elapsedTimeInSeconds} <br />
          {statusData.Teams["1"].teamName}:{" "}
          {statusData.Teams["1"].elapsedTimeInSeconds} <br />
        </p>
      </header>
    </div>
  );
}
