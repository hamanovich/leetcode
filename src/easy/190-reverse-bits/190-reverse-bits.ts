// https://leetcode.com/problems/reverse-bits/

export const reverseBits = (n: number): number => {
  const num = n.toString(2);
  let res = '';

  for (let i = num.length - 1; i >= 0; i--) res += num[i];

  return parseInt(res.padEnd(32, '0'), 2);
};
