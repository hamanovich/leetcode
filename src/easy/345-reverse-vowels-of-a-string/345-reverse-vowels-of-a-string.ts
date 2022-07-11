// https://leetcode.com/problems/reverse-vowels-of-a-string/

export const reverseVowels = (s: string): string => {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (!vowels.includes(arr[left].toLowerCase())) {
      left++;
      continue;
    }

    if (!vowels.includes(arr[right].toLowerCase())) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
};
