const API = "https://nerf-data-api-dfw.herokuapp.com/koth/status/";

export default async function () {
  const response = await fetch(API);
  return response.json();
}
