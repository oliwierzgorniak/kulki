type position = { y: number; x: number };

type cellType = position | null | number | string;
type tableArrayType = cellType[][];

type moveType = { y: number; x: number } | undefined;
type moveHistoryType = moveType[][];

type startType = position | undefined;
type endType = position | undefined;

type indexedSpotsType = position[];
