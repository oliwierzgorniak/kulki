import Vars from "../../Vars";
import addBalls from "./functions/addBalls";
import getNextBalls from "./functions/getNextBalls";
import showNextBalls from "./functions/showNextBalls";

export default function handleBalls() {
  addBalls();
  Vars.nextBalls = getNextBalls();
  showNextBalls();
}
