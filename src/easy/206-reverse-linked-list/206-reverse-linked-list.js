// Definition for singly-linked list.
export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = head => {
  let prev = null;
  let on = head;

  while (on) {
    let temp = on.next;
    on.next = prev;
    prev = on;
    on = temp;
  }

  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;

  const temp = head.next;
  head.next = prev;

  return reverseListRecursive(temp, head);
};
