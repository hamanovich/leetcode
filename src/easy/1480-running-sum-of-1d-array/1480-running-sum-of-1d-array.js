/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const runningSum = nums => {
  const result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i] + result[i - 1]);
  }

  return result;
};
