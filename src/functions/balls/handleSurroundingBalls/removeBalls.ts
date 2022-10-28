import dynamicVars from "../../../vars/dynamicVars";

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
}
