import dynamicVars from "../../vars/dynamicVars";

export default function reconstructPath() {
  const start = Object.assign({}, dynamicVars.start);
  // console.log("start", start);
  let path = [];
  if (typeof dynamicVars.end === "undefined") {
    console.log("Vars.end is undefined");
    return [];
  }
  path.push(dynamicVars.end);
  let spot: position | undefined = dynamicVars.end;

  let i = 100;
  while (i > 0) {
    i--;
    if (typeof spot === "undefined") {
      console.error("Error while reconstructingPath. Spot undefined!");
      break;
    }
    const previousMove: position | undefined =
      dynamicVars.moveHistory[spot.y][spot.x];
    // console.log(previousMove);

    // checking if start was found
    if (typeof previousMove === "undefined") {
      console.error("Error while reconstructingPath. PreviousMove undefined!");
      break;
    }

    if (previousMove.x === start?.x && previousMove.y === start?.y) {
      break;
    }

    // if start was not found then:
    path.push(previousMove);
    spot = previousMove;
  }

  return path;
}
