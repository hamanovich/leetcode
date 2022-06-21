/**
 * @param {number[]} nums
 * @return {number}
 */
export const pivotIndex = nums => {
  let sum = 0;
  let total = nums.reduce((a, b) => a + b);

  for (let i = 0; i < nums.length; i++) {
    total -= nums[i];

    if (sum === total) return i;

    sum += nums[i];
  }

  return -1;
};
