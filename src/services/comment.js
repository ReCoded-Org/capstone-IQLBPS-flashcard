import { doc, setDoc, arrayUnion, getDoc, Timestamp } from 'firebase/firestore';

import { db } from './firebaseConfig';

export async function createComment(id, currentUser, comment) {
  await setDoc(
    doc(db, 'comments', id),
    {
      comments: arrayUnion({
        user: {
          id: currentUser.uid,
          name: currentUser.displayName,
          photoURL: currentUser.photoUrl,
        },
        createdAt: Timestamp.now(),
        text: comment,
      }),
    },
    { merge: true }
  );
}

export async function getComments(id) {
  let comments = [];
  const docRef = doc(db, 'comments', id);
  const docSnap = await getDoc(docRef);
  comments = docSnap.data();
  return comments;
}
