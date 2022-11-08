import dynamicVars from "../../vars/dynamicVars";

/**
 * A function which selects visually a ball.
 * @param ball the ball to be selected visually
 * @returns
 */
export default function selectBall(ball: HTMLDivElement) {
  dynamicVars.isBallSelected = true;

  const ballElement: ballElementType = ball?.querySelector(".ball");
  if (!ballElement) {
    console.error("No ball element");
    return;
  }

  dynamicVars.lastBallSelected = ballElement;

  ballElement.style.transform = "scale(1.2)";
}
