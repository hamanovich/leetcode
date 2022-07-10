export const isIsomorphic = (s: string, t: string): boolean => {
  const map1 = new Map();
  const map2 = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (map1.get(s[i])) {
      if (map1.get(s[i]) !== t[i]) {
        return false;
      }

      continue;
    } else if (map2.get(t[i])) return false;

    map1.set(s[i], t[i]);
    map2.set(t[i], s[i]);
  }

  return true;
};
