import { BinTreeNode } from "./BinaryParser";

function subtreeWithAllDeepest(root: BinTreeNode | null | undefined): [BinTreeNode | null | undefined, number] {
    if (!root) return [null, 0];
  
    const [leftSubtree, leftDepth] = subtreeWithAllDeepest(root.left);
    const [rightSubtree, rightDepth] = subtreeWithAllDeepest(root.right);
  
    if (leftDepth > rightDepth) {
      return [leftSubtree, leftDepth + 1];
    }
  
    if (leftDepth < rightDepth) {
      return [rightSubtree, rightDepth + 1];
    }
  
    return [root, leftDepth + 1];
  }
  
  const getDepth = (node: BinTreeNode | null | undefined): number => {
    if (!node) return 0;
  
    const left = getDepth(node.left);
    const right = getDepth(node.right);
  
    return Math.max(left, right) + 1;
  };
  

export function markSmallestDeepestSubtree(root: BinTreeNode): [BinTreeNode, number] {
    const [subtree, maxDepth] = subtreeWithAllDeepest(root);
    markNodesAsSubtree(subtree)
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
  