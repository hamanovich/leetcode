import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const getDecimalValue = (head: LinkedListNode | null): number => {
  if (!head) return 0;

  let value = 0;

  while (head) {
    value = (value << 1) | head.value;
    head = head.next;
  }

  return value;
};
