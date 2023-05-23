import React from 'react';
import { BinTreeNode } from './BinaryParser';


interface VisualTreeProps {
  rootNode: BinTreeNode;
}

const BinTreeNodeSquare: React.FC<{ node: BinTreeNode }> = ({ node }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px',
      }}
    >
      {node.id}
    </div>
  );
};

const VisualTree: React.FC<VisualTreeProps> = ({ rootNode }) => {
    const renderBinaryTreeNode = (node: BinTreeNode | null) => {
      if (!node) {
        return null;
      }
  
      return (
        <div style={{ display: 'flex' }}>
          <BinTreeNodeSquare node={node} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          {node.left && renderBinaryTreeNode(node.left)}
          {node.right && renderBinaryTreeNode(node.right)}
        </div>
        </div>

      );
    };
  
    return <div>{renderBinaryTreeNode(rootNode)}</div>;
  };

export default VisualTree;
