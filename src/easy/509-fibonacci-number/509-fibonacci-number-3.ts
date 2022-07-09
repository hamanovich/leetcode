export const fib = (n: number): number => {
  const results = [0, 1];

  for (let i = 2; i <= n; i++) results.push(results[i - 1] + results[i - 2]);

  return results[n];
};
