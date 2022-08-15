import { LinkedList } from '../../common/linked-list/linked-list';
import { swapPairs } from './24-swap-nodes-in-pairs';

describe('swapPairs', () => {
  test('Input: head = [1,2,3,4]; Output: [2,1,4,3]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();
    list.fromArray([1, 2, 3, 4]);
    listResult.fromArray([2, 1, 4, 3]);

    expect(swapPairs(list.head)).toEqual(listResult.head);
  });

  test('Input: head = []; Output: []', () => {
    expect(swapPairs(new LinkedList<number>().head)).toBeNull();
  });

  test('Input: head = [1]; Output: [1]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();
    list.append(1);
    listResult.append(1);

    expect(swapPairs(list.head)).toEqual(listResult.head);
  });
});
