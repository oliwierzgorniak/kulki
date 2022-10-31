import dynamicVars from "../../../vars/dynamicVars";
import getBallElement from "./getBallElement";

type nextBallsElementType = HTMLDivElement | null;

export default function showNextBalls() {
  let nextBallsElement: nextBallsElementType =
    document.querySelector("#next-balls");

  if (!nextBallsElement) {
    console.error("no next balls element");
    return;
  }

  nextBallsElement.innerHTML = "";

  dynamicVars.nextBalls.forEach((ballColor) => {
    const ballElement = getBallElement(ballColor);
    nextBallsElement?.append(ballElement);
  });
}
