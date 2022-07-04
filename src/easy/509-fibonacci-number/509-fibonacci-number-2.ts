export const fib = (n: number): number => {
  const memo: Record<number, number> = {};
  const calc = (x: number): number => {
    if (memo[x]) return memo[x];
    if (x == 1 || x == 0) return x;
    return (memo[x] = calc(x - 1) + calc(x - 2));
  };

  return calc(n);
};
