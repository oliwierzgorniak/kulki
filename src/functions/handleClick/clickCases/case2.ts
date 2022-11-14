import dynamicVars from "../../../vars/dynamicVars";
import deselectBall from "../../balls/deselectBall";
import handlePathAfterMove from "../../balls/handlePathAfterMove";
import handleSurroundingBalls from "../../balls/handleSurroundingBalls";
import moveBall from "../../balls/moveBall";
import cleanAfterPathfinding from "../../path/cleanAfterPathfinding";
import checkForEnd from "../checkForEnd";
import isTheSameBallBeingClicked from "../isTheSameBallBeingClicked";
import removeEventListeners from "../removeEventListeners";
import handleAnimation from "./case4/handleAnimation";

type case2Type = (y: number, x: number) => boolean;

/**
 * A function with a case: 2. a ball is selected, element clicked is empty, a ball can move there
 * @param y y position of a ball
 * @param x x position of a ball
 * @returns wheter condition was fired
 */
const case2: case2Type = (y, x) => {
  const isClickedElementFree = !dynamicVars.boardArray[y][x];
  if (
    dynamicVars.isBallSelected &&
    dynamicVars.isPathFound &&
    !isTheSameBallBeingClicked(y, x) &&
    isClickedElementFree
  ) {
    cleanAfterPathfinding();
    removeEventListeners();
    deselectBall();

    moveBall(y, x);
    handlePathAfterMove();

    const ballColor = dynamicVars.boardArray[y][x];
    if (typeof ballColor === "string") {
      handleSurroundingBalls(y, x, ballColor);
    }

    const wasGameEnded = checkForEnd();
    if (wasGameEnded) return true;

    handleAnimation();
    return true;
  }

  return false;
};

export default case2;
