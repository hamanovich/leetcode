/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = nums => {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

export const containsDuplicate2 = nums => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) return true;
    arr.push(nums[i]);
  }

  return false;
};
