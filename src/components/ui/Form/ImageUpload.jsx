import React from 'react';
import { Icon } from '@iconify/react';

const ImageUpload = ({ image, setFile }) => {
  const [inputValue, setInputValue] = React.useState(image);
  const [imgSrc, setImgSrc] = React.useState();
  const inputRef = React.useRef();

  const handleInputImageChange = file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      if (setFile) {
        setFile(files[0]);
      }
      if (reader.result !== null) {
        setInputValue(reader.result);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => inputRef.current.click()}
        className='flex flex-col p-4 justify-center items-center w-full md:w-[80%] md:h-[80%]   rounded-3xl border border-gray-700 border-solid aspect-square bg-[#0B1739]  max-md:mt-8'
      >
        {imgSrc ? (
          <div className='w-full h-full'>
            <img src={imgSrc} className='w-full h-full' />
          </div>
        ) : (
          <div className='flex justify-center items-center px-2 py-2 md:px-10 md:py-10 sm:py-16 sm:px-16 rounded-full border border-white border-dashed '>
            <Icon
              icon='material-symbols-light:upload-file-outline'
              className='text-white'
              width={50}
            />
          </div>
        )}

        <input
          hidden
          ref={inputRef}
          type='file'
          value={inputValue}
          accept='image/png, image/jpeg'
          onChange={handleInputImageChange}
          id='account-settings-upload-image'
        />
      </div>
    </>
  );
};

export default ImageUpload;
