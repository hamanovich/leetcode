import { LinkedList } from '../../common/linked-list/linked-list';
import { deleteNode } from './237-delete-node-in-a-linked-list';

describe('deleteNode', () => {
  test('Input: head = [4,5,1,9]; Output: [5,1,9]', () => {
    const list = new LinkedList();
    const listResult = new LinkedList();

    list.fromArray([4, 5, 1, 9]);
    listResult.fromArray([5, 1, 9]);

    deleteNode(list.head);

    expect(list.head).toStrictEqual(listResult.head);
  });

  test('Input: head = []; Output: null', () => {
    const list = new LinkedList();
    deleteNode(list.head);
    expect(list.head).toBeNull();
  });
});
