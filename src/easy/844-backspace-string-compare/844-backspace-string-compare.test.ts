import { backspaceCompare } from './844-backspace-string-compare';
import { backspaceCompare as backspaceCompareStack } from './844-backspace-string-compare-stack';

describe('backspaceCompare', () => {
  test('s = "ab#c", t = "ad#c"', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy();
    expect(backspaceCompareStack('ab#c', 'ad#c')).toBeTruthy();
  });

  test('s = "ab##", t = "c#d#"', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy();
    expect(backspaceCompareStack('ab##', 'c#d#')).toBeTruthy();
  });

  test('s = "a#c", t = "b"', () => {
    expect(backspaceCompare('a#c', 'b')).toBeFalsy();
    expect(backspaceCompareStack('a#c', 'b')).toBeFalsy();
  });
});
