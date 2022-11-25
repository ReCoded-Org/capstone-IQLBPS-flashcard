import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../services/firebaseConfig';
import Comment from './Comment';
import CommentPost from './CommentPost';

export default function CommentsSection() {
  const [comments, setComments] = useState();
  const commentId = 'kOTHmdsH9cNG5PXKwrZy';

  useEffect(() => {
    async function fetchComments() {
      const docRef = doc(db, 'comments', commentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setComments(docSnap.data());
      }
    }
    fetchComments();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments
          </h2>
        </div>
        {comments
          ? Object.values(comments).map((comment) => {
              return comment.map((item) => {
                return (
                  <Comment
                    // key={item.ID}
                    userName={item.user.name}
                    date={item.createdAt.seconds}
                    commentText={item.text}
                    userImg={item.user.photoURL}
                  />
                );
              });
            })
          : null}
        <CommentPost />
      </div>
    </section>
  );
}
