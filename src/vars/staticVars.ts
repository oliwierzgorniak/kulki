// https://refactoring.guru/design-patterns/singleton/typescript/example
interface myIStaticVars {
  BOARD_SIZE: number;
  NUMBER_OF_BALLS: number;
  REMOVE_BALLS_NUMBER: number;
  ADD_BALLS_DELAY: number; // ms
  ballsColors: string[];
}

class StaticVars implements myIStaticVars {
  private static instance: StaticVars;

  public readonly BOARD_SIZE = 9;
  public readonly NUMBER_OF_BALLS = 3;
  public readonly REMOVE_BALLS_NUMBER = 3;
  public readonly ADD_BALLS_DELAY = 500; // ms
  public readonly ballsColors = [
    "#ffba49",
    "#20a39e",
    "#ef5b5b",
    "#2e5339",
    "#7e78d2",
    "#631a86",
    "#51291e",
  ];

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
