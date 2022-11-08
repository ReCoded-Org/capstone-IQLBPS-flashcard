import React from 'react';
import { ActiveUserSection } from '../components/user/ActiveUserSection';
import { lastsList, ratedList, suggestionList } from '../util/fakeData';

const UserHome = () => {
  return (
    <section className="bg-white dark:bg-gray-900  flex flex-col justify-center items-center overflow-autos p-4 pb-20">
      <ActiveUserSection list={ratedList} title="Rated by you" />
      <ActiveUserSection list={suggestionList} title="Suggestion" />
      <ActiveUserSection list={lastsList} title="Lasts" />
    </section>
  );
};
export default UserHome;
