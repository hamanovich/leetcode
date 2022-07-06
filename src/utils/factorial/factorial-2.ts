export const factorial = (n: number, result?: number): number => {
  result = result || 1;

  if (!n) return result;

  return factorial(n - 1, result * n);
};
