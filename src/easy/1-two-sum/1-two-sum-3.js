/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum > target) {
      left = 0;
      right -= 1;
    } else if (sum < target) {
      left += 1;
      right = nums.length - 1;
    } else {
      return [left, right];
    }
  }

  return [];
};
