import { LinkedList } from '../../common/linked-list/linked-list';
import { deleteDuplicates } from './83-remove-duplicates-from-sorted-list';

describe('deleteDuplicates', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();
  });

  test('head = [1,1,2]', () => {
    list.fromArray([1, 1, 2]);
    listResult.fromArray([1, 2]);

    expect(deleteDuplicates(list.head)).toStrictEqual(listResult.head);
  });

  test('head = [1,1,2,2,3]', () => {
    list.fromArray([1, 1, 2, 2, 3]);
    listResult.fromArray([1, 2, 3]);

    expect(deleteDuplicates(list.head)).toStrictEqual(listResult.head);
  });
});
