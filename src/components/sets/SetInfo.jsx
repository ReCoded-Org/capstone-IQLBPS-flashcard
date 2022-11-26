import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchUserInfo, handleFavoriteSetsArray } from '../../services/user';
import StarRating from './Rating';

const SetInfo = ({ setsDescription, setphotoUrl, setName, setID }) => {
  // const [value, setValue] = useState(2);
  const { t } = useTranslation();
  const setRatingValue = 4;

  const [inLibrary, setInLibrary] = useState();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    async function CheckIfIN() {
      const userData = await fetchUserInfo(user.uid);
      const exist = userData.favSets.find((item) => item === setID);
      setInLibrary(exist);
    }
    CheckIfIN();
  }, []);

  const handleButtoClick = async () => {
    await handleFavoriteSetsArray(inLibrary, user.uid, setID);

    setInLibrary((prev) => !prev);
  };
  return (
    <div>
      <div className="mx-auto grid lg:grid-cols-2 items-center bg-white rounded-lg border shadow-md md:grid-cols-1 md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal lg:full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {setName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {setsDescription}
          </p>
          <StarRating setRatingValue={setRatingValue} />
          <button
            onClick={handleButtoClick}
            className="bg-primary-800 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mt-4 w-2/3"
            type="button"
          >
            {`${inLibrary ? t("Remove from Library") : t("Add to Library")}`}
          </button>
        </div>
        <div className="bg-gray-200 dark:bg-gray-600">
          <img
            className="h-52 mx-auto object-cover h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={setphotoUrl}
            alt={setName}
          />
        </div>
      </div>
    </div>
  );
};

export default SetInfo;
