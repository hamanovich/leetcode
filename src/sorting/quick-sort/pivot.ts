export const pivot = (arr: number[], pivotIndex = 0, endIndex = arr.length - 1): number => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (arr[i] < arr[pivotIndex]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  [arr[pivotIndex], arr[swapIndex]] = [arr[swapIndex], arr[pivotIndex]];

  return swapIndex;
};
