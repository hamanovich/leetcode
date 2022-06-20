/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) return [i, j];
    }
  }

  return [];
};

export const twoSum2 = (nums, target) => {
  const table = {};

  for (let i = 0; i < nums.length; i++) {
    if (table[target - nums[i]] !== undefined) return [table[target - nums[i]], i];
    table[nums[i]] = i;
  }

  return [];
};

export const twoSum3 = (nums, target) => {
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
