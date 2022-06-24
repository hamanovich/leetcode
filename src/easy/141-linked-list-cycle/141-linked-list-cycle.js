/**
 * @param {LinkedListNode} head
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
