import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getComments } from '../services/comment';
import Comment from './Comment';
import CommentPost from './CommentPost';

export default function CommentsSection({ commentId }) {
  const [comments, setComments] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    async function fetchComments() {
      const thisSetComments = await getComments(commentId);
      setComments(thisSetComments);
    }
    fetchComments();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            {t("Comments")}
          </h2>
        </div>
        {comments ? (
          Object.values(comments).map((comment) => {
            return comment.map((item) => {
              return (
                <Comment
                  key={uuidv4()}
                  userName={item.user.name}
                  date={item.createdAt.seconds}
                  userId={item.user.id}
                  commentText={item.text}
                  userImg={item.user.photoURL}
                />
              );
            });
          })
        ) : (
          <p className="italic text-slate-400 dark:text-slate-600">
            {t("there are no comments for this set")} <br />{' '}
            <span className="font-bold text-slate-600	dark:text-slate-400">
              {t("be the first !!!")}
            </span>
          </p>
        )}
        <CommentPost setComments={setComments} comments={comments} />
      </div>
    </section>
  );
}
