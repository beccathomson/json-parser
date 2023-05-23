import React from 'react';
import './BinaryParser.css';
import { useDispatch } from 'react-redux';
import { setBinaryTree } from './app.slice';

export interface BinTreeNode {
  id: string | number;
  left?: BinTreeNode | null;
  right?: BinTreeNode | null;
}

interface BinaryParserProps {
    input: ParserInputType;
}

type NodeInputType = (string | number | null | string[] | number[])
export type ParserInputType = [string | number, NodeInputType?, NodeInputType?];

const parseBinaryTree = (arr: ParserInputType): BinTreeNode | null => {
    if (!arr) {
      return null;
    }
    const [id, leftChild, rightChild] = arr;

    const node: BinTreeNode = {
      id: Array.isArray(id) ? id[0] : id,
    };

    const left = leftChild ? parseBinaryTree(leftChild as ParserInputType): null;
    const right = rightChild? parseBinaryTree(rightChild as ParserInputType): null;

    if (left || right) {
        node.left = left
        node.right = right
    }

    return node;
};

export const parseTree = (jsonString: string): BinTreeNode | null => {
    if (!jsonString || !Array.isArray(jsonString)) 
        return null
    const parsedTree = parseBinaryTree(jsonString as unknown as ParserInputType);
    return parsedTree;
};

const BinaryParser: React.FC<BinaryParserProps> = ({ input }) => {
  const parsedTree = parseBinaryTree(input);


  return (
    <div>
      <pre className="jsonStyle">{JSON.stringify(parsedTree, null, 2)}</pre>
    </div>
  );
};

export default BinaryParser;
