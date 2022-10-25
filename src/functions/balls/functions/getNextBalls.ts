import Vars from "../../../Vars";

export default function getNextBalls() {
  let nextColors = [];
  for (let i = 0; i < 3; i++) {
    const colorIndex = Math.floor(Math.random() * Vars.ballsColors.length);
    const color = Vars.ballsColors[colorIndex];
    nextColors.push(color);
  }
  return nextColors;
}
