// https://leetcode.com/problems/trapping-rain-water/

export const trap = (height: number[]): number => {
  let result = 0;
  let i = 0;
  const stack = [];

  while (i < height.length) {
    while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop() as number;

      if (!stack.length) break;

      const dist = i - stack[stack.length - 1] - 1;
      const h = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      result += dist * h;
    }
    stack.push(i);
    i++;
  }

  return result;
};
