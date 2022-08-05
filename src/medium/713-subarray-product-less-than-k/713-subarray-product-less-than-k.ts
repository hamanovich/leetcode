// https://leetcode.com/problems/subarray-product-less-than-k/

export const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  let l = 0;
  let r = 0;
  let count = 0;
  let product = 1;

  while (r < nums.length) {
    product *= nums[r];

    while (l < r && product >= k) {
      product /= nums[l];
      l++;
    }

    if (product < k) count += r - l + 1;
    r++;
  }

  return count;
};
