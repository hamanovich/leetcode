// https://leetcode.com/problems/reverse-only-letters/

export const reverseOnlyLetters = (s: string): string => {
  let l = 0;
  let r = s.length - 1;
  const sent = s.split('');

  const isLetter = (c: string): boolean => c.toLowerCase() !== c.toUpperCase();

  while (l < r) {
    if (!isLetter(s[l])) {
      l++;
      continue;
    }

    if (!isLetter(s[r])) {
      r--;
      continue;
    }

    [sent[l], [sent[r]]] = [sent[r], sent[l]];
    l++;
    r--;
  }

  return sent.join('');
};
