import { LinkedList } from '../../common/linked-list/linked-list';
import { getDecimalValue } from './1290-convert-binary-number-in-a-linked-list-to-integer';
import { getDecimalValue as getDecimalValueBit } from './1290-convert-binary-number-in-a-linked-list-to-integer';

describe('getDecimalValue', () => {
  const list = new LinkedList();

  beforeEach(() => list.clear());

  test('#1: Input: head = [1,0,1] Output: 5', () => {
    list.fromArray([1, 0, 1]);
    expect(getDecimalValue(list.head)).toBe(5);
  });

  test('#2: Input: head = [1,0,1] Output: 5', () => {
    list.fromArray([1, 0, 1]);
    expect(getDecimalValueBit(list.head)).toBe(5);
  });

  test('#1: Input: head = [1,0,1,1,1,0] Output: 46', () => {
    list.fromArray([1, 0, 1, 1, 1, 0]);
    expect(getDecimalValue(list.head)).toBe(46);
  });

  test('#2: Input: head = [1,0,1,1,1,0] Output: 46', () => {
    list.fromArray([1, 0, 1, 1, 1, 0]);
    expect(getDecimalValueBit(list.head)).toBe(46);
  });

  test('#1: Input: head = [0] Output: 0', () => {
    list.append(0);
    expect(getDecimalValue(list.head)).toBe(0);
  });

  test('#2: Input: head = [0] Output: 0', () => {
    list.append(0);
    expect(getDecimalValueBit(list.head)).toBe(0);
  });

  test('#1: Input: head = null Output: 0', () => {
    list.append(0);
    expect(getDecimalValue(null)).toBe(0);
  });

  test('#2: Input: head = null Output: 0', () => {
    list.append(0);
    expect(getDecimalValue(null)).toBe(0);
  });
});
