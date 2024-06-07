import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MrDropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Handle the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const styles = {
    dropzone: {
      border: '1px dashed #FFFFFF',
      borderRadius: '10px',
      padding: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      color: '#F6B336',
      backgroundColor: 'transpernt',
      width: '510px',
      height: '200px',
    },
  };
  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here...</p> : <p>Upload Thumbnail</p>}
    </div>
  );
};

export default MrDropzone;
