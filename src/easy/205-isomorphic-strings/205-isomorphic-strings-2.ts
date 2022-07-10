export const isIsomorphic = (s: string, t: string): boolean => {
  const hash1: Record<string, string> = {};
  const hash2: Record<string, string> = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!hash1[s[i]] && !hash2[t[i]]) {
      hash1[s[i]] = t[i];
      hash2[t[i]] = s[i];
    } else if (hash1[s[i]] !== t[i] || hash2[t[i]] !== s[i]) return false;
  }

  return true;
};
