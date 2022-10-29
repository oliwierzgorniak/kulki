import dynamicVars from "../../vars/dynamicVars";

export default function findPath(spotChecked: position): true | undefined {
  const spots = getSpots(spotChecked);
  const isEndPointFound = checkIsEndPointFound(spotChecked, spots);
  if (isEndPointFound) {
    return true;
  }

  addPositionToMoveHistory(spotChecked, spots);

  const indexedSpotsFirstEl = dynamicVars.indexedSpots.shift();
  if (typeof indexedSpotsFirstEl === "undefined") {
    // console.error("indexedSpotsFirstEl is undefined"); // disabled because when it appeared when there was no path for selected ball to the cursor position
    return;
  }

  return findPath(indexedSpotsFirstEl);
}

function getSpots(spotChecked: position): position[] {
  const surroningSpots = [
    { y: spotChecked.y + 1, x: spotChecked.x },
    { y: spotChecked.y - 1, x: spotChecked.x },
    { y: spotChecked.y, x: spotChecked.x + 1 },
    { y: spotChecked.y, x: spotChecked.x - 1 },
  ];

  // filtering out positions outside of the board and occupied places
  const spots = surroningSpots.filter((spot) => {
    try {
      return (
        dynamicVars.boardArrayAlgorithm[spot.y][spot.x] === null ||
        dynamicVars.boardArrayAlgorithm[spot.y][spot.x] === "M"
      );
    } catch {
      return false;
    }
  });

  return spots;
}
function checkIsEndPointFound(spotChecked: position, spots: position[]) {
  for (let { y, x } of spots) {
    if (typeof dynamicVars.end === "undefined") {
      console.error("Error while finding path. End variable is undefined.");
      continue;
    }

    if (y === dynamicVars.end.y && x === dynamicVars.end.x) {
      dynamicVars.moveHistory[y][x] = spotChecked;
      return true;
    }
  }

  return false;
}

function addPositionToMoveHistory(spotChecked: position, spots: position[]) {
  spots.forEach((spot) => {
    const { y, x } = spot;
    dynamicVars.boardArrayAlgorithm[y][x] = dynamicVars.currentIndex;
    dynamicVars.currentIndex++;
    dynamicVars.indexedSpots.push(spot);

    if (typeof dynamicVars.moveHistory[y][x] === "undefined") {
      dynamicVars.moveHistory[y][x] = spotChecked;
    }
  });
}
