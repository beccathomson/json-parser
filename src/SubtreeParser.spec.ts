import { markDeepestSubtree } from "./SubtreeParser";
import { BinTreeNode } from "./BinaryParser";

describe("markDeepestSubtree", () => {
  it("should mark the deepest subtree correctly", () => {
    // Create a sample binary tree
    const root: BinTreeNode = {
      id: 1,
      left: {
        id: 2,
        left: {
          id: 4,
          left: {
            id: 7,
            left: null,
            right: {
                id: 8
            }
        }
        },
        right: {
          id: 5,
        },
      },
      right: {
        id: 3,
        left: null,
        right: {
          id: 6,
        },
      },
    };

    const [markedTree, maxDepth] = markDeepestSubtree(root);
    console.log(markedTree)

    // Assert that the markedTree has the correct markings
    expect(isMarked(markedTree)).toBe(false); // Root node should not be marked
    expect(isMarked(markedTree.left?.left?.left)).toBe(true); // Subtree with depth 4 should be marked
    expect(isMarked(markedTree.right)).toBe(false); // Subtree with depth 3 should not be marked
    expect(isMarked(markedTree.right?.right)).toBe(false); // Subtree with depth 1 should be marked

    // Assert that the maxDepth is correct
    expect(maxDepth).toBe(4);
  });
});

function isMarked(node: BinTreeNode | null | undefined): boolean {
  if (!node) {
    return false;
  }

  if (node.isSubtree) {
    return true;
  }

  return false
}
