import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { binaryTreePaths } from './257-binary-tree-paths';

describe('binaryTreePaths', () => {
  test('Input: root = [1,2,3,null,5]; Output: ["1->2->5","1->3"]', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);
    tree.left.right = new BinaryTreeNode(5);

    expect(binaryTreePaths(tree)).toStrictEqual(['1->2->5', '1->3']);
  });

  test('root = [1]; Output: ["1"]', () => {
    const tree = new BinaryTreeNode(1);
    expect(binaryTreePaths(tree)).toStrictEqual(['1']);
  });
});
