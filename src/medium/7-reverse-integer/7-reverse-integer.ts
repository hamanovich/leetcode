// https://leetcode.com/problems/reverse-integer/

export const reverse = (x: number): number => {
  const str = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return str < Math.pow(2, 31) && str > -Math.pow(2, 31) ? str : 0;
};
