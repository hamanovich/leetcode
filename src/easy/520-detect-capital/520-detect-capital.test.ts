import { detectCapitalUse } from './520-detect-capital';

describe('detectCapitalUse', () => {
  test('Input: word = "USA"; Output: true', () => {
    expect(detectCapitalUse('USA')).toBeTruthy();
  });

  test('Input: word = "FlaG"; Output: false', () => {
    expect(detectCapitalUse('FlaG')).toBeFalsy();
  });
});
