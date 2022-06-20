import { removeNthFromEnd } from './19-remove-nth-node-from-end';
import { ListNode } from '../../utils/linked-list';

describe('removeNthFromEnd', () => {
  test('head = [1,2,3,4,5], n = 2', () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);

    const nodeResult = new ListNode(1);
    nodeResult.next = new ListNode(2);
    nodeResult.next.next = new ListNode(3);
    nodeResult.next.next.next = new ListNode(5);
    expect(removeNthFromEnd(node, 2)).toStrictEqual(nodeResult);
  });

  test('head = [1], n = 1', () => {
    expect(removeNthFromEnd(new ListNode(1), 1)).toBeNull();
  });

  test('head = [1,2], n = 1', () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);

    const nodeResult = new ListNode(1);

    expect(removeNthFromEnd(node, 1)).toStrictEqual(nodeResult);
  });
});
