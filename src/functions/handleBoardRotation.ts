import Board from "../Board";

export default function handleBoardRotation() {
  let rotateBoardButton = document.querySelector("#rotate-board-button");

  rotateBoardButton?.addEventListener("click", () => {
    Board.rotate();
  });
}
