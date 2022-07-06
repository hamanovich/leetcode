import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { maxDepth } from './104-maximum-depth-of-binary-tree';
import { maxDepth as maxDepth2 } from './104-maximum-depth-of-binary-tree-2';

describe('maxDepth', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);
    expect(maxDepth(tree)).toBe(3);
    expect(maxDepth2(tree)).toBe(3);
  });

  test('root = [1,null, 2]', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);
    expect(maxDepth(tree)).toBe(2);
    expect(maxDepth2(tree)).toBe(2);
  });

  test('root = []', () => {
    expect(maxDepth()).toBe(0);
    expect(maxDepth2()).toBe(0);
  });
});
