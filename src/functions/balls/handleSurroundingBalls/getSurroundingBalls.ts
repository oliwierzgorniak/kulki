import directions from "./getSourroundingBalls/directions";
import finderFunction from "./getSourroundingBalls/finderFunction";
import getBallsFromPatterns from "./getSourroundingBalls/getBallsFromPatterns";

/**
 * A function which is used for finding balls placed in a line pattern.
 */
export default function getSurrondingBalls(
  y: number,
  x: number,
  ballColor: string
) {
  let ballPatterns: position[][] = [];

  directions.forEach((directionPair) => {
    const movedBallPosition = { y: y, x: x };
    let ballsFromPair: position[] = [movedBallPosition];
    finderFunction(y, x, directionPair[0], ballColor, ballsFromPair);
    finderFunction(y, x, directionPair[1], ballColor, ballsFromPair);
    ballPatterns.push(ballsFromPair);
  });

  const balls = getBallsFromPatterns(ballPatterns);
  return balls;
}
