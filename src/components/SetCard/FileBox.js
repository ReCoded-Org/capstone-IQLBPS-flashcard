function FileBox({ fileName, deleteFile }) {
    return (<div>
        <div className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
          <svg
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            className="w-1/6 h-1/6 "
          >
            <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13" />
            <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5" />
            <polygon fill="#1565C0" points="21,23 14,33 28,33" />
            <polygon fill="#1976D2" points="28,26.4 23,33 33,33" />
            <circle fill="#1976D2" cx="31.5" cy="24.5" r="1.5" />
          </svg>
    
          <span className="flex-1 ml-3 whitespace-nowrap">{fileName}</span>
    
          <button
            type="button"
            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            onClick={deleteFile}
          >
            <span>X</span>
          </button>
        </div>
      </div>)
  
}

export default FileBox;
