import dynamicVars from "../../vars/dynamicVars";
import addBalls from "./handleBall/addBalls";
import getNextBalls from "./handleBall/getNextBalls";
import showNextBalls from "./handleBall/showNextBalls";

/**
 * A function which fires 3 repetetive functions used after a move.
 */
export default function handleBalls() {
  addBalls();
  dynamicVars.nextBalls = getNextBalls();
  showNextBalls();
}
