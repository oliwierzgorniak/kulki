import staticVars from "../../../vars/staticVars";

/**
 * @returns random colors of next balls
 */
export default function getNextBalls() {
  let nextColors = [];
  for (let i = 0; i < staticVars.NUMBER_OF_BALLS; i++) {
    const colorIndex = Math.floor(
      Math.random() * staticVars.ballsColors.length
    );
    const color = staticVars.ballsColors[colorIndex];
    nextColors.push(color);
  }
  return nextColors;
}
