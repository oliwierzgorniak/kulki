import dynamicVars from "../../vars/dynamicVars";
import selectBall from "./selectBall";
import deselectBall from "./deselectBall";
import handleCursorMove from "./handleCursorMove";
import removeEventListeners from "./removeEventListeners";

export default function handleClick() {
  let cellElements = document.querySelectorAll(".cell");

  cellElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      let elementClicked = e.target as HTMLDivElement | null;
      const y = Number(elementClicked?.dataset.y);
      const x = Number(elementClicked?.dataset.x);

      if (!dynamicVars.isBallSelected) {
        if (!elementClicked) {
          console.error("!elementClicked is true");
          return;
        }
        // if cell doesn't have a ball
        if (!dynamicVars.boardArray[y][x]) return;

        selectBall(elementClicked);
        dynamicVars.start = { x: x, y: y };
        handleCursorMove();
      } else {
        removeEventListeners();
        deselectBall();
      }
    });
  });
}
