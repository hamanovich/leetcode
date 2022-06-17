import { romanToInt } from './13_roman-to-integer';

test('romanToInt XVIV equal 19', () => {
  expect(romanToInt('XVIV')).toBe(19);
});

test('romanToInt III equal 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('romanToInt MCMXCIV equal 1994', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
