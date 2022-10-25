// https://refactoring.guru/design-patterns/singleton/typescript/example
import getSquareArray from "./functions/getSquareArray";

class Vars {
  private static instance: Vars;

  public board_SIZE = 9;
  // public NUMBER_OF_BALLS = 12;
  public ballsColors = [
    "#303549",
    "#140189",
    "#812331",
    "#970321",
    "#727121",
    "#297429",
  ];
  public boardArray: boardArrayType = getSquareArray(this.board_SIZE, null);
  public moveHistory: moveHistoryType = getSquareArray(
    this.board_SIZE,
    undefined
  );
  public start: startType;
  public end: endType;
  public nextBalls: string[] = ["#303549", "#140189", "#812331"];

  private constructor() {}

  public static getInstance(): Vars {
    if (!Vars.instance) {
      Vars.instance = new Vars();
    }

    return Vars.instance;
  }
}

const vars = Vars.getInstance();

export default vars;
