import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

import { fetchUserInfo, fetchUserSets } from '../services/user';

export default function PublicProfile() {
  const { id } = useParams();
  const [myData, setMyData] = useState(null);
  const [cardSet, setCardSet] = useState([]);

  useEffect(() => {
    async function handleFetchUserData() {
      const user = await fetchUserInfo(id);
      setMyData(user);
    }
    handleFetchUserData();
  }, []);

  useEffect(() => {
    async function doTheThing() {
      if (myData) {
        const userSets = await fetchUserSets(myData.sets);
        setCardSet(userSets);
      }
    }
    doTheThing();
  }, [myData]);

  if (myData)
    return (
      <section className="dark:bg-gray-900">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-1 ">
          <div className="text-center text-gray-500 dark:text-gray-400 ">
            <img
              className="my-4 border-4 border-primary-50 mx-auto mb-4 w-80 h-auto rounded-full"
              src={myData.photoURL}
              alt={`${myData.displayName}Avatar`}
            />
            <div className="mb-4 mt-2 flex gap-2 justify-center mx-auto max-w-screen-xl text-center">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {myData.displayName}
              </h3>
            </div>
          </div>
        </div>

        <br />

        <div className=" max-w-screen-xl text-left mx-auto ">
          <h2 className="mb-4 mx-5 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {myData.displayName} sets
          </h2>
          <hr className="mx-5 max-w-screen-xl" />
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
            {cardSet.length > 0
              ? cardSet.map((theSet) => {
                  return (
                    <Card
                      id={theSet.id}
                      coverImage={theSet.image}
                      title={theSet.name}
                      description={theSet.description}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </section>
    );
}
