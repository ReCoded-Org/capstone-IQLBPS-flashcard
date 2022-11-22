import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchUserInfo, fetchUserSets } from '../services/user';

function Library() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [cardSet, setCardSet] = useState([]);
  useEffect(() => {
    async function handleFetchUserData() {
      const data = await fetchUserInfo(id);
      setUser(data);
    }
    handleFetchUserData();
  }, []);
  useEffect(() => {
    async function handleFetchSets() {
      const sets = await fetchUserSets(user.id);
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
