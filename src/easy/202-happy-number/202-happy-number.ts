export const isHappy = (n: number): boolean => {
  const squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
  const set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;

    for (let i = 0; i < s.length; ++i) n += squares[Number(s[i])];

    if (n === 1) return true;
  }

  return false;
};
