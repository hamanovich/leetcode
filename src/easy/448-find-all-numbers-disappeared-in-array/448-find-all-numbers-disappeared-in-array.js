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

// Much faster for big-data!

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers2 = nums => {
  const result = [];
  const set = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers3 = nums => {
  let count = 1;
  const result = [];

  while (count <= nums.length) {
    if (!nums.includes(count)) result.push(count);
    count++;
  }

  return result;
};
