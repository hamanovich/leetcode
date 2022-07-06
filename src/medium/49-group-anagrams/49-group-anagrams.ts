export const groupAnagrams = (strs: string[]): string[][] => {
  const hash: Record<string, string[]> = {};

  for (const str of strs) {
    const sorted = str.split('').sort().join('');

    if (hash[sorted]) hash[sorted].push(str);
    else hash[sorted] = [str];
  }

  return Object.values(hash);
};
