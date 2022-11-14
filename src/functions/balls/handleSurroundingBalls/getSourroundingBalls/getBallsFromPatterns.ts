import staticVars from "../../../../vars/staticVars";

/**
 * @returns balls which are placed in a line pattern in a form of an array of objects.
 */
export default function getBallsFromPatterns(ballPatterns: position[][]) {
  const longEnoughPatterns = ballPatterns.filter(
    (pattern) => pattern.length >= staticVars.REMOVE_BALLS_NUMBER
  );

  const balls = longEnoughPatterns.flat();
  let ballsUnique: position[] = [];
  balls.forEach((position) => {
    const wasDuplicateFound =
      ballsUnique.filter(
        (ball) => ball.y === position.y && ball.x === position.x
      ).length !== 0;

    if (!wasDuplicateFound) {
      ballsUnique.push(position);
    }
  });

  return ballsUnique;
}
