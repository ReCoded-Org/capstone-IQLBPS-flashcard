import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  Timestamp,
  query,
  onSnapshot,
} from 'firebase/firestore';

import db from './firebaseConfig';

export async function createComment(id, comment, user) {
  await updateDoc(doc(db, 'comments', id), {
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
}

export async function getComments(id) {
  let comments = [];
  await getDoc(query(doc(db, 'comments', id)));
  onSnapshot(query(doc(db, 'comments', id)), (data) => {
    comments = [...data.data().comments];
  });
  return comments;
}
