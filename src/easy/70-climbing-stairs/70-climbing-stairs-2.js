/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = n => {
  let a = 1;
  let b = 1;

  while (n-- > 1) [a, b] = [a + b, a];

  return a;
};
