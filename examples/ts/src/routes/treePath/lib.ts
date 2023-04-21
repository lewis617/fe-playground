/**
 * @file 二叉树所有路径
 */

type Tree = {
  value: number;
  left?: Tree;
  right?: Tree;
};
const tree: Tree = {
  value: 1,
  left: {
    value: 2,
    right: { value: 5 },
  },
  right: { value: 3 },
};
function treePath(root: Tree): string[] {
  const res: string[] = [];
  const dfs = (n: Tree, path: number[]) => {
    if (!n.left && !n.right) {
      res.push(path.join('->'));
      return;
    }
    n.left && dfs(n.left, path.concat(n.left.value));
    n.right && dfs(n.right, path.concat(n.right.value));
  };
  dfs(root, [root.value]);
  return res;
}
console.log(treePath(tree)); // [ '1->2->5', '1->3' ]
