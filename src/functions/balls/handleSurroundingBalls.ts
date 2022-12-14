import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";
import getSurroundingBalls from "./handleSurroundingBalls/getSurroundingBalls";
import removeBalls from "./handleSurroundingBalls/removeBalls";

/**
 * A function which checks if there are enough balls palced in a line pattern and if so removes them
 * @param y y position of a moved ball
 * @param x x position of a moved ball
 * @param ballColor a color of a moved ball
 */
export default function handleSurroundingBalls(
  y: number,
  x: number,
  ballColor: string
) {
  // surrounding balls only which are in a line
  const surroundingBalls = getSurroundingBalls(y, x, ballColor);

  // possibly returns balls from more than one patter but it stills fires the if condition
  if (surroundingBalls.length < staticVars.REMOVE_BALLS_NUMBER) return;

  dynamicVars.skipAddBalls = true;
  removeBalls(surroundingBalls);
}
