/**
 * @param {LinkedListNode} head
 * @return {boolean}
 */
export const detectCycle = head => {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }
  return null;
};
