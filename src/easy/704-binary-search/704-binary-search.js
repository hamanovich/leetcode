/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const index = Math.floor((low + high) / 2);

    if (nums[index] === target) return index;

    target > nums[index] ? (low = low + 1) : (high = index - 1);
  }

  return -1;
};
