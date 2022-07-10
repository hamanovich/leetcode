// https://leetcode.com/problems/valid-mountain-array/

export const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 3) return false;

  let left = 0;
  let right = arr.length - 1;

  while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
    if (arr[left] < arr[left + 1]) ++left;
    if (arr[right] < arr[right - 1]) --right;
  }

  if (left !== right || left === arr.length - 1 || right === 0) return false;

  return true;
};
