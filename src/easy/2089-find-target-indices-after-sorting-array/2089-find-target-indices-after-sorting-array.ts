// https://leetcode.com/problems/find-target-indices-after-sorting-array/

export const targetIndices = (nums: number[], target: number): number[] => {
  const output: number[] = [];

  nums
    .sort((a, b) => a - b)
    .findIndex((n, index) => {
      if (n === target) output.push(index);
      return 0;
    });

  return output;
};
