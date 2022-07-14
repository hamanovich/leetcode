// https://leetcode.com/problems/merge-strings-alternately/

export const mergeAlternately = (word1: string, word2: string): string => {
  const output: string[] = [];

  const w1 = word1.split('');
  const w2 = word2.split('');

  while (w1.length || w2.length) {
    output.push(w1.shift() as string);
    output.push(w2.shift() as string);
  }

  return output.join('');
};
