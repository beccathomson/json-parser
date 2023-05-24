import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FileUpload from './FileUpload';
import { selectAppState } from './app.slice';
import { BinTreeNode, parseTree, parseTreeFromJson } from './BinaryParser';
import VisualTree from './VisualTree';
import './App.css';

const App = (): JSX.Element => {
  const fileInput = useSelector(selectAppState)?.input;
  const [jsonText, setJsonText] = useState<string>("");
  const [isValidJson, setIsValidJson] = useState<boolean>(true);
  const [binaryTree, setBinaryTree] = useState<BinTreeNode | null>(null);
  const [editableOutput, setEditableOutput] = useState<string>();

  const handleNewText = (text: string): void => {
    try {
      JSON.parse(text);
      setIsValidJson(true);
      setJsonText(text);
    } catch (error) {
      setIsValidJson(false);
    }
  }

  let typingTimer: NodeJS.Timeout | null = null;
  // wait 1 second after user stops typing

  const handleUserInput = (event: React.ChangeEvent<HTMLPreElement>): void => {

    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    
    typingTimer = setTimeout(() => handleNewText(event.target.textContent ?? ""), 1000);
  
  };

  useEffect(() => {
    const treeOutput = parseTree(fileInput); // Trim the JSON string to remove leading/trailing whitespaces
    if (treeOutput) {
      setEditableOutput(JSON.stringify(treeOutput, null, 2));
      setBinaryTree(treeOutput);
    }
  }, [fileInput]);

  useEffect(() => {
    if (isValidJson) {
      const treeOutput = parseTreeFromJson(jsonText.trim()); // Trim the JSON string to remove leading/trailing whitespaces
      if (treeOutput) {
        setBinaryTree(treeOutput);
      }
    }
  }, [jsonText]);

  return (
    <div>
      <FileUpload />
      <div className="outputArea">
      {fileInput && <pre           className={isValidJson ? 'valid' : 'invalid'}
><code
          contentEditable
          onInput={handleUserInput}
          >{editableOutput}</code></pre>}

      </div>
      {binaryTree && <VisualTree binaryTree={binaryTree} />}
    </div>
  );
};

export default App;
