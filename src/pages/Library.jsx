import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import { getFavoriteSets } from '../services/user';

function Library() {
  const { user } = useSelector((state) => state.user);
  const [cardSet, setCardSet] = useState([]);

  useEffect(() => {
    async function handleFetchSets() {
      const sets = await getFavoriteSets(user.id);
      setCardSet(sets);
    }
    handleFetchSets();
  }, [user]);

  return (
    <div className="flex flex-wrap -mb-4">
      {cardSet.length > 0
        ? cardSet.map((item) => {
            return (
              <div className="w-1/5 mb-4">
                <Card
                  id={item.id}
                  key={item.id}
                  coverImage={item.image}
                  title={item.name}
                  description={item.description}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Library;
