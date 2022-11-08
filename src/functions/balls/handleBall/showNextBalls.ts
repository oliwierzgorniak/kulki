import dynamicVars from "../../../vars/dynamicVars";
import getBallElement from "./getBallElement";

type nextBallsElementType = HTMLDivElement | null;

/**
 * A function which adds balls elements to next-balls HTML element
 */
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
