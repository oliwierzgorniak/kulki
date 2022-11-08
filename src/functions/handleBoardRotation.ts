import Board from "../Board";

/**
 * @hidden
 */
export default function handleBoardRotation() {
  let rotateBoardButton = document.querySelector("#rotate-board-button");

  rotateBoardButton?.addEventListener("click", () => {
    Board.rotate();
  });
}
