import { start, end, moveHistory } from "../../vars";

export default function reconstructPath() {
  let path = [];
  let spot: position | undefined = end;

  while (true) {
    if (typeof spot === "undefined") {
      console.error("Error while reconstructingPath. Spot undefined!");
      break;
    }
    const previousMove: position | undefined = moveHistory[spot.y][spot.x];

    // checking if start was found
    if (typeof previousMove === "undefined") {
      console.error("Error while reconstructingPath. PreviousMove undefined!");
      break;
    }
    if (previousMove.x === start?.x && previousMove.y === start?.y) break;

    // if start was not found then:
    path.push(previousMove);
    spot = previousMove;
  }

  return path;
}
