import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUpload from './FileUpload';
import { clearFileInput, selectAppState } from './app.slice';
import { BinTreeNode, parseTree } from './BinaryParser';
import Tree from 'react-d3-tree';
import './App.css';

import VisualTree from './VisualTree';

const App = (): JSX.Element => {

  const dispatch = useDispatch();

  const fileInput = useSelector(selectAppState)?.input;
  const [jsonText, setJsonText] = useState("");
  const [isValidJson, setIsValidJson] = useState(true);
  const [binaryTree, setBinaryTree] = useState<BinTreeNode | null>(null);
  const [output, setOutput] = useState<BinTreeNode | null>();

  const handleNewText = (text: string) => { // set isValidJson, sets input
    try {
      const parsed = JSON.parse(text);
      setIsValidJson(true);
      setJsonText(parsed);
    } catch (error) {
      setIsValidJson(false);
    }
  }

  //@ts-ignore
  const handleUserInput = (event) => {
    const newText = event.target.textContent;
    handleNewText(newText)
  };

  useEffect(() => {
    if (!fileInput)
      return
    handleNewText(fileInput)
    dispatch(clearFileInput());
  },[fileInput])

  useEffect(() => { // set valid output only
    if (isValidJson) {
      const treeOutput = parseTree(jsonText);
      if (treeOutput) {
        setOutput(treeOutput)
        setBinaryTree(treeOutput)
      }
    }
  },[jsonText])

  return (
    <div>
      <FileUpload />
      <div className="outputArea">
      <pre
          contentEditable
          onInput={handleUserInput}
          className={isValidJson ? 'valid' : 'invalid'}
        >{JSON.stringify(output, null, 2)}</pre>
      </div>
      {binaryTree && <VisualTree rootNode={binaryTree} />}
    </div>
  );
};

export default App;
