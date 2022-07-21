import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { maxDepth as maxDepthDFS } from './104-maximum-depth-of-binary-tree';
import { maxDepth as maxDepthBFS } from './104-maximum-depth-of-binary-tree-2';

describe('maxDepth', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);
    expect(maxDepthDFS(tree)).toBe(3);
    expect(maxDepthBFS(tree)).toBe(3);
  });

  test('root = [1,null, 2]', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);
    expect(maxDepthDFS(tree)).toBe(2);
    expect(maxDepthBFS(tree)).toBe(2);
  });

  test('root = []', () => {
    expect(maxDepthDFS()).toBe(0);
    expect(maxDepthBFS()).toBe(0);
  });
});
