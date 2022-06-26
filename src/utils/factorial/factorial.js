/**
 * @param {number} n
 * @return {number}
 */
export const factorial = n => {
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
};
