import { TreeNode } from '../../common/tree/tree-node.js';
import { maxDepth } from './104-maximum-depth-of-binary-tree.js';
import { maxDepth as maxDepth2 } from './104-maximum-depth-of-binary-tree-2.js';

describe('maxDepth', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);
    expect(maxDepth(tree)).toBe(3);
    expect(maxDepth2(tree)).toBe(3);
  });

  test('root = [1,null, 2]', () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);
    expect(maxDepth(tree)).toBe(2);
    expect(maxDepth2(tree)).toBe(2);
  });

  test('root = []', () => {
    expect(maxDepth()).toBe(0);
    expect(maxDepth2()).toBe(0);
  });
});
