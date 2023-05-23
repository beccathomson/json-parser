import React from 'react';
import './BinaryParser.css'; // Import the CSS file

interface BinTreeNode {
  id: string | number;
  left?: BinTreeNode | null;
  right?: BinTreeNode | null;
}

interface BinaryParserProps {
    input: ParserInputType;
}

type NodeInputType = (string | number | null | string[] | number[])
export type ParserInputType = [string | number, NodeInputType?, NodeInputType?];

const BinaryParser: React.FC<BinaryParserProps> = ({ input }) => {
  const parseBinaryTree = (arr: ParserInputType): BinTreeNode | null => {
    if (!arr) {
      return null;
    }

    const [id, leftChild, rightChild] = arr;

    const node: BinTreeNode = {
      id: Array.isArray(id) ? id[0] : id,
    };

    const left = parseBinaryTree(leftChild as ParserInputType);
    const right = parseBinaryTree(rightChild as ParserInputType);

    if (left || right) {
        node.left = left
        node.right = right
    }

    return node;
  };

  const parsedTree = parseBinaryTree(input);

  return (
    <div>
      <pre className="jsonStyle">{JSON.stringify(parsedTree, null, 2)}</pre>
    </div>
  );
};

export default BinaryParser;
