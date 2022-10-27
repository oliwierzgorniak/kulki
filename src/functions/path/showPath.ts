export default function showPath(spots: position[]) {
  spots.forEach(({ y, x }) => {
    let boardCellElement: HTMLDivElement | null = document.querySelector(
      `.cell[data-y="${y}"][data-x="${x}"]`
    );
    if (boardCellElement) {
      boardCellElement.classList.add("path-highlight");
    }
  });
}
