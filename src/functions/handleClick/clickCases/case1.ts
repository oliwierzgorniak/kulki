import dynamicVars from "../../../vars/dynamicVars";
import selectBall from "../../balls/selectBall";
import handleCursorMove from "../handleCursorMove";

type case1Type = (
  y: number,
  x: number,
  elementClicked: HTMLDivElement
) => boolean;

// 1. a ball is not selected, a ball is clicked and has an available move
const case1: case1Type = (y, x, elementClicked) => {
  if (!dynamicVars.isBallSelected && dynamicVars.boardArray[y][x]) {
    const ball = elementClicked;
    selectBall(ball);

    const ballPosition = { y: y, x: x };
    dynamicVars.start = ballPosition;

    handleCursorMove();

    return true;
  }

  return false;
};

export default case1;
