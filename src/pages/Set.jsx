import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';

import CommentsSection from '../components/CommentSection';
import SetInfo from '../components/sets/SetInfo';

import { db } from '../services/firebaseConfig';

export default function SetPage() {
  const setID = 'LQv2gpxEUmxILoBG420g';

  const [mySetData, setMySetData] = useState();
  useEffect(() => {
    async function fetchUser() {
      const docRef = doc(db, 'sets', setID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        setMySetData(docSnap.data());
      }
    }
    fetchUser();
  }, []);

  return mySetData ? (
    <div className="dark:bg-gray-900">
      <SetInfo
        setsDescription={mySetData.description}
        setphotoUrl={mySetData.image}
        setName={mySetData.name}
      />
      <CommentsSection commentId={mySetData.commentsId} />
    </div>
  ) : null;
}
