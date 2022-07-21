import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const deleteDuplicates = (head: LinkedListNode | null): LinkedListNode | null => {
  let current = head;

  while (current?.next) {
    if (current.value === current.next.value) current.next = current.next.next;
    else current = current.next;
  }

  return head;
};
