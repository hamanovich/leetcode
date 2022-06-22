/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isIsomorphic = (s, t) => {
  const hash1 = {};
  const hash2 = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!hash1[s[i]] && !hash2[t[i]]) {
      hash1[s[i]] = t[i];
      hash2[t[i]] = s[i];
    } else if (hash1[s[i]] !== t[i] || hash2[t[i]] !== s[i]) return false;
  }

  return true;
};
