import React from 'react';
import { BinTreeNode } from './BinaryParser';
import { markSmallestDeepestSubtree } from './SubtreeParser';

interface BinTreeNodeSquareProps {
  node: BinTreeNode;
  level: number;
}

const BinTreeNodeSquare: React.FC<BinTreeNodeSquareProps> = ({ node, level }) => {
  const color = node.isSubtree ? "green" : "black";
  const style = {
    border: `2px solid ${color}`,
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    marginLeft: level * 10, // Adjust the marginLeft based on the level
  };

  return (
    <div style={style}>
      {node.id === null ? 'null' : node.id}
    </div>
  );
};

const VisualTree: React.FC<{ binaryTree: BinTreeNode }> = ({ binaryTree }) => {
  if (!binaryTree) {
    return <div></div>;
  }
 
  const [markedRoot, maxDepth] = markSmallestDeepestSubtree(binaryTree);

  const renderBinaryTreeNode = (node: BinTreeNode | null | undefined, level: number): JSX.Element | null => {
    if (!node || level === maxDepth) {
      return null;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BinTreeNodeSquare node={node} level={level} />
        <div style={{ display: 'flex' }}>
          {renderBinaryTreeNode(node.left, level + 1)}
          {renderBinaryTreeNode(node.right, level + 1)}
        </div>
      </div>
    );
  };

  return <div>{renderBinaryTreeNode(markedRoot, 0)}</div>;
};

export default VisualTree;
