import dynamicVars from "../vars/dynamicVars";

/**
 * @example
 * ```ts
 * let boardElment = createBoard();
 * boardElement.style.transform = 'rotate(45deg)';
 * ```
 * You can initialize a var with a board HTML element like that;
 */
export default function createBoard() {
  let boardElement: boardElementType = document.querySelector("#board");

  dynamicVars.boardArray.forEach((arr: cellType[], y: number) => {
    arr.forEach((el: cellType, x: number) => {
      let cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.x = String(x);
      cellElement.dataset.y = String(y);
      boardElement?.appendChild(cellElement);
    });
  });
}
