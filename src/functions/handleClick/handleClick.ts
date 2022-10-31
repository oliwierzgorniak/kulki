import dynamicVars from "../../vars/dynamicVars";
import selectBall from "../balls/selectBall";
import deselectBall from "../balls/deselectBall";
import handleCursorMove from "./handleCursorMove";
import removeEventListeners from "./removeEventListeners";
import moveBall from "../balls/moveBall";
import cleanAfterPathfinding from "../path/cleanAfterPathfinding";
import handleBalls from "../balls/handleBalls";
import handleSurroundingBalls from "../balls/handleSurroundingBalls";
import staticVars from "../../vars/staticVars";
import handlePathAfterMove from "../balls/handlePathAfterMove";
import doesBallHasMove from "./doesBallHasMove";
import checkForEnd from "./checkForEnd";

export default function handleClick() {
  // https://medium.com/@mindplay/clean-dom-queries-in-typescript-c10f362d14fc
  let cellElements = document.querySelectorAll<HTMLDivElement>(".cell");

  cellElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (dynamicVars.blockInteraction) return;

      let elementClicked = e.target as HTMLDivElement | null;
      const y = Number(elementClicked?.dataset.y);
      const x = Number(elementClicked?.dataset.x);

      if (!elementClicked) {
        console.error("!elementClicked is true");
        return;
      }

      if (!dynamicVars.isBallSelected) {
        // if cell doesn't have a ball
        if (!dynamicVars.boardArray[y][x]) return;

        if (!doesBallHasMove(y, x)) return;

        selectBall(elementClicked);
        dynamicVars.start = { x: x, y: y };
        handleCursorMove();
      } else {
        cleanAfterPathfinding();
        removeEventListeners();
        deselectBall();

        // clicking the same ball - deselecting
        const selectedBall = dynamicVars.start;
        if (selectedBall && selectedBall.x === x && selectedBall.y === y) {
          return;
        }

        // switching to next clicked ball
        if (dynamicVars.boardArray[y][x]) {
          selectBall(elementClicked);
          dynamicVars.start = { x: x, y: y };
          handleCursorMove();
          return;
        }

        if (!dynamicVars.isPathFound) return;
        moveBall(y, x);
        handlePathAfterMove();
        const ballColor = dynamicVars.boardArray[y][x];
        if (typeof ballColor === "string") {
          handleSurroundingBalls(y, x, ballColor);
        } else {
          // console.error("ballColor is not string"); disabled because error occured when clicking when there is no path
        }
        setTimeout(() => {
          // not adding balls when balls were removed
          if (dynamicVars.skipAddBalls) {
            dynamicVars.skipAddBalls = false;
            return;
          }
          handleBalls();
          checkForEnd();
        }, staticVars.ADD_BALLS_DELAY);
      }
    });
  });
}
