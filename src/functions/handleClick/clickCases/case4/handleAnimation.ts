import dynamicVars from "../../../../vars/dynamicVars";
import staticVars from "../../../../vars/staticVars";
import handleBalls from "../../../balls/handleBalls";
import checkForEnd from "../../checkForEnd";

/**
 * A function which takes care of move animation.
 */
export default function handleAnimation() {
  setTimeout(() => {
    // not adding balls when balls were removed
    if (dynamicVars.skipAddBalls) {
      dynamicVars.skipAddBalls = false;
      return true;
    }

    handleBalls();
  }, staticVars.ADD_BALLS_DELAY);
}
