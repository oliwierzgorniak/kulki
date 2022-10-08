import findPath from "./path/findPath";

import { start, end, tableArray } from "../vars";
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
      if (!start && elementClicked != null) {
        tableArray[y][x] = "S";
        elementClicked.innerHTML = "S";
        // @ts-ignore
        start = { y: y, x: x };
        return;
      }

      // second point
      if (start && !end && elementClicked) {
        tableArray[y][x] = "M";
        elementClicked.innerHTML = "M";
        // @ts-ignore
        end = { y: y, x: x };

        const isPathFound = findPath(start);
        if (isPathFound) {
          const path = reconstructPath();
          showPath(path);
        }
        return;
      }
    });
  });
}
