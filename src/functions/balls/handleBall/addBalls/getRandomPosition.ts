import getRandom from "./getRandom";

export default function getRandomPosition(board_SIZE: number): {
  x: number;
  y: number;
} {
  return { x: getRandom(board_SIZE), y: getRandom(board_SIZE) };
}
