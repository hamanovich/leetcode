// https://leetcode.com/problems/guess-number-higher-or-lower/

export const guessNumber = (n: number, guess: (num: number) => number): number => {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid);

    if (result === 0) return mid;
    else if (result === 1) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};
