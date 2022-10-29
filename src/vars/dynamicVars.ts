// https://refactoring.guru/design-patterns/singleton/typescript/example
import getSquareArray from "../functions/getSquareArray";
import staticVars from "./staticVars";

class DynamicVars {
  private static instance: DynamicVars;

  public nextBalls: string[] = ["#303549", "#140189", "#812331"];

  public boardArrayAlgorithm: boardArrayType = getSquareArray(
    staticVars.BOARD_SIZE,
    null
  );
  public boardArray: boardArrayType = getSquareArray(
    staticVars.BOARD_SIZE,
    null
  );
  public moveHistory: moveHistoryType = getSquareArray(
    staticVars.BOARD_SIZE,
    undefined
  );
  public start: startType;
  public end: endType;

  public isBallSelected = false;
  public lastBallSelected: undefined | HTMLDivElement;

  // path finding algorithm
  public indexedSpots: indexedSpotsType = [];
  public currentIndex = 1;
  public isPathFound = false;

  public lastPath: position[] = [];
  public blockInteraction = false;

  private constructor() {}

  public static getInstance(): DynamicVars {
    if (!DynamicVars.instance) {
      DynamicVars.instance = new DynamicVars();
    }

    return DynamicVars.instance;
  }
}

const dynamicVars = DynamicVars.getInstance();

export default dynamicVars;
