/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = nums => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) return true;
    arr.push(nums[i]);
  }

  return false;
};
