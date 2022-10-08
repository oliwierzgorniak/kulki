export default function showPath(spots: position[]) {
  spots.forEach(({ y, x }) => {
    let tableCellElement: HTMLTableCellElement | null = document.querySelector(
      `td[data-y="${y}"][data-x="${x}"]`
    );
    if (tableCellElement) {
      tableCellElement.style.background = "red";
    }
  });
}
