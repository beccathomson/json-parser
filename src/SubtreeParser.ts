import { BinTreeNode } from "./BinaryParser";

export function markDeepestSubtree(root: BinTreeNode): number {
    let maxDepth = 0;
    let deepestSubtreeRoot: BinTreeNode | null = null;
  
    function dfs(node: BinTreeNode | null | undefined, depth: number): number {
      if (!node) {
        return depth;
      }
  
      const leftDepth = dfs(node.left, depth + 1);
      const rightDepth = dfs(node.right, depth + 1);
  
      if (leftDepth === rightDepth && leftDepth >= maxDepth) {
        maxDepth = leftDepth;
        deepestSubtreeRoot = node;
      }
  
      return Math.max(leftDepth, rightDepth);
    }
  
    dfs(root, 0);
    markSubtree(deepestSubtreeRoot);
    return maxDepth;
  }
  
  function markSubtree(node: BinTreeNode| undefined | null): void {
    if (!node) {
      return;
    }
  
    node.isSubtree = true;
    markSubtree(node.left);
    markSubtree(node.right);
  }
  