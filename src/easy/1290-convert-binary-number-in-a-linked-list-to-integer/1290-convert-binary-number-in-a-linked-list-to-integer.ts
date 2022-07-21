import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const getDecimalValue = (head: LinkedListNode | null): number => {
  if (!head) return 0;

  const output = [head.value];

  while (head.next) {
    head = head.next;
    output.push(head.value);
  }

  return parseInt(output.join(''), 2);
};
