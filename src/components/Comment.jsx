import moment from "moment"


export default function Comment({userName , date, commentText , userImg}){
    
    const commentDate = new Date(date*1000)

    const formatedDate = moment(commentDate).format('DD/MM/yyyy')
    const dateTimeFormat = moment(commentDate).format('yyyy-MM-DD')
    return(
        <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">

            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={userImg}
                        alt={userName}/>
                        {userName} </p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime={dateTimeFormat}
                        title={formatedDate}>{formatedDate}</time></p>
            </div>
            
            <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            <div id="dropdownComment4"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href=" "
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{commentText}</p>
    </article>
    )
}