const API = "https://nerf-data-api-dfw.herokuapp.com/koth/status/";

// export default async function () {
//   const response = await fetch(API);
//   return response.json();
// }

let TIMER_START = null;
let activeTeam = null;

let mockData = {
  ElapsedGameTime: TIMER_START,
  ElapsedGameTimeFormatted: "00:00",
  PointsToWin: 300,
  Teams: [
    {
      teamName: "Red",
      isActive: activeTeam === 0,
      timerStartedAt: null,
      elapsedTimeInSeconds: 0
    },
    {
      teamName: "Blue",
      isActive: activeTeam === 1,
      timerStartedAt: null,
      elapsedTimeInSeconds: 0
    }
  ]
};

export default async function () {
  await startSim();
  return Promise.resolve(mockData);
}

function startSim() {
  if (TIMER_START !== null) return;
  TIMER_START = new Date();
  update();
  setInterval(update, 1000);
}

function update() {
  const msSinceStart = Date.now() - TIMER_START;
  const { minutes, seconds } = getTimeFromMS(msSinceStart);

  activeTeam = getActiveTeam();

  mockData = {
    ...mockData,
    ElapsedGameTime: msSinceStart,
    ElapsedGameTimeFormatted: minutes + ":" + seconds,
    Teams: mockData.Teams.map((team, idx) => {
      const isActive = activeTeam === idx;

      return {
        ...team,
        isActive,
        elapsedTimeInSeconds: isActive
          ? team.elapsedTimeInSeconds + 1
          : team.elapsedTimeInSeconds
      };
    })
  };
}

function getActiveTeam() {
  const num = Math.floor(Math.random() * 5);
  if (num < mockData.Teams.length) return num;
  return activeTeam;
}

function getTimeFromMS(ms) {
  const secondsInMS = ms % (1000 * 60);
  const minutesInMS = ms - secondsInMS;
  return {
    minutes: getAsDoubleDigit(minutesInMS / (1000 * 60)),
    seconds: getAsDoubleDigit(secondsInMS / 1000)
  };
}

function getAsDoubleDigit(num) {
  return (num / 100).toFixed(2).split(".")[1];
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
