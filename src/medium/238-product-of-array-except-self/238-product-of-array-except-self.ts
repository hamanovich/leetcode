// https://leetcode.com/problems/product-of-array-except-self/

export const productExceptSelf = (nums: number[]): number[] => {
  const left: number[] = [];
  let productLeft = 1;

  for (let i = 0; i < nums.length; i++) {
    left[i] = productLeft;
    productLeft *= nums[i];
  }

  const right: number[] = [];
  let productRight = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = productRight;
    productRight *= nums[i];
    right[i] *= left[i];
  }

  return right;
};
