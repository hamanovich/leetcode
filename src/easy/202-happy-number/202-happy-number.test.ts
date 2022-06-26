import { isHappy } from './202-happy-number';

describe('isHappy', () => {
  test('n = 19', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  test('n = 7', () => {
    expect(isHappy(7)).toBeTruthy();
  });

  test('n = 2', () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
