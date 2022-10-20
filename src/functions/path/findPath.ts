import reconstructPath from "./reconstructPath";
import showPath from "./showPath";
import Vars from "../../Vars";

let indexedSpots: indexedSpotsType = [];
let currentIndex = 1;

export default function findPath(spotChecked: position): true | undefined {
  const spotsToCheck = getSpotsToCheck(spotChecked);
  const isEndPointFound = checkIsEndPointFound(spotChecked, spotsToCheck);
  if (isEndPointFound) {
    return true;
  }

  addPositionToMoveHistory(spotChecked, spotsToCheck);

  const indexedSpotsFirstEl = indexedSpots.shift();
  if (typeof indexedSpotsFirstEl !== "undefined") {
    return findPath(indexedSpotsFirstEl);
  }
}

function getSpotsToCheck(spotChecked: position): position[] {
  const surroningSpots = [
    { y: spotChecked.y + 1, x: spotChecked.x },
    { y: spotChecked.y - 1, x: spotChecked.x },
    { y: spotChecked.y, x: spotChecked.x + 1 },
    { y: spotChecked.y, x: spotChecked.x - 1 },
  ];

  // filtering out positions outside of the board and occupied places
  const spotsToCheck = surroningSpots.filter((spot) => {
    try {
      return (
        Vars.tableArray[spot.y][spot.x] === null ||
        Vars.tableArray[spot.y][spot.x] === "M"
      );
    } catch {
      return false;
    }
  });

  return spotsToCheck;
}
function checkIsEndPointFound(spotChecked: position, spotsToCheck: position[]) {
  for (let { y, x } of spotsToCheck) {
    if (typeof Vars.end === "undefined") {
      console.error("Error while finding path. End variable is undefined.");
      continue;
    }

    if (y === Vars.end.y && x === Vars.end.x) {
      Vars.moveHistory[y][x] = spotChecked;
      return true;
    }
  }

  return false;
}

function addPositionToMoveHistory(
  spotChecked: position,
  spotsToCheck: position[]
) {
  spotsToCheck.forEach((spot) => {
    const { y, x } = spot;
    Vars.tableArray[y][x] = currentIndex;
    currentIndex++;
    indexedSpots.push(spot);

    if (typeof Vars.moveHistory[y][x] === "undefined") {
      Vars.moveHistory[y][x] = spotChecked;
    }
  });
}
