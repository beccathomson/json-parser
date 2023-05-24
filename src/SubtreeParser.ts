import { BinTreeNode } from "./BinaryParser";

export function markSmallestDeepestSubtree(root: BinTreeNode): [BinTreeNode, number] {
    let minSize = Infinity;
    let maxDepth = 0;
    let smallestDeepestSubtree: BinTreeNode | null = null;
  
    function dfs(node: BinTreeNode | null | undefined, depth: number): number {
      if (!node) {
        return 0;
      }
  
      const leftSize = dfs(node.left, depth + 1);
      const rightSize = dfs(node.right, depth + 1);
      const currentSize = leftSize + rightSize + 1;
  
      if (currentSize < minSize && depth >= maxDepth) {
        minSize = currentSize;
        maxDepth = depth;
        smallestDeepestSubtree = node;
      }
  
      return currentSize;
    }
  
    dfs(root, 0);
    markNodesAsSubtree(smallestDeepestSubtree);
    return [root, maxDepth]
  }
  
  function markNodesAsSubtree(node: BinTreeNode | null | undefined): void {
    if (!node) {
      return;
    }
  
    node.isSubtree = true;
    markNodesAsSubtree(node.left);
    markNodesAsSubtree(node.right);
  }
  