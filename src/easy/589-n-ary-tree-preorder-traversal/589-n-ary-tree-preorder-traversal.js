import { TreeNode } from '../../common/tree/tree-node.js';

/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
export const preorder = root => {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);

    for (let i = node.children.length - 1; i >= 0; i--) stack.push(node.children[i]);
  }

  return result;
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
