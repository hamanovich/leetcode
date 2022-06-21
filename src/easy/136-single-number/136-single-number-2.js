// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice
// except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => {
  let result = 0;

  for (let num of nums) result ^= num;

  return result;
};
