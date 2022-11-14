import dynamicVars from "../../../vars/dynamicVars";
import deselectBall from "../../balls/deselectBall";
import selectBall from "../../balls/selectBall";
import cleanAfterPathfinding from "../../path/cleanAfterPathfinding";
import getDoesBallHaveMove from "../getDoesBallHaveMove";
import getgetDoesBallHaveMove from "../getDoesBallHaveMove";
import handleCursorMove from "../handleCursorMove";
import isTheSameBallBeingClicked from "../isTheSameBallBeingClicked";
import removeEventListeners from "../removeEventListeners";

type case3Type = (
  y: number,
  x: number,
  elementClicked: HTMLDivElement
) => boolean;

/**
 * A function with the case: 3. a ball is selected, element clicked is another ball which has an available move
 * @param y y position of a ball
 * @param x x position of a ball
 * @param elementClicked a ball
 * @returns wheter condition was fired
 */
const case3: case3Type = (y, x, elementClicked) => {
  const isBallBeingClicked = typeof dynamicVars.boardArray[y][x] === "string";
  if (
    dynamicVars.isBallSelected &&
    isBallBeingClicked &&
    !isTheSameBallBeingClicked(y, x) &&
    getDoesBallHaveMove(y, x)
  ) {
    cleanAfterPathfinding();
    removeEventListeners();
    deselectBall();

    const ball = elementClicked;
    selectBall(ball);

    const ballPosition = { y: y, x: x };
    dynamicVars.start = ballPosition;
    handleCursorMove();

    return true;
  }

  return false;
};

export default case3;
