// https://leetcode.com/problems/add-digits/

export const addDigits = (num: number): number => {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};
