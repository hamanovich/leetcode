import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const hasCycle = (head: LinkedListNode) => {
  const nodes = new Set();

  let on = head;

  while (on) {
    if (nodes.has(on)) return true;

    nodes.add(on);
    on = on.next as LinkedListNode;
  }

  return false;
};