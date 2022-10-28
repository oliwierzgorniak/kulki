import dynamicVars from "../../vars/dynamicVars";
import selectBall from "../balls/selectBall";
import deselectBall from "../balls/deselectBall";
import handleCursorMove from "./handleCursorMove";
import removeEventListeners from "./removeEventListeners";
import moveBall from "../balls/moveBall";
import cleanAfterPathfinding from "../path/cleanAfterPathfinding";
import handleBalls from "../balls/handleBalls";
import handleSurroundingBalls from "../balls/handleSurroundingBalls";

export default function handleClick() {
  let cellElements = document.querySelectorAll(".cell");

  cellElements.forEach((el) => {
    el.addEventListener("click", (e) => {
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

        selectBall(elementClicked);
        dynamicVars.start = { x: x, y: y };
        handleCursorMove();
      } else {
        cleanAfterPathfinding();
        removeEventListeners();
        deselectBall();

        // switching to next clicked ball
        if (dynamicVars.boardArray[y][x]) {
          selectBall(elementClicked);
          dynamicVars.start = { x: x, y: y };
          handleCursorMove();
          return;
        }
        moveBall(y, x);
        const ballColor = dynamicVars.boardArray[y][x];
        if (typeof ballColor === "string") {
          handleSurroundingBalls(y, x, ballColor);
        } else {
          // console.error("ballColor is not string"); disabled because error occured when clicking when there is no path
        }
        handleBalls();
      }
    });
  });
}
