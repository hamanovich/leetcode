import { guessNumber } from './374-guess-number-higher-or-lower';

describe('guessNumber', () => {
  test('Input: n = 10, pick = 6; Output: 6', () => {
    const PICK = 6;
    const guess = (num: number) => (num > PICK ? -1 : num < PICK ? 1 : 0);

    expect(guessNumber(10, guess.bind(6))).toBe(6);
  });

  test('Input: n = 1, pick = 1; Output: 1', () => {
    const PICK = 1;
    const guess = (num: number) => (num > PICK ? -1 : num < PICK ? 1 : 0);
    expect(guessNumber(1, guess.bind(1))).toBe(1);
  });
});
