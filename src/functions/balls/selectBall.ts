import dynamicVars from "../../vars/dynamicVars";

export default function selectBall(elementClicked: HTMLDivElement) {
  dynamicVars.isBallSelected = true;

  const ballElement: HTMLDivElement | null =
    elementClicked?.querySelector(".ball");
  if (!ballElement) {
    console.error("No ball element");
    return;
  }

  dynamicVars.lastBallSelected = ballElement;

  ballElement.style.transform = "scale(1.2)";
}
