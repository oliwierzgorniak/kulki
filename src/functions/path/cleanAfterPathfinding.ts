import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";
import getSquareArray from "../getSquareArray";

export default function cleanAfterPathfinding() {
  dynamicVars.moveHistory = getSquareArray(staticVars.BOARD_SIZE, undefined);
  dynamicVars.boardArrayAlgorithm = JSON.parse(
    JSON.stringify(dynamicVars.boardArray)
  );
  dynamicVars.currentIndex = 1;
  dynamicVars.indexedSpots = [];

  let cells = document.querySelectorAll<HTMLDivElement>(".path-highlight");
  cells.forEach((cell) => {
    cell.classList.remove("path-highlight");
  });
}
