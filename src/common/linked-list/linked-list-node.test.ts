import { LinkedListNode } from './linked-list-node';

describe('LinkedListNode', () => {
  it('creates list', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('creates list node with object', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('links nodes', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

  it('converts node to string', () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toBe('1');
  });

  it('converts node to string with custom stringifier', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode<{ value: number; key: string }>(nodeValue);
    const toStringCallback = (node: { value: number; key: string }) => `value: ${node.value}, key: ${node.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
