import getSquareArray from "./functions/getSquareArray";

const TABLE_SIZE = 4;
const NUMBER_OF_X = 3;
let tableArray: tableArrayType = getSquareArray(TABLE_SIZE, null);
let moveHistory: moveHistoryType = getSquareArray(TABLE_SIZE, undefined);
let start: startType;
let end: endType;

export { TABLE_SIZE, NUMBER_OF_X, tableArray, moveHistory, start, end };
