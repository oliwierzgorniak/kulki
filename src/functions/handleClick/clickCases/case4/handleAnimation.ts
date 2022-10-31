import dynamicVars from "../../../../vars/dynamicVars";
import staticVars from "../../../../vars/staticVars";
import handleBalls from "../../../balls/handleBalls";
import checkForEnd from "../../checkForEnd";

export default function handleAnimation() {
  setTimeout(() => {
    // not adding balls when balls were removed
    if (dynamicVars.skipAddBalls) {
      dynamicVars.skipAddBalls = false;
      return true;
    }

    handleBalls();
    checkForEnd();
  }, staticVars.ADD_BALLS_DELAY);
}
