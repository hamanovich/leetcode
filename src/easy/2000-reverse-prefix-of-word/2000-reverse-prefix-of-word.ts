// https://leetcode.com/problems/reverse-prefix-of-word/

export const reversePrefix = (word: string, ch: string): string => {
  const res = word.split('');
  let l = 0;
  let r = word.indexOf(ch);

  while (l < r) {
    [res[l], res[r]] = [res[r], res[l]];
    l++;
    r--;
  }

  return res.join('');
};
