// https://www.redblobgames.com/pathfinding/a-star/introduction.html
import createHtmlBoard from "./functions/createHtmlBoard";
import handleClick from "./functions/handleClick";
import Vars from "./Vars";
import getNextBalls from "./functions/balls/functions/getNextBalls";
import handleBalls from "./functions/balls/handleBalls";
import showNextBalls from "./functions/balls/functions/showNextBalls";

createHtmlBoard();

Vars.nextBalls = getNextBalls();
showNextBalls();
handleBalls();

handleClick();
