import staticVars from "../../../../vars/staticVars";
import getRandom from "./getRandom";

/**
 * @returns random position for a ball
 */
export default function getRandomPosition(): {
  x: number;
  y: number;
} {
  return {
    x: getRandom(staticVars.BOARD_SIZE),
    y: getRandom(staticVars.BOARD_SIZE),
  };
}
