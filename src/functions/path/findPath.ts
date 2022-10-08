import reconstructPath from "./reconstructPath";
import showPath from "./showPath";
import { tableArray, moveHistory, end } from "../../vars";

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
        tableArray[spot.y][spot.x] === null ||
        tableArray[spot.y][spot.x] === "M"
      );
    } catch {
      return false;
    }
  });

  return spotsToCheck;
}
function checkIsEndPointFound(spotChecked: position, spotsToCheck: position[]) {
  for (let { y, x } of spotsToCheck) {
    if (typeof end === "undefined") {
      console.error("Error while finding path. End variable is undefined.");
      continue;
    }

    if (y === end.y && x === end.x) {
      moveHistory[y][x] = spotChecked;
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
    tableArray[y][x] = currentIndex;
    currentIndex++;
    indexedSpots.push(spot);

    if (typeof moveHistory[y][x] === "undefined") {
      moveHistory[y][x] = spotChecked;
    }
  });
}
