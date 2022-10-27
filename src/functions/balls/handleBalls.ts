import dynamicVars from "../../vars/dynamicVars";
import addBalls from "./functions/addBalls";
import getNextBalls from "./functions/getNextBalls";
import showNextBalls from "./functions/showNextBalls";

export default function handleBalls() {
  addBalls();
  dynamicVars.nextBalls = getNextBalls();
  showNextBalls();
}
