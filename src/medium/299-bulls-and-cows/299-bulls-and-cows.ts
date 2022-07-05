// https://leetcode.com/problems/bulls-and-cows/

export const getHint = (secret: string, guess: string): string => {
  const map: Record<string, number> = {};
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);

    if (s === g) bull++;
    else {
      if (Number(map[s]) < 0) cow++;
      if (Number(map[g]) > 0) cow++;
      map[s] = parseInt(`${map[s] || 0}`) + 1;
      map[g] = parseInt(`${map[g] || 0}`) - 1;
    }
  }

  return `${bull}A${cow}B`;
};
