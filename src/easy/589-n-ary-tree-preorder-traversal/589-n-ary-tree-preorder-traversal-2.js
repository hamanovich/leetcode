import { TreeNode } from '../../common/tree/tree-node.js';

/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
export const preorder = (root, list = []) => {
  if (root == null) return list;

  list.push(root.val);

  for (let child of root.children) preorder(child, list);

  return list;
};

//            1
//         /  |  \
//        3   2   4
//       / \
//      5   6
// const tree = new TreeNode(1,
//   [new TreeNode(3,
//     [new TreeNode(5), new TreeNode(6)]),
//     new TreeNode(2), new TreeNode(4)
//   ]);
