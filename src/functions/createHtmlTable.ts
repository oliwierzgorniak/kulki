import { tableArray } from "../vars";

export default function createTable() {
  let tableElement = document.querySelector("table");

  tableArray.forEach((arr: cellType[], y: number) => {
    let trElement = document.createElement("tr");
    arr.forEach((el: cellType, x: number) => {
      let tdElement = document.createElement("td");
      tdElement.dataset.x = String(x);
      tdElement.dataset.y = String(y);
      trElement.appendChild(tdElement);
    });
    tableElement?.appendChild(trElement);
  });
}
