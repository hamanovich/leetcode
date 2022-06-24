/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
export const nextGreatestLetter = (letters, target) => {
  if (letters.length === 1) return letters[0];

  let left = 0;
  let right = letters.length;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (letters[middle] <= target) left = middle + 1;
    else right = middle - 1;
  }

  if (left === letters.length) return letters[0];

  return letters[left];
};
