// https://leetcode.com/problems/plus-one/

export const plusOne = (digits: number[]): number[] =>
  (BigInt(digits.join('')) + 1n)
    .toString()
    .split('')
    .map(item => Number(item));
