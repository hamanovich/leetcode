// https://leetcode.com/problems/word-break/

export const wordBreak = (s: string, wordDict: string[]): boolean => {
  const words = new Set(wordDict);
  const lens = new Set(wordDict.map(word => word.length));
  const set = new Set([0]);

  for (const res of set) {
    for (const len of lens) {
      if (words.has(s.slice(res, res + len))) set.add(res + len);
    }
  }

  return set.has(s.length);
};
