// https://leetcode.com/problems/max-consecutive-ones/

export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let count = 0;
  const output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;

    if (i === nums.length - 1) output.push(count);

    if (nums[i] === 0) {
      output.push(count);
      count = 0;
    }
  }

  return Math.max(...output);
};
