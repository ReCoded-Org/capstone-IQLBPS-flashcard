function TextArea({textFormat, handleText}){
return (
    <textarea
              id="editor"
              rows="5"
              className="block px-0 w-full h-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a text..."
              required=""
              onChange={(e)=> handleText(e)}
              style={{
                fontWeight: textFormat.bold ? 'bold' : 'normal',
                fontStyle: textFormat.italic ? 'italic' : 'initial',
                textDecoration: textFormat.underline ? 'underline' : 'none',
              }}
            />
)
}

export default TextArea;