import dynamicVars from "../../vars/dynamicVars";
import addBalls from "./handleBall/addBalls";
import getNextBalls from "./handleBall/getNextBalls";
import showNextBalls from "./handleBall/showNextBalls";

export default function handleBalls() {
  addBalls();
  dynamicVars.nextBalls = getNextBalls();
  showNextBalls();
}
