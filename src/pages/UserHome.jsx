/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ActiveUserSection } from '../components/user/ActiveUserSection';
import { getFavoriteSets, latestAddedSets } from '../services/user';
import Loading from '../components/Loading';

const UserHome = () => {
  const [latestSets, setLatestSets] = useState([]);
  const [isLoadingLatest, setIsLoadingLatest] = useState(true);

  const [favoriteSets, setFavoriteSets] = useState([]);
  const [isLoadingFav, setIsLoadingFav] = useState(true);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const getLatestSets = async () => {
      const sets = await latestAddedSets();
      setLatestSets(sets);
      setIsLoadingLatest(false);
    };
    getLatestSets();
  }, []);

  useEffect(() => {
    const getFavSets = async () => {
      const favSets = await getFavoriteSets(user.uid);
      setFavoriteSets(favSets);
      setIsLoadingFav(false);
    };
    getFavSets();
  }, [user]);

  return (
    <section className="bg-white dark:bg-gray-900  flex flex-col  overflow-autos p-4 pb-20">
      {isLoadingFav ? (
        favoriteSets ? (
          ''
        ) : (
          <Loading />
        )
      ) : (
        <ActiveUserSection list={favoriteSets} title="Your Favorites" />
      )}

      {isLoadingLatest ? (
        <Loading />
      ) : (
        <ActiveUserSection list={latestSets} title="Latest Sets" />
      )}
    </section>
  );
};
export default UserHome;
