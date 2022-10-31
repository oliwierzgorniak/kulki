interface position {
  y: number;
  x: number;
}

interface directionInterface {
  y: -1 | 0 | 1;
  x: -1 | 0 | 1;
}

type cellType = position | null | number | string;
type boardArrayType = cellType[][];

type moveType = position | undefined;
type moveHistoryType = moveType[][];

type startType = position | undefined;
type endType = position | undefined;

type indexedSpotsType = position[];

type cellElementType = HTMLDivElement | null;
type ballElementType = HTMLDivElement | null;
