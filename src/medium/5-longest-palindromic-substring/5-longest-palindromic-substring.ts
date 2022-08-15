// https://leetcode.com/problems/longest-palindromic-substring/

export const longestPalindrome = (s: string): string => {
  let result = '';

  const helper = (l: number, r: number): void => {
    let left = l;
    let right = r;

    while (left >= 0 && right < s.length && left <= right) {
      if (s[left] !== s[right]) break;
      if (right - left + 1 > result.length) result = s.slice(left, right + 1);

      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) helper(i, i), helper(i, i + 1);

  return result;
};
