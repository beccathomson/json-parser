import { BinTreeNode } from "./BinaryParser";


  export function findDeepestSubtree(node: BinTreeNode): BinTreeNode | null {
    let maxDepth = 0;
    let deepestCount = 0;
    let deepestSubtree: BinTreeNode | null = null;
  
    function dfs(node: BinTreeNode | null | undefined, depth: number): number {
      if (!node) {
        return 0;
      }
  
      const leftDepth = dfs(node.left, depth + 1);
      const rightDepth = dfs(node.right, depth + 1);
  
      const currentDepth = Math.max(leftDepth, rightDepth) + 1;
  
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
        deepestCount = 1;
        deepestSubtree = node;
      } else if (currentDepth === maxDepth) {
        deepestCount++;
      }
  
      return currentDepth;
    }
  
    dfs(node, 0);
  
    return deepestSubtree;
  }
  

  
export function markNodesAsGreen(node: BinTreeNode | null | undefined): void {
    if (!node) {
      return;
    }
  
    node.isSubtree = true;
  
    markNodesAsGreen(node.left);
    markNodesAsGreen(node.right);
  }