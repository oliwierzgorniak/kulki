import findPath from "./path/findPath";

import Vars from "../Vars";
import reconstructPath from "./path/reconstructPath";
import showPath from "./path/showPath";

export default function handleClick() {
  let tdElements = document.querySelectorAll("td");

  tdElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      let elementClicked = e.target as HTMLTableCellElement | null;
      const y = Number(elementClicked?.dataset.y);
      const x = Number(elementClicked?.dataset.x);

      // if cell has a letter
      if (elementClicked?.innerText !== "") return;

      // first point
      if (!Vars.start && elementClicked != null) {
        Vars.tableArray[y][x] = "S";
        elementClicked.innerHTML = "S";
        Vars.start = { y: y, x: x };
        return;
      }

      // second point
      if (Vars.start && !Vars.end && elementClicked) {
        Vars.tableArray[y][x] = "M";
        elementClicked.innerHTML = "M";
        Vars.end = { y: y, x: x };

        const isPathFound = findPath(Vars.start);
        if (isPathFound) {
          const path = reconstructPath();
          showPath(path);
        }
        return;
      }
    });
  });
}
