// https://www.redblobgames.com/pathfinding/a-star/introduction.html
import createHtmlBoard from "./functions/createHtmlBoard";
import handleClick from "./functions/handleClick/handleClick";
import dynamicVars from "./vars/dynamicVars";
import getNextBalls from "./functions/balls/handleBall/getNextBalls";
import handleBalls from "./functions/balls/handleBalls";
import showNextBalls from "./functions/balls/handleBall/showNextBalls";
import handleBoardRotation from "./functions/handleBoardRotation";

createHtmlBoard();

// adding next balls to next balls div and then adding them to the board and generating new ones
dynamicVars.nextBalls = getNextBalls();
showNextBalls();
handleBalls();

handleClick();

handleBoardRotation();
