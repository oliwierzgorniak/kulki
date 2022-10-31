import dynamicVars from "../../vars/dynamicVars";

export default function isTheSameBallBeingClicked(y: number, x: number) {
  const selectedBall = dynamicVars.start;
  return selectedBall && selectedBall.x === x && selectedBall.y === y;
}
