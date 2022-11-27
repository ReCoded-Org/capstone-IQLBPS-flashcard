import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { createComment } from '../services/comment';


function CommentPost({ setComments, comments }) {
  const { t } = useTranslation();
  const [comment, setComment] = useState(' ');
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();

  const handleComment = async (e) => {
    e.preventDefault();
    await createComment(id, user, comment);
    const newComment = {
      user: {
        id: user.uid,
        name: user.displayName,
        photoURL: user.photoUrl,
      },
      createdAt: Timestamp.now(),
      text: comment,
    };
    if (comments) {
      setComments({ comments: [...comments.comments, newComment] });
    } else {
      setComments({ comments: [newComment] });
    }
    setComment('');
  };

  return user ? (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="comment" className="sr-only">
              {t("Your comment")}
            </label>
            <textarea
              id="comment"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="write a comment..."
              required=""
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            onClick={handleComment}
          >
            {t("Post comment")}
          </button>
        </form>
      </div>
    </section>
  ) : null;
}
export default CommentPost;
