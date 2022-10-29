import dynamicVars from "../../../vars/dynamicVars";
import updateScore from "./updateScore";

export default function removeBalls(balls: position[]) {
  balls.forEach((pos) => {
    dynamicVars.boardArray[pos.y][pos.x] = null;

    let ball = document.querySelector(
      `.cell[data-y="${pos.y}"][data-x="${pos.x}"] .ball`
    );
    if (!ball) {
      console.error("!ball is true");
      return;
    }
    ball.remove();
  });

  updateScore(balls.length);
  dynamicVars.ballsOnBoard -= balls.length;
}
