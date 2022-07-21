import { TreeNode } from './tree-node';

describe('TreeNode', () => {
  it('creates TreeNode', () => {
    const node = new TreeNode();

    expect(node.val).toBe(0);
  });

  it('creates TreeNode with children', () => {
    const node = new TreeNode(1, [2, 3, 4]);

    expect(node.val).toBe(1);
    expect(node.children).toStrictEqual([2, 3, 4]);
    expect(node.children.length).toBe(3);
  });
});
