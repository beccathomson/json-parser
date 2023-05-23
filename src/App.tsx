import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUpload from './FileUpload';
import { selectAppState } from './app.slice';
import { BinTreeNode, parseTree } from './BinaryParser';
import VisualTree from './VisualTree';

const App = (): JSX.Element => {

  const fileInput = useSelector(selectAppState)?.input;
  const [jsonText, setJsonText] = useState("");
  const [isValidJson, setIsValidJson] = useState(false);
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
    handleNewText(fileInput)
  },[fileInput])

  useEffect(() => { // set valid output only
    if (isValidJson) {
      setOutput(parseTree(jsonText))
      setBinaryTree(parseTree(jsonText))
    }
  },[jsonText])

  return (
    <div>
      <FileUpload />
      <div className="outputArea">
      <pre
          contentEditable
          onKeyDown={handleUserInput}
          className={isValidJson ? 'valid' : 'invalid'}
        >{JSON.stringify(output, null, 2)}</pre>
      </div>
      {binaryTree && <VisualTree rootNode={binaryTree} />}
    </div>
  );
};

export default App;
