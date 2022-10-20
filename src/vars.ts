// https://refactoring.guru/design-patterns/singleton/typescript/example
import getSquareArray from "./functions/getSquareArray";

class Vars {
  private static instance: Vars;

  public TABLE_SIZE = 4;
  public NUMBER_OF_X = 3;
  public tableArray: tableArrayType = getSquareArray(this.TABLE_SIZE, null);
  public moveHistory: moveHistoryType = getSquareArray(
    this.TABLE_SIZE,
    undefined
  );
  public start: startType;
  public end: endType;

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
