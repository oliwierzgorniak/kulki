import dynamicVars from "../../../vars/dynamicVars";
import deselectBall from "../../balls/deselectBall";
import cleanAfterPathfinding from "../../path/cleanAfterPathfinding";
import isTheSameBallBeingClicked from "../isTheSameBallBeingClicked";
import removeEventListeners from "../removeEventListeners";

type case4Type = (y: number, x: number) => boolean;

// 4. ball is selected, element clicked is a ball, element clicked is the selected ball
const case4: case4Type = (y, x) => {
  const isBallBeingClicked = typeof dynamicVars.boardArray[y][x] === "string";
  if (
    dynamicVars.isBallSelected &&
    isBallBeingClicked &&
    isTheSameBallBeingClicked(y, x)
  ) {
    cleanAfterPathfinding();
    removeEventListeners();
    deselectBall();

    return true;
  }

  return false;
};

export default case4;
