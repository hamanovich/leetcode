import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const removeElements = (head: LinkedListNode<number> | null, val: number): LinkedListNode<number> | null => {
  const result = new LinkedListNode(0);
  let current = result;

  result.next = head;

  while (current.next) {
    if (val === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
};
