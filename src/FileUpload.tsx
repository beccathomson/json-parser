import React, { useState } from 'react';
import { setInput } from './app.slice';
import { useDispatch } from 'react-redux';

const FileUpload = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

    // @ts-ignore
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event?.target?.result;
        if (fileContent) {
          dispatch(setInput(fileContent as string));
        }        
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUploadClick}>Fetch</button>
    </div>
  );
};

export default FileUpload;