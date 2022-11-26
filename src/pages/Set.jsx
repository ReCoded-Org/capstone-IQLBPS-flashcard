import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSetData } from '../services/sets';

import CommentsSection from '../components/CommentSection';
import SetInfo from '../components/sets/SetInfo';
import ContentSection from '../components/ContentSection';

export default function SetPage() {
  const setID = useParams().id;
  const [mySetData, setMySetData] = useState();

  useEffect(() => {
    async function fetchUser() {
      const myData = await fetchSetData(setID);
      setMySetData(myData);
    }
    fetchUser();
  }, []);

  return mySetData ? (
    <div className="dark:bg-gray-900 pt-5">
      <SetInfo
        setsDescription={mySetData.description}
        setphotoUrl={mySetData.image}
        setName={mySetData.name}
        setID={setID}
      />
      <ContentSection setsCards={mySetData.cards} />
      <CommentsSection commentId={setID} />
    </div>
  ) : null;
}
