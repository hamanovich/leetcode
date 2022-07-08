import { pivot } from './pivot';

export const quickSort = (arr: number[], left = 0, right = arr.length - 1): number[] => {
  if (left < right) {
    quickSort(arr, left, pivot(arr, left, right) - 1);
    quickSort(arr, pivot(arr, left, right) + 1, right);
  }

  return arr;
};
