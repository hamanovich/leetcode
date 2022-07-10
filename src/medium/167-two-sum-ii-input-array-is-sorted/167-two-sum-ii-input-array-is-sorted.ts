// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

export const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;
  const output: number[] = [];

  if (numbers.length === 2) return [left + 1, right + 1];

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      output.push(left + 1);
      output.push(right + 1);
      break;
    }
    if (sum > target) right--;
    else left++;
  }

  return output;
};
