// https://leetcode.com/problems/house-robber-ii/

export const rob = (nums: number[]): number => {
  if (nums.length < 2) return nums[0] || 0;
  if (nums.length === 2) return Math.max(...nums);

  let n1 = nums[0];
  let max1 = Math.max(nums[0], nums[1]);
  let n2 = nums[1];
  let max2 = Math.max(nums[1], nums[2]);

  for (let i = 2; i < nums.length - 1; i++) {
    const prev = Math.max(n1 + nums[i], max1);
    n1 = max1;
    max1 = prev;

    const next = Math.max(n2 + nums[i + 1], max2);
    n2 = max2;
    max2 = next;
  }

  return Math.max(max1, max2);
};
