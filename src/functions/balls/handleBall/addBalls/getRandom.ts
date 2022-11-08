/**
 * @returns a random number
 * @param limit - limit of a random number
 */
export default function getRandom(limit: number): number {
  return Math.floor(Math.random() * limit);
}
