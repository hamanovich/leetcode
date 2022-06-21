/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  const table = {};

  for (let i = 0; i < nums.length; i++) {
    if (table[target - nums[i]] !== undefined) return [table[target - nums[i]], i];
    table[nums[i]] = i;
  }

  return [];
};
