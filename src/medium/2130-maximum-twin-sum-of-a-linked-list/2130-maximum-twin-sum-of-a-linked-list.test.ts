import { LinkedList } from '../../common/linked-list/linked-list';
import { pairSum } from './2130-maximum-twin-sum-of-a-linked-list';
import { pairSum as pairSum2 } from './2130-maximum-twin-sum-of-a-linked-list-2';

describe('pairSum', () => {
  test('#1: Input: head = [5,4,2,1]; Output: 6', () => {
    const list = new LinkedList<number>();
    list.fromArray([5, 4, 2, 1]);
    expect(pairSum(list.head)).toBe(6);
  });

  test('#2: Input: head = [5,4,2,1]; Output: 6', () => {
    const list = new LinkedList<number>();
    list.fromArray([5, 4, 2, 1]);
    expect(pairSum2(list.head)).toBe(6);
  });

  test('#1: Input: head = [4,2,2,3]; Output: 7', () => {
    const list = new LinkedList<number>();
    list.fromArray([4, 2, 2, 3]);
    expect(pairSum(list.head)).toBe(7);
  });

  test('#2: Input: head = [4,2,2,3]; Output: 7', () => {
    const list = new LinkedList<number>();
    list.fromArray([4, 2, 2, 3]);
    expect(pairSum2(list.head)).toBe(7);
  });

  test('#1: Input: head = [1,100000]; Output: 100001', () => {
    const list = new LinkedList<number>();
    list.fromArray([1, 100000]);
    expect(pairSum(list.head)).toBe(100001);
  });

  test('#2: Input: head = [1,100000]; Output: 100001', () => {
    const list = new LinkedList<number>();
    list.fromArray([1, 100000]);
    expect(pairSum2(list.head)).toBe(100001);
  });
});
