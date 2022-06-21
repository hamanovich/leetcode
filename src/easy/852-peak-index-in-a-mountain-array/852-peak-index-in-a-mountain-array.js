/**
 * @param {number[]} arr
 * @return {number}
 */
export const peakIndexInMountainArray = arr => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const index = Math.floor((low + high) / 2);

    if (arr[index] < arr[index + 1]) low = index + 1;
    else high = index - 1;
  }

  return low;
};
