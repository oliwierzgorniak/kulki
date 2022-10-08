import { NUMBER_OF_X, TABLE_SIZE, tableArray } from "../vars";

export default function addXsignsToTable() {
  let numberOfXtoPlaceLeft = NUMBER_OF_X;
  while (numberOfXtoPlaceLeft > 0) {
    const { y, x } = getRandomPosition(TABLE_SIZE);

    // space occupied
    if (tableArray[y][x] !== null) continue;

    tableArray[y][x] = "x";
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
