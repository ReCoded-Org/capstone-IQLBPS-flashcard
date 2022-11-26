import { Link } from 'react-router-dom';
import moment from 'moment';
import DefaultUserImage from '../assets/Default_profile.jpg';

export default function Comment({
  userName,
  date,
  commentText,
  userImg,
  userId,
}) {
  const commentDate = new Date(date * 1000);
  const formatedDate = moment(commentDate).format('DD/MM/yyyy h:mm a');
  const dateTimeFormat = moment(commentDate).format('yyyy-MM-DD');

  return (
    <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Link
            to={`/user/${userId}`}
            className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
          >
            <img
              className="mr-2 w-6 h-6 rounded-full  dark:bg-gray-600"
              src={userImg || DefaultUserImage}
              alt={userName}
            />
            {userName}
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={dateTimeFormat} title={formatedDate}>
              {formatedDate}
            </time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{commentText}</p>
    </article>
  );
}
