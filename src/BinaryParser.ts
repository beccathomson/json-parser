import './BinaryParser.css';

export interface BinTreeNode {
  id: string | number;
  left?: BinTreeNode | null;
  right?: BinTreeNode | null;
  isSubtree?: boolean;
}

type NodeInputType = (string | number | null | string[] | number[]);
export type ParserInputType = [string | number, NodeInputType?, NodeInputType?];

const parseBinaryTreeFromJson = (data: any): BinTreeNode | null => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const { id, left, right } = data;

  const node: BinTreeNode = {
    id: id !== undefined ? id : null,
  };

  if (left !== undefined) {
    node.left = parseBinaryTreeFromJson(left);
  }

  if (right !== undefined) {
    node.right = parseBinaryTreeFromJson(right);
  }

  return node;
};

const parseBinaryTree = (arr: ParserInputType): BinTreeNode | null => {
  if (!arr) {
    return null;
  }
  const [id, leftChild, rightChild] = arr;

  const node: BinTreeNode = {
    id: Array.isArray(id) ? id[0] : id,
  };

  const left =
    leftChild && !Array.isArray(leftChild)
      ? parseBinaryTree([leftChild])
      : parseBinaryTree(leftChild as ParserInputType);
  const right =
    rightChild && !Array.isArray(rightChild)
      ? parseBinaryTree([rightChild])
      : parseBinaryTree(rightChild as ParserInputType);

  if (left || right) {
    node.left = left;
    node.right = right;
  }

  return node;
};

// function takes BinTreeNode json representation and return BinTreeNode object
export const parseTreeFromJson = (jsonString: string): BinTreeNode | null => {
  if (!jsonString) {
    return null;
  }

  let parsedInput: any = null;
  try {
    parsedInput = JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON string:', error);
    return null;
  }

  const parsedTree = parseBinaryTreeFromJson(parsedInput);
  return parsedTree;
};

// function takes initial file input array and returns BinTreeNode tree
export const parseTree = (fileInput: string): BinTreeNode | null => {
  if (!fileInput) {
    return null;
  }

  let parsedInput: ParserInputType | null = null;
  try {
    parsedInput = JSON.parse(fileInput ) as ParserInputType;
  } catch (error) {
    console.error('Error parsing JSON string:', error);
    return null
  }

  console.log(parsedInput)
  const parsedTree = parseBinaryTree(parsedInput);
  return parsedTree;
};

export default parseTree;