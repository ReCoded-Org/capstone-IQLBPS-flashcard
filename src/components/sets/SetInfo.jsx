import { useState } from 'react';
import StarRating from './Rating';

const SetInfo = () => {
  // const [value, setValue] = useState(2);
  const [inLibrary, setInLibrary] = useState(false);

  const handleButtoClick = () => {
    if (inLibrary) {
      // if in library, remove from library}
    } else {
      // if not in library, add to library}
    }
    setInLibrary((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            React
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni
            repudiandae quae expedita nesciunt atque voluptates eaque maxime?
            Nobis culpa sapiente nisi quasi vero dolores quisquam blanditiis
            quam dolorum unde.
          </p>
          <StarRating />
          <button
            onClick={handleButtoClick}
            className="bg-primary-800 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mt-4 w-2/3"
            type="button"
          >
            {`${inLibrary ? 'Remove from Library' : 'Add to Library'}`}
          </button>
        </div>
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          // src={img} this is the main src to be used when fetching data is implemented
          src="https://unsplash.com/photos/04X1Yp9hNH8"
          alt=""
        />
      </div>
    </div>
  );
};

export default SetInfo;
