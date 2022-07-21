import { TreeNode } from '../../common/tree/tree-node/tree-node';
import { preorder } from './589-n-ary-tree-preorder-traversal';
import { preorder as preorder2 } from './589-n-ary-tree-preorder-traversal-2';

describe('preorder', () => {
  test('root = [1,null,3,2,4,null,5,6]', () => {
    const tree = new TreeNode(1, [
      new TreeNode(3, [new TreeNode(5), new TreeNode(6)]),
      new TreeNode(2),
      new TreeNode(4),
    ]);
    expect(preorder(tree)).toStrictEqual([1, 3, 5, 6, 2, 4]);
    expect(preorder2(tree)).toStrictEqual([1, 3, 5, 6, 2, 4]);
  });

  test('root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () => {
    const tree = new TreeNode(1, [
      new TreeNode(2),
      new TreeNode(3, [new TreeNode(6), new TreeNode(7, [new TreeNode(11, [new TreeNode(14)])])]),
      new TreeNode(4, [new TreeNode(8, [new TreeNode(12)])]),
      new TreeNode(5, [new TreeNode(9, [new TreeNode(13)]), new TreeNode(10)]),
    ]);
    expect(preorder(tree)).toStrictEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
    expect(preorder2(tree)).toStrictEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
  });

  test('root = null', () => {
    expect(preorder()).toStrictEqual([]);
    expect(preorder2()).toStrictEqual([]);
  });
});
