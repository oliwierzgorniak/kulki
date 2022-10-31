export default function showPath(spots: position[]) {
  spots.forEach(({ y, x }) => {
    let boardCellElement: cellElementType = document.querySelector(
      `.cell[data-y="${y}"][data-x="${x}"]`
    );
    if (boardCellElement) {
      boardCellElement.classList.add("path-highlight");
    }
  });
}
