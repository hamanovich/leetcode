export const climbStairs = (n: number): number => {
  let a = 1;
  let b = 1;

  while (n-- > 1) [a, b] = [a + b, a];

  return a;
};
