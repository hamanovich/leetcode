// https://leetcode.com/problems/subsets/

export const subsets = (nums: number[]): number[][] => {
  const output: number[][] = [];

  const backtrack = (prev: number[], index: number): void => {
    output.push(prev);
    for (let i = index; i < nums.length; i++) backtrack([...prev, nums[i]], i + 1);
  };

  backtrack([], 0);

  return output;
};
