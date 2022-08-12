// https://leetcode.com/problems/word-break/

export const wordBreak = (s: string, wordDict: string[]): boolean => {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
    if (dp[i]) {
      for (const word of wordDict) {
        if (s.slice(i, i + word.length) === word) dp[i + word.length] = true;
      }
    }
  }

  return dp[s.length];
};
