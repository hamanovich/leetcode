// https://leetcode.com/problems/palindromic-substrings/

export const countSubstrings = (s: string): number => {
  const dp = [...Array(s.length)].map(() => Array(s.length).fill(false));
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    dp[i][i + 1] && count++;
  }

  for (let len = 3; len <= s.length; len++) {
    let start = 0,
      end = start + len - 1;

    while (end < s.length) {
      dp[start][end] = dp[start + 1][end - 1] && s[start] === s[end];
      dp[start][end] && count++;
      start++;
      end++;
    }
  }

  return count;
};
