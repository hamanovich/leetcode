import { fizzBuzz } from './412-fizz-buzz';

describe('fizzBuzz', () => {
  test('n = 3', () => {
    expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
  });

  test('n = 5', () => {
    expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  test('n = 15', () => {
    expect(fizzBuzz(15)).toStrictEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
