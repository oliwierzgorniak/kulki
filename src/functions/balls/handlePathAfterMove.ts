import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";

type cellElementT = HTMLDivElement | null;

export default function handlePathAfterMove() {
  dynamicVars.blockInteraction = true;
  dynamicVars.lastPath.forEach(({ y, x }) => {
    let cellElement: cellElementT = document.querySelector(
      `.cell[data-y="${y}"][data-x="${x}"]`
    );

    cellElement?.classList.add("path-after-move");

    setTimeout(() => {
      cellElement?.classList.remove("path-after-move");
    }, staticVars.ADD_BALLS_DELAY);
  });
  setTimeout(() => {
    dynamicVars.blockInteraction = false;
  }, staticVars.ADD_BALLS_DELAY);
}
