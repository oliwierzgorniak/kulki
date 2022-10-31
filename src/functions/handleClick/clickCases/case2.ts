import dynamicVars from "../../../vars/dynamicVars";
import deselectBall from "../../balls/deselectBall";
import handlePathAfterMove from "../../balls/handlePathAfterMove";
import handleSurroundingBalls from "../../balls/handleSurroundingBalls";
import moveBall from "../../balls/moveBall";
import cleanAfterPathfinding from "../../path/cleanAfterPathfinding";
import isTheSameBallBeingClicked from "../isTheSameBallBeingClicked";
import removeEventListeners from "../removeEventListeners";
import handleAnimation from "./case4/handleAnimation";

type case2Type = (y: number, x: number) => boolean;

// 2. a ball is selected, element clicked is empty, a ball can move there
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

    handleAnimation();
    return true;
  }

  return false;
};

export default case2;