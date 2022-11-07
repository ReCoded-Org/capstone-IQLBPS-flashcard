import { useState } from 'react';
import FileBox from './FileBox';
import TextArea from './TextArea';
import UploadFile from './UploadFile';

function CardInput({ handleError }) {
  const [file, setFile] = useState();
  const [text, setText] = useState('');

  const [textFormat, setTextFormat] = useState({
    italic: false,
    bold: false,
    underline: false,
  });

  const [uploader, setUploader] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleText = (e) =>{
    setText(e.target.value);
  }
  const handleFormat = (key) => {
    if (uploader === false) {
      setTextFormat((prev) => {
        return { ...prev, [key]: !prev[key] };
      });
    }
    setUploader(false);
  };

  const handleUploader = () => {
    setUploader(true);
  };

  const uploadFile = (e) => {
    const uploadedFile = e.target.files[0];

    if (
      !uploadedFile.type.includes('image') &&
      !uploadedFile.type.includes('mp3')
    ) {
      handleError({
        type: 'error',
        title: 'Invalid File type, Please upload image/audio files.',
      });
      return;
    }
    setFile(uploadedFile);
    setUploader(false);
    setIsUploaded(true);
  };

  const handleDelete = () => {
    setFile(null);
    setIsUploaded(false);
    setUploader(true);
  };

  return (
    <form>
      <div className=" mb-4 w-full h-52 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 overflow-hidden">
        <div className="flex  justify-between items-center py-2 px-3 border-b dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
            <div className="flex items-center space-x-1 sm:pr-4">
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={() => handleFormat('bold')}
              >
                <svg
                  width="11px"
                  height="14px"
                  viewBox="0 0 11 14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>format_bold</title>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Rounded"
                      transform="translate(-141.000000, -2018.000000)"
                    >
                      <g
                        id="Editor"
                        transform="translate(100.000000, 1960.000000)"
                      >
                        <g
                          id="-Round-/-Editor-/-format_bold"
                          transform="translate(34.000000, 54.000000)"
                        >
                          <g>
                            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M15.6,10.79 C16.57,10.12 17.25,9.02 17.25,8 C17.25,5.74 15.5,4 13.25,4 L8,4 C7.45,4 7,4.45 7,5 L7,17 C7,17.55 7.45,18 8,18 L13.78,18 C15.85,18 17.74,16.31 17.75,14.23 C17.76,12.7 16.9,11.39 15.6,10.79 Z M10,6.5 L13,6.5 C13.83,6.5 14.5,7.17 14.5,8 C14.5,8.83 13.83,9.5 13,9.5 L10,9.5 L10,6.5 Z M13.5,15.5 L10,15.5 L10,12.5 L13.5,12.5 C14.33,12.5 15,13.17 15,14 C15,14.83 14.33,15.5 13.5,15.5 Z"
                              id="🔹-Icon-Color"
                              fill="#1D1D1D"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <span className="sr-only">font weight</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={() => handleFormat('italic')}
              >
                <svg
                  width="12px"
                  height="14px"
                  viewBox="0 0 12 14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>ormat_italic</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Rounded"
                      transform="translate(-684.000000, -2106.000000)"
                    >
                      <g
                        id="Editor"
                        transform="translate(100.000000, 1960.000000)"
                      >
                        <g
                          id="-Round-/-Editor-/-ormat_italic"
                          transform="translate(578.000000, 142.000000)"
                        >
                          <g>
                            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M10,5.5 C10,6.33 10.67,7 11.5,7 L12.21,7 L8.79,15 L7.5,15 C6.67,15 6,15.67 6,16.5 C6,17.33 6.67,18 7.5,18 L12.5,18 C13.33,18 14,17.33 14,16.5 C14,15.67 13.33,15 12.5,15 L11.79,15 L15.21,7 L16.5,7 C17.33,7 18,6.33 18,5.5 C18,4.67 17.33,4 16.5,4 L11.5,4 C10.67,4 10,4.67 10,5.5 Z"
                              id="🔹-Icon-Color"
                              fill="#1D1D1D"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="sr-only">Font Italic</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={() => handleFormat('underline')}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4V10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10V4M8.5 4V10C8.5 13.2218 10.6766 15.9352 13.6395 16.7501M4 21H20M3 4L10.5 4M17 4L21 4"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="sr-only">underline</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={handleUploader}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5.25581V16.5C17.5 19.5376 15.0376 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5V5.66667C6.5 3.64162 8.14162 2 10.1667 2C12.1917 2 13.8333 3.64162 13.8333 5.66667V16.4457C13.8333 17.4583 13.0125 18.2791 12 18.2791C10.9875 18.2791 10.1667 17.4583 10.1667 16.4457V6.65116"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
            </div>
          </div>
        </div>
        <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800  ">
          {!uploader && !isUploaded && <TextArea textFormat={textFormat} handleText={handleText} />}

          {uploader && <UploadFile uploadFile={uploadFile} />}

          {isUploaded && (
            <FileBox fileName={file.name} deleteFile={handleDelete} />
          )}
        </div>
      </div>
    </form>
  );
}

export default CardInput;
