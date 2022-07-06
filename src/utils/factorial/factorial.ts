export const factorial = (n: number): number => {
  let result = 1;

  while (n) result *= n--;

  return result;
};
