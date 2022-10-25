import Vars from "../../../Vars";
import getBallElement from "./getBallElement";

export default function showNextBalls() {
  let nextBallsElement: HTMLDivElement | null =
    document.querySelector("#next-balls");

  if (!nextBallsElement) {
    console.error("no next balls element");
    return;
  }

  nextBallsElement.innerHTML = "";

  Vars.nextBalls.forEach((ballColor) => {
    const ballElement = getBallElement(ballColor);
    nextBallsElement?.append(ballElement);
  });
}
