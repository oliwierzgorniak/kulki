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
import isTheSameBallBeingClicked from "./isTheSameBallBeingClicked";
import case1 from "./clickCases/case1";
import case2 from "./clickCases/case2";
import case3 from "./clickCases/case3";
import case4 from "./clickCases/case4";

export default function handleClick() {
  // https://medium.com/@mindplay/clean-dom-queries-in-typescript-c10f362d14fc
  let cellElements = document.querySelectorAll<HTMLDivElement>(".cell");

  cellElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      let elementClicked = e.target as HTMLDivElement | null;
      const y = Number(elementClicked?.dataset.y);
      const x = Number(elementClicked?.dataset.x);

      if (!elementClicked) {
        console.error("!elementClicked is true");
        return;
      }

      // block interaction terminator
      if (dynamicVars.blockInteraction) return;

      // 1. a ball is not selected, a ball is clicked and has an available move
      const wasCase1Fired = case1(y, x, elementClicked);
      if (wasCase1Fired) return;

      // 2. a ball is selected, element clicked is empty, a ball can move there
      const wasCase2Fired = case2(y, x);
      if (wasCase2Fired) return;

      // 3. a ball is selected, element clicked is another ball
      const wasCase3Fired = case3(y, x, elementClicked);
      if (wasCase3Fired) return;

      // 4. ball is selected, element clicked is a ball, element clicked is the selected ball
      const wasCase4Fired = case4(y, x);
      if (wasCase4Fired) return;
    });
  });
}
