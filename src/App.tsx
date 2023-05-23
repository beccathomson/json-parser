import React from 'react';
import './App.css';
import BinaryParser, { ParserInputType } from './BinaryParser';
const test1 = [1, [2], [3, null, [5]]];
const test2 = ["a", ["b"], ["c"]];

function App() {
  return (
    <div className="App">
      <BinaryParser input={test1 as ParserInputType}/>
      <BinaryParser input={test2 as ParserInputType}/>
    </div>
  );
}

export default App;
