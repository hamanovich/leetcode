import { LinkedList } from '../../common/linked-list/linked-list';
import { deleteNode } from './237-delete-node-in-a-linked-list';

describe('deleteNode', () => {
  test('Input: head = [4,5,1,9], node = 5; Output: [4,1,9]', () => {
    const list = new LinkedList();
    const listResult = new LinkedList();

    [4, 5, 1, 9].forEach(item => list.append(item));
    [5, 1, 9].forEach(item => listResult.append(item));

    deleteNode(list.head);

    expect(list.head).toStrictEqual(listResult.head);
  });
});
