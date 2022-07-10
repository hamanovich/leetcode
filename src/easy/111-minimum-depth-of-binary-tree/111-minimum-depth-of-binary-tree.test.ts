import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { minDepth as minDepthDFS } from './111-minimum-depth-of-binary-tree';
import { minDepth as minDepthBFS } from './111-minimum-depth-of-binary-tree-2';

describe('minDepth', () => {
  test('Input: root = [3,9,20,null,null,15,7]; Output: 2', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);

    expect(minDepthDFS(tree)).toBe(2);
    expect(minDepthBFS(tree)).toBe(2);
  });

  test('Input: root = [2,null,3,null,4,null,5,null,6]; Output: 5', () => {
    const tree = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);
    tree.right.right = new BinaryTreeNode(4);
    tree.right.right.right = new BinaryTreeNode(5);
    tree.right.right.right.right = new BinaryTreeNode(6);

    expect(minDepthDFS(tree)).toBe(5);
    expect(minDepthBFS(tree)).toBe(5);
  });

  test('root = []; Output: 0', () => {
    expect(minDepthDFS()).toBe(0);
    expect(minDepthBFS()).toBe(0);
  });

  test('root = [1]; Output: 1', () => {
    const tree = new BinaryTreeNode(1);

    expect(minDepthDFS(tree)).toBe(1);
    expect(minDepthBFS(tree)).toBe(1);
  });

  test('root = [1,2]; Output: 2', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);

    expect(minDepthDFS(tree)).toBe(2);
    expect(minDepthBFS(tree)).toBe(2);
  });

  test('root = [1,null,2]; Output: 2', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);

    expect(minDepthDFS(tree)).toBe(2);
    expect(minDepthBFS(tree)).toBe(2);
  });
});
