import Vars from "../Vars";

export default function addXsignsToTable() {
  let numberOfXtoPlaceLeft = Vars.NUMBER_OF_X;
  while (numberOfXtoPlaceLeft > 0) {
    const { y, x } = getRandomPosition(Vars.TABLE_SIZE);

    // space occupied
    if (Vars.tableArray[y][x] !== null) continue;

    Vars.tableArray[y][x] = "x";
    let tdElement: HTMLTableCellElement | null = document.querySelector(
      `td[data-y="${y}"][data-x="${x}"]`
    );
    if (tdElement) {
      tdElement.innerHTML = "x";
    }

    numberOfXtoPlaceLeft--;
  }
}

function getRandomPosition(TABLE_SIZE: number): { x: number; y: number } {
  return { x: getRandom(TABLE_SIZE), y: getRandom(TABLE_SIZE) };
}

function getRandom(limit: number): number {
  return Math.floor(Math.random() * limit);
}
