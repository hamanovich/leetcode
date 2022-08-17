import { LinkedList } from '../../common/linked-list/linked-list';
import { rotateRight } from './61-rotate-list';
import { rotateRight as rotateRight2 } from './61-rotate-list-2';

describe('rotateRight', () => {
  test('#1: Input: head = [1,2,3,4,5], k = 0; Output: [1,2,3,4,5]', () => {
    const l1 = new LinkedList();
    const listResult = new LinkedList();
    l1.fromArray([1, 2, 3, 4, 5]);
    listResult.fromArray([1, 2, 3, 4, 5]);

    expect(rotateRight(l1.head, 0)).toEqual(listResult.head);
  });

  test('#2: Input: head = [1,2,3,4,5], k = 0; Output: [1,2,3,4,5]', () => {
    const l1 = new LinkedList<number>();
    const listResult = new LinkedList<number>();
    l1.fromArray([1, 2, 3, 4, 5]);
    listResult.fromArray([1, 2, 3, 4, 5]);

    expect(rotateRight2(l1.head, 0)).toEqual(listResult.head);
  });

  test('#1: Input: head = [1,2,3,4,5], k = 2; Output: [4,5,1,2,3]', () => {
    const l1 = new LinkedList();
    const listResult = new LinkedList();
    l1.fromArray([1, 2, 3, 4, 5]);
    listResult.fromArray([4, 5, 1, 2, 3]);

    expect(rotateRight(l1.head, 2)).toEqual(listResult.head);
  });

  test('#2: Input: head = [1,2,3,4,5], k = 2; Output: [4,5,1,2,3]', () => {
    const l1 = new LinkedList<number>();
    const listResult = new LinkedList<number>();
    l1.fromArray([1, 2, 3, 4, 5]);
    listResult.fromArray([4, 5, 1, 2, 3]);

    expect(rotateRight2(l1.head, 2)).toEqual(listResult.head);
  });

  test('#1: Input: head = [0,1,2], k = 4; Output: [2,0,1]', () => {
    const l1 = new LinkedList();
    const listResult = new LinkedList();
    l1.fromArray([0, 1, 2]);
    listResult.fromArray([2, 0, 1]);

    expect(rotateRight(l1.head, 4)).toEqual(listResult.head);
  });

  test('#2: Input: head = [0,1,2], k = 4; Output: [2,0,1]', () => {
    const l1 = new LinkedList<number>();
    const listResult = new LinkedList<number>();
    l1.fromArray([0, 1, 2]);
    listResult.fromArray([2, 0, 1]);

    expect(rotateRight2(l1.head, 4)).toEqual(listResult.head);
  });
});
