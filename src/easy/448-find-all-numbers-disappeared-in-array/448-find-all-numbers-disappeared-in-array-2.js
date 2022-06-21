// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers = nums => {
  let count = 1;
  const result = [];

  while (count <= nums.length) {
    if (!nums.includes(count)) result.push(count);
    count++;
  }

  return result;
};
