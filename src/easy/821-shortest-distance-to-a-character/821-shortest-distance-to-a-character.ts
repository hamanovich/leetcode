// https://leetcode.com/problems/shortest-distance-to-a-character/

export const shortestToChar = (s: string, c: string): number[] => {
  const output = Array(s.length).fill(Infinity);
  let left = Infinity;
  let right = Infinity;

  for (let i = 0; i < s.length; i++) {
    const j = s.length - 1 - i;

    left = s[i] === c ? 0 : left + 1;
    right = s[j] === c ? 0 : right + 1;

    output[i] = Math.min(output[i], left);
    output[j] = Math.min(output[j], right);
  }

  return output;
};
