/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  Timestamp,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import db from '../services/firebaseConfig';

function CommentPost() {
  const [comment, setComment] = useState(' ');
  const [commentList, setCommentList] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const commentCollectionRef = doc(db, 'comments', id);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const docRef = await updateDoc(commentCollectionRef, {
        comments: arrayUnion({
          user: {
            id: user.id,
            name: user.name,
            photoURL: user.photoURL,
          },
          createdAt: Timestamp.now(),
          text: comment,
        }),
      });
      console.log('Document written with ID: ', docRef?.id);
      setComment('');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const q = query(doc(db, 'comments', id));
    const getComments = async () => {
      // eslint-disable-next-line no-unused-vars
      const querySnapshot = await getDoc(q);
      onSnapshot(q, (data) => {
        setCommentList([...data.data().comments]);
      });
    };
    getComments();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
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
            Post comment
          </button>
          {console.log('return the comment', commentList)}
          {commentList.length > 0
            ? commentList.map((co) => {
                return (
                  <Comment
                    key={uuidv4()}
                    userName={co.name}
                    date={co.createdAt.seconds}
                    commentText={co.text}
                    userImg={co.photoURL}
                  />
                );
              })
            : null}
        </form>
      </div>
    </section>
  );
}
export default CommentPost;
