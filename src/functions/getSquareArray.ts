export default function getSquareArray(size: number, content: any): any[][] {
  let arr = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(content);
    }
    arr.push(row);
  }

  return arr;
}
