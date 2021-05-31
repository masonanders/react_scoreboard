const API = "https://nerf-data-api-dfw.herokuapp.com/koth/status/";

export default async function () {
  const response = await fetch(API);
  return response.json();
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
