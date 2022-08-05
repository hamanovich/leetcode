// https://leetcode.com/problems/trapping-rain-water/

export const trap = (height: number[]): number => {
  let l = 0;
  let r = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (l < r) {
    leftMax = Math.max(leftMax, height[l]);

    if (height[l] < leftMax) result += leftMax - height[l];

    rightMax = Math.max(rightMax, height[r]);

    if (height[r] < rightMax) result += rightMax - height[r];

    height[l] < height[r] ? l++ : r--;
  }

  return result;
};
