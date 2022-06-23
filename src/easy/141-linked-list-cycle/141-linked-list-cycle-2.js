/**
 * @param {LinkedListNode} head
 * @return {boolean}
 */
export const hasCycle = head => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
