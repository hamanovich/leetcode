// https://leetcode.com/problems/maximum-average-subarray-i/

export const findMaxAverage = (nums: number[], k: number): number => {
  let result = -Infinity;
  let counter = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    counter++;

    if (counter === k) result = Math.max(result, current / k);

    if (counter > k) {
      current -= nums[i - k];
      result = Math.max(result, current / k);
    }
  }

  return result;
};
