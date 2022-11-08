import dynamicVars from "../../../vars/dynamicVars";

type scoreElementT = HTMLSpanElement | null;

/**
 * A function which upadtes player's score.
 * @param removedBalls a number of balls which were removed
 */
export default function updateScore(removedBalls: number) {
  dynamicVars.score += removedBalls;

  let scoreElement: scoreElementT = document.querySelector("#score");
  if (scoreElement) {
    scoreElement.innerHTML = String(dynamicVars.score);
  }
}
