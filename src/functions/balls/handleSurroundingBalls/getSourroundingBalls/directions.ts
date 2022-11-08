/**
 * This module has directions array
 * @module
 */
/**
 * This var has directions used for finding balls placed in a line pattern.
 */
const directions: directionInterface[][] = [
  [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ],
  [
    { x: 1, y: 1 },
    { x: -1, y: -1 },
  ],
  [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
  ],
  [
    { x: 1, y: -1 },
    { x: -1, y: 1 },
  ],
];

export default directions;
