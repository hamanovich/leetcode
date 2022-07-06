export const isSubsequence = (s: string, t: string): boolean => {
  let count = 0;

  if (!s.length && !t.length) return true;

  for (const char of t) {
    if (char === s[count]) count++;
    if (count === s.length) return true;
  }

  return false;
};
