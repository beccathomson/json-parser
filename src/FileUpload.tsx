import React, { useState } from 'react';
import { setInput } from './app.slice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

const FileUpload = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('');
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
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
      <div style={{display: 'flex'}}>
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <div style={{ paddingLeft: '4px' }}>{fileName}</div>
      </div>
      <Button disabled={!selectedFile} variant="contained" onClick={handleUploadClick}>
        Fetch
      </Button>
    </div>
  );
  
};

export default FileUpload;
