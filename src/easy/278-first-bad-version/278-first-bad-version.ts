// mock function
const isBadVersion = (version: number, bad = 0): boolean => version >= bad;

export const firstBadVersion =
  (bad: typeof isBadVersion) =>
  (n: number): number => {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);

      if (bad(mid)) end = mid;
      else start = mid + 1;
    }

    return start;
  };
