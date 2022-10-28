// https://refactoring.guru/design-patterns/singleton/typescript/example
import getSquareArray from "../functions/getSquareArray";

class StaticVars {
  private static instance: StaticVars;

  public BOARD_SIZE = 9;
  public NUMBER_OF_BALLS = 3;
  public REMOVE_BALLS_NUMBER = 4;
  public ballsColors = ["#303549", "#140189", "#bb0321", "#727121", "#297429"];

  public nextBalls: string[] = ["#303549", "#140189", "#812331"];
  public boardArrayAlgorithm: boardArrayType = getSquareArray(
    this.BOARD_SIZE,
    null
  );
  public boardArray: boardArrayType = getSquareArray(this.BOARD_SIZE, null);
  public moveHistory: moveHistoryType = getSquareArray(
    this.BOARD_SIZE,
    undefined
  );
  public start: startType;
  public end: endType;

  public isBallSelected = false;
  public lastBallSelected: undefined | HTMLDivElement;

  public indexedSpots: indexedSpotsType = [];
  currentIndex = 1;

  private constructor() {}

  public static getInstance(): StaticVars {
    if (!StaticVars.instance) {
      StaticVars.instance = new StaticVars();
    }

    return StaticVars.instance;
  }
}

const staticVars = StaticVars.getInstance();

export default staticVars;
