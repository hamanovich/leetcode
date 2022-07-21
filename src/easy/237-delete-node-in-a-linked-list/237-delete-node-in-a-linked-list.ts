import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const deleteNode = (node: LinkedListNode | null): void | null => {
  if (!node?.next) return null;

  node.value = node.next.value;
  node.next = node.next.next;
};
