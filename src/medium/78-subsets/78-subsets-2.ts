// https://leetcode.com/problems/subsets/

export const subsets = (nums: number[]): number[][] => {
  const output: number[][] = [[]];

  for (const num of nums) {
    const inner = [];

    for (const entry of output) inner.push([...entry, num]);

    output.push(...inner);
  }

  return output;
};
