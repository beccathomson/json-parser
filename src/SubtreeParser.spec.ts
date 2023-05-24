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
            left: {id: 11},
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

    const maxDepth = markDeepestSubtree(root);
    console.log(root.left?.left?.left);

    // Assert that the markedTree has the correct markings
    expect(isMarked(root)).toBe(false); // Root node should not be marked
    expect(isMarked(root.left?.left?.left)).toBe(true); // Subtree that is parent of leaf nodes with max depth 5 should be marked
    expect(isMarked(root.right)).toBe(false); // Subtree with depth 3 should not be marked
    expect(isMarked(root.right?.right)).toBe(false); // Subtree with depth 1 should be marked

    // Assert that the maxDepth is correct
    expect(maxDepth).toBe(5);
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
