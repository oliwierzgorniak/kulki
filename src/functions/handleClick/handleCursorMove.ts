import dynamicVars from "../../vars/dynamicVars";
import findPath from "../path/findPath";
import reconstructPath from "../path/reconstructPath";
import showPath from "../path/showPath";
import cleanAfterPathfinding from "../path/cleanAfterPathfinding";

export function handleMouseEnter(e: Event) {
  cleanAfterPathfinding();

  const cell = e.target as HTMLDivElement;
  const x = Number(cell?.dataset.x);
  const y = Number(cell?.dataset.y);

  if (typeof x === "undefined" || typeof y === "undefined") {
    console.error("x or y of cell undefined");
    return;
  }

  // cell with a ball
  if (dynamicVars.boardArray[y][x]) {
    return;
  }

  dynamicVars.boardArrayAlgorithm[y][x] = "M";
  dynamicVars.end = { y: y, x: x };

  if (typeof dynamicVars.start === "undefined") {
    console.error("dynamicVars.start is undefined");
    return;
  }

  const isPathFound = findPath(dynamicVars.start);
  dynamicVars.isPathFound = !!isPathFound;

  if (isPathFound) {
    const path = reconstructPath();
    dynamicVars.lastPath = path;
    showPath(path);
  }
  return;
}

export default function handleCursorMove() {
  let cells = document.querySelectorAll<HTMLDivElement>(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", handleMouseEnter);
  });
}
