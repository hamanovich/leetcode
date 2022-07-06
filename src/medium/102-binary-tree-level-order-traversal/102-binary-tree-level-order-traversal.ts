import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const levelOrder = (root?: BinaryTreeNode): number[][] => {
  if (!root) return [];

  const queue = [root];
  const levels: number[][] = [];

  while (queue.length) {
    let size = queue.length;
    const level = [];

    while (size--) {
      const item = queue.shift();
      level.push(item?.val);

      if (item?.left) queue.push(item.left);
      if (item?.right) queue.push(item.right);
    }

    levels.push(level as number[]);
  }

  return levels;
};
