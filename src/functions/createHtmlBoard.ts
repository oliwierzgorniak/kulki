import Vars from "../Vars";

export default function createBoard() {
  let boardElement = document.querySelector("#board");

  Vars.boardArray.forEach((arr: cellType[], y: number) => {
    arr.forEach((el: cellType, x: number) => {
      let cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.x = String(x);
      cellElement.dataset.y = String(y);
      boardElement?.appendChild(cellElement);
    });
  });
}
