import { LinkedList } from '../../common/linked-list/linked-list';
import { mergeNodes } from './2181-merge-nodes-in-between-zeros';
import { mergeNodes as mergeNodes2 } from './2181-merge-nodes-in-between-zeros-2';
import { mergeNodes as mergeNodes3 } from './2181-merge-nodes-in-between-zeros-3';

describe('mergeNodes', () => {
  test('#1: Input: head = [0,3,1,0,4,5,2,0]; Output: [4,11]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 3, 1, 0, 4, 5, 2, 0]);
    listResult.fromArray([4, 11]);

    expect(mergeNodes(list.head)).toEqual(listResult.head);
  });

  test('#2: Input: head = [0,3,1,0,4,5,2,0]; Output: [4,11]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 3, 1, 0, 4, 5, 2, 0]);
    listResult.fromArray([4, 11]);

    expect(mergeNodes2(list.head)).toEqual(listResult.head);
  });

  test('#3: Input: head = [0,3,1,0,4,5,2,0]; Output: [4,11]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 3, 1, 0, 4, 5, 2, 0]);
    listResult.fromArray([4, 11]);

    expect(mergeNodes3(list.head)).toEqual(listResult.head);
  });

  test('#1: Input: head = [0,1,0,3,0,2,2,0]; Output: [1,3,4]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 1, 0, 3, 0, 2, 2, 0]);
    listResult.fromArray([1, 3, 4]);

    expect(mergeNodes(list.head)).toEqual(listResult.head);
  });

  test('#2: Input: head = [0,1,0,3,0,2,2,0]; Output: [1,3,4]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 1, 0, 3, 0, 2, 2, 0]);
    listResult.fromArray([1, 3, 4]);

    expect(mergeNodes2(list.head)).toEqual(listResult.head);
  });

  test('#3: Input: head = [0,1,0,3,0,2,2,0]; Output: [1,3,4]', () => {
    const list = new LinkedList<number>();
    const listResult = new LinkedList<number>();

    list.fromArray([0, 1, 0, 3, 0, 2, 2, 0]);
    listResult.fromArray([1, 3, 4]);

    expect(mergeNodes3(list.head)).toEqual(listResult.head);
  });
});
