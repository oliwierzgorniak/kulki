import dynamicVars from "../../vars/dynamicVars";

/**
 * A function which deselects the active ball.
 */
export default function deselectBall() {
  if (!dynamicVars.lastBallSelected) {
    console.error("no last ball selected");
    return;
  }
  dynamicVars.isBallSelected = false;
  dynamicVars.lastBallSelected.style.transform = "scale(1)";
}
