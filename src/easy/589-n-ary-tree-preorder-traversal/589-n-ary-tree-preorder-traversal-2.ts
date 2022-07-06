import { TreeNode } from '../../common/tree/tree-node';

export const preorder = (root?: TreeNode | null, list = []): number[] => {
  if (root === null || !root) return list;

  list.push(root.val as never);

  for (const child of root.children) preorder(child as TreeNode<unknown> | null, list);

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
