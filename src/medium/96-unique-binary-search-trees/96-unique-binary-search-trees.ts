// https://leetcode.com/problems/unique-binary-search-trees/

export const numTrees = (n: number): number => {
  const output = new Array(n + 1).fill(0);
  output[0] = 1;
  output[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) output[i] += output[j - 1] * output[i - j];
  }
  return output[n];
};
