import { BinaryTreeNode } from './binary-tree-node';

describe('BinaryTreeNode', () => {
  it('creates BinaryTreeNode', () => {
    const node = new BinaryTreeNode(1);
    const nodeDefault = new BinaryTreeNode();

    expect(node.val).toBe(1);
    expect(nodeDefault.val).toBeUndefined();
  });

  it('isLeaf and hasChildren', () => {
    const node = new BinaryTreeNode(1);
    const nodeDefault = new BinaryTreeNode();

    expect(nodeDefault.isLeaf).toBeTruthy();
    expect(node.isLeaf).toBeTruthy();
    expect(nodeDefault.hasChildren).toBeFalsy();
    expect(node.hasChildren).toBeFalsy();
  });
});
