/**
 * @param {number} n
 * @param {number} result
 * @return {number}
 */
export const factorial = (n, result) => {
  result = result || 1;

  if (!n) return result;

  return factorial(n - 1, result * n);
};
