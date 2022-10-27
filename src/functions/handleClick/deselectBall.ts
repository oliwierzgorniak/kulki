import dynamicVars from "../../vars/dynamicVars";

export default function deselectBall() {
  if (!dynamicVars.lastBallSelected) {
    console.error("no last ball selected");
    return;
  }
  dynamicVars.lastBallSelected.style.transform = "scale(1)";
}
