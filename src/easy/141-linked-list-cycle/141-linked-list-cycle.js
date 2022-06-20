/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = head => {
  const nodes = new Set();

  let on = head;

  while (on) {
    if (nodes.has(on)) return true;

    nodes.add(on);
    on = on.next;
  }

  return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycleFastSlow = head => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
