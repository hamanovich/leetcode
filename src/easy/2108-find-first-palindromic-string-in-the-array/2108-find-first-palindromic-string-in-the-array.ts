// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

export const firstPalindrome = (words: string[]): string => {
  let res = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const len = word.length;
    let l = 0;
    let r = len - 1;

    if (len === 1) return word;

    while (l < r) {
      if (word[l] === word[r]) {
        res = word;
        l++;
        r--;
      } else {
        res = '';
        break;
      }
    }

    if (res) break;
  }

  return res;
};
