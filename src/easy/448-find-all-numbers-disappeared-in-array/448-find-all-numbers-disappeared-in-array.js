// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers = nums => {
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) result.push(i);
  }
  return result;
};
