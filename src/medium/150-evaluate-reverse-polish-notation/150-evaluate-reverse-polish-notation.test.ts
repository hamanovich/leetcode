import { evalRPN } from './150-evaluate-reverse-polish-notation';

describe('evalRPN', () => {
  test('Input: tokens = ["2","1","+","3","*"]; Output: 9', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  });

  test('Input: tokens = ["2","1","-","3","*"]; Output: 9', () => {
    expect(evalRPN(['2', '1', '-', '3', '*'])).toBe(3);
  });

  test('Input: tokens = ["4","13","5","/","+"]; Output: 6', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  });

  test('Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]; Output: 22', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
  });
});
