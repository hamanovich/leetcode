import { LinkedList } from '../../common/linked-list/linked-list';
import { mergeTwoLists } from './21-merge-two-sorted-lists';
import { mergeTwoLists as mergeTwoLists2 } from './21-merge-two-sorted-lists';

describe('mergeTwoLists', () => {
  const list = new LinkedList();
  const list2 = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    list2.clear();
    listResult.clear();
  });

  test('#1: list1 = [1,2,4], list2 = [1,3,4]', () => {
    [1, 2, 4].forEach(item => list.append(item));
    [1, 3, 4].forEach(item => list2.append(item));
    [1, 1, 2, 3, 4, 4].forEach(item => listResult.append(item));
    expect(mergeTwoLists(list.head, list2.head)).toStrictEqual(listResult.head);
  });

  test('#2: list1 = [1,2,4], list2 = [1,3,4]', () => {
    [1, 2, 4].forEach(item => list.append(item));
    [1, 3, 4].forEach(item => list2.append(item));
    [1, 1, 2, 3, 4, 4].forEach(item => listResult.append(item));
    expect(mergeTwoLists2(list.head, list2.head)).toStrictEqual(listResult.head);
  });

  test('#1: list1 = [], list2 = []', () => {
    expect(mergeTwoLists(list.head, list2.head)).toStrictEqual(listResult.head);
  });

  test('#2: list1 = [], list2 = []', () => {
    expect(mergeTwoLists2(list.head, list2.head)).toStrictEqual(listResult.head);
  });

  test('#1: list1 = [], list2 = [0]', () => {
    list2.append(0);
    listResult.append(0);
    expect(mergeTwoLists(list.head, list2.head)).toStrictEqual(listResult.head);
  });

  test('#2: list1 = [], list2 = [0]', () => {
    list2.append(0);
    listResult.append(0);
    expect(mergeTwoLists2(list.head, list2.head)).toStrictEqual(listResult.head);
  });
});
