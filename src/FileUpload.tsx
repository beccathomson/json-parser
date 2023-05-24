import React, { useState } from 'react';
import { setInput } from './app.slice';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';

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
          dispatch(setInput(fileContent.toString()));
        }        
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="buttonSection">
      <Button
    variant="contained"
    component="label"
  >
    Upload File
    <input
      type="file"
      hidden
      onChange={handleFileChange}
    />
  </Button>
      <Button variant="contained" onClick={handleUploadClick}>Fetch</Button>
    </div>
  );
};

export default FileUpload;