import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const getDecimalValue = (head: LinkedListNode<number> | null): number => {
  if (!head) return 0;

  let value = 0;

  while (head) {
    value = (value << 1) | head.value;
    head = head.next;
  }

  return value;
};
