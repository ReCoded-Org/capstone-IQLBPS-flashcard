/* eslint-disable no-unused-vars */
import React , { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import { ActiveUserSection } from '../components/user/ActiveUserSection';
import {    favoritedSets, latestAddedSets } from '../services/user';
// import {ratedList, suggestionList } from '../util/fakeData';

const UserHome = () => {

const [latestSets, setLatestSets] = useState([]);
const [loadingLatestSets , setLoadingLatestSets] = useState(true);



const [favoriteSets, setfavoriteSets] = useState([]);
const [loadingfavSets , setLoadingfavSets] = useState(true);


const { user } = useSelector((state) => state.user);


 useEffect(()=> {

const getLatestSets = async () => {

  const sets = await latestAddedSets();

setLatestSets(sets);



setLoadingLatestSets(false);
}

getLatestSets();

const getfavSets = async () => {

  const favSets = await favoritedSets(user.uid);

  setfavoriteSets(favSets);
  setLoadingfavSets(false);

}
getfavSets();



 }, []) ;

  
  return (
    <section className="bg-white dark:bg-gray-900  flex flex-col  overflow-autos p-4 pb-20">
      {/* <ActiveUserSection list={ratedList} title="Rated by you" /> */}
    {  !loadingfavSets && (<ActiveUserSection list={favoriteSets} title="Your Favorites" />) }
     {  !loadingLatestSets && (<ActiveUserSection list={latestSets} title="Latest Sets" />) }
    </section>
  );
};
export default UserHome;
