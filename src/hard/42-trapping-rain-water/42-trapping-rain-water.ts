// https://leetcode.com/problems/trapping-rain-water/

export const trap = (height: number[]): number => {
  let land = 0;
  let maxLeft = 0;
  let maxAreaLeft = 0;
  let maxRight = 0;
  let maxAreaRight = 0;
  let right = height.length;

  for (const h of height) {
    right--;
    land += h;
    maxLeft = Math.max(maxLeft, h);
    maxAreaLeft += maxLeft;
    maxRight = Math.max(maxRight, height[right]);
    maxAreaRight += maxRight;
  }

  const boundingArea = height.length * maxLeft;

  return maxAreaRight + maxAreaLeft - boundingArea - land;
};
