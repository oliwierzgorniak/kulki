import dynamicVars from "../../../vars/dynamicVars";

type scoreElementT = HTMLSpanElement | null;

export default function updateScore(removedBalls: number) {
  dynamicVars.score += removedBalls;

  let scoreElement: scoreElementT = document.querySelector("#score");
  if (scoreElement) {
    scoreElement.innerHTML = String(dynamicVars.score);
  }
}
