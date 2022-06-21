// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice
// except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => nums.reduce((acc, el) => (acc ^= el));
