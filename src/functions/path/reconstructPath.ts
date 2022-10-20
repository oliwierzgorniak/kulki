import Vars from "../../Vars";

export default function reconstructPath() {
  let path = [];
  let spot: position | undefined = Vars.end;

  while (true) {
    if (typeof spot === "undefined") {
      console.error("Error while reconstructingPath. Spot undefined!");
      break;
    }
    const previousMove: position | undefined = Vars.moveHistory[spot.y][spot.x];

    // checking if start was found
    if (typeof previousMove === "undefined") {
      console.error("Error while reconstructingPath. PreviousMove undefined!");
      break;
    }
    if (previousMove.x === Vars.start?.x && previousMove.y === Vars.start?.y)
      break;

    // if start was not found then:
    path.push(previousMove);
    spot = previousMove;
  }

  return path;
}
