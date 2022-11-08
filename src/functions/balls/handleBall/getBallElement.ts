/**
 * @returns ball HTML element
 */
export default function getBallElement(ballColor: string) {
  let ballElement = document.createElement("div");
  ballElement.classList.add("ball");
  ballElement.style.background = ballColor;

  return ballElement;
}
