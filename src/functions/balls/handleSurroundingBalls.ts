import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";
import getSurroundingBalls from "./handleSurroundingBalls/getSurroundingBalls";
import removeBalls from "./handleSurroundingBalls/removeBalls";

export default function handleSurroundingBalls(
  y: number,
  x: number,
  ballColor: string
) {
  const surroundingBalls = getSurroundingBalls(y, x, ballColor);

  if (surroundingBalls.length < staticVars.REMOVE_BALLS_NUMBER) return;

  dynamicVars.skipAddBalls = true;
  removeBalls(surroundingBalls);
}
