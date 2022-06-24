import { LinkedListNode } from '../../common/linked-list/linked-list-node';

/**
 * @param {LinkedListNode} head
 * @param {number} val
 * @return {LinkedListNode}
 */
export const removeElements = (head, val) => {
  let result = new LinkedListNode(0);
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
