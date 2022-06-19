/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const index = Math.round((low + high) / 2);
    const value = nums[index];

    if (value === target) return index;

    target > value ? (low = low + 1) : (high = index - 1);
  }

  return low;
};

// [1,3,5,6] target 2 -> 1
// 0: low=0, high=3
// 1: index=1, value=3, if no, else if no, else => high = 3-1 = 2
// 2: index=1, value=3, if no, else if no, else => high = 2-1 = 1
// 3: index=0, value=1, if no, else if yes => low = 0+1 = 1
// 4: index=1, value=3, if no, else if no, else => high = 1-1 = 0
// 5: while false, return low = 1;
