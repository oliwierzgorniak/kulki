import { handleMouseEnter } from "./handleCursorMove";

export default function removeEventListeners() {
  let cells = document.querySelectorAll<HTMLDivElement>(".cell");
  cells.forEach((cell) => {
    cell.removeEventListener("mouseenter", handleMouseEnter);
  });
}
