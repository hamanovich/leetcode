import { isValid } from './20-valid-parentheses';
import { isValid as isValid2 } from './20-valid-parentheses-2';

describe('isValid', () => {
  test('Input: s = "()"; Output: true', () => {
    expect(isValid('()')).toBeTruthy();
    expect(isValid2('()')).toBeTruthy();
  });

  test('Input: s = "()[]{}"; Output: true', () => {
    expect(isValid('()[]{}')).toBeTruthy();
    expect(isValid2('()[]{}')).toBeTruthy();
  });

  test('Input: s = "(]"; Output: false', () => {
    expect(isValid('(]')).toBeFalsy();
    expect(isValid2('(]')).toBeFalsy();
  });

  test('Input: s = "a"; Output: false', () => {
    expect(isValid('a')).toBeFalsy();
    expect(isValid2('a')).toBeFalsy();
  });
});
