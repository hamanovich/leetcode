// https://leetcode.com/problems/container-with-most-water/

export const maxArea = (height: number[]): number => {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    const rect = Math.min(height[l], height[r]) * (r - l);
    max = max < rect ? rect : max;

    if (height[l] < height[r]) l++;
    else r--;
  }

  return max;
};
