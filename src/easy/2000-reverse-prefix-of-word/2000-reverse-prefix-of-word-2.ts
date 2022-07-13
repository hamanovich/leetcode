// https://leetcode.com/problems/reverse-prefix-of-word/

export const reversePrefix = (word: string, ch: string): string => {
  const index: number = word.indexOf(ch) + 1;
  return !index ? word : word.slice(0, index).split('').reverse().join('') + word.slice(index);
};
