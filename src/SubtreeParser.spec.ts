import { BinTreeNode } from './BinaryParser';
import { markSmallestDeepestSubtree } from './SubtreeParser';

// Helper function to create a binary tree node
function createNode(id: number, left?: BinTreeNode, right?: BinTreeNode): BinTreeNode {
  return { id, left, right };
}

describe('markDeepestSubtree', () => {
  test('should mark the single node tree as the deepest subtree', () => {
    const tree: BinTreeNode = createNode(1);
    const [markedTree, depth] = markSmallestDeepestSubtree(tree);

    expect(markedTree).toEqual({ id: 1, isSubtree: true });
    expect(depth).toBe(0);
  });

  test('should mark the correct subtree in a tree with two levels', () => {
    const tree: BinTreeNode = createNode(1, createNode(2), createNode(3));
    const [markedTree, depth] = markSmallestDeepestSubtree(tree);

    expect(markedTree).toEqual({
      id: 1,
      isSubtree: true,
      left: { id: 2 },
      right: { id: 3 },
    });
    expect(depth).toBe(1);
  });

  test('should mark the correct subtree in a tree with three levels', () => {
    const tree: BinTreeNode = createNode(
      1,
      createNode(2, createNode(4), createNode(5)),
      createNode(3, createNode(6))
    );
    const [markedTree, depth] = markSmallestDeepestSubtree(tree);

    expect(markedTree).toEqual({
      id: 1,
      isSubtree: true,
      left: {
        id: 2,
        left: { id: 4 },
        right: { id: 5 },
      },
      right: {
        id: 3,
        left: { id: 6 },
      },
    });
    expect(depth).toBe(2);
  });

});
