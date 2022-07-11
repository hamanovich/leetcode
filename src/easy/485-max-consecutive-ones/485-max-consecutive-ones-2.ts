// https://leetcode.com/problems/max-consecutive-ones/

export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;
  let curr = 0;

  for (const i of nums) {
    max = Math.max(max, (curr += i));
    if (!i) curr = 0;
  }

  return max;
};
