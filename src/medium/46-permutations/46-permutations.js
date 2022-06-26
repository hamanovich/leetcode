/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = (nums, n = 0) => {
  if (n >= nums.length) return [[]];

  const result = [];
  const prevs = permute(nums, n + 1);

  for (let prev of prevs) {
    for (let i = 0; i <= prev.length; i++) {
      let p = prev.slice(0);
      p.splice(i, 0, nums[n]);
      result.push(p);
    }
  }

  return result;
};
