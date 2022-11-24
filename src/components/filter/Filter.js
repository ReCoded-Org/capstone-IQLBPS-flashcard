import { useState, useEffect } from 'react';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

function Filter({ title, sortBy, filteredCategory }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async (titlee) => {
    const setsRef = collection(db, 'sets');
    const q = titlee
      ? query(setsRef, where('name', '==', titlee))
      : query(setsRef);
    const setss = await getDocs(q);
    setss.docs.forEach((set) => {
      setCategories((prev) => {
        return !prev.includes(set.data().categories)
          ? [...prev, set.data().categories]
          : prev;
      });
    });
  };

  useEffect(() => {
    setCategories([]);
    fetchCategories(title);
  }, [title]);

  return (
    <div className="shadow-xl bg-sky-900 rounded-md outline outline-2 outline-offset-2 outline-sky-600 md:w-3/4 max-sm:w-3/4 m-6 p-2 h-fit col-span-1 sticky top-0">
      <h3 className="mb-2 font-semibold text-white">Sorting by</h3>
      <ul className="mb-4 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white gap-x-1">
        {/* <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-1">
            <label
              htmlFor="horizontal-list-radio-license"
              className="py-3 m-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 pl-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              Rating
            </label>
          </div>
        </li> */}
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center p-1">
            <label
              htmlFor="horizontal-list-radio-id"
              className="p-1 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value="cardsNumber"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onClick={(e) => sortBy(e.target.value)}
              />
              Numbers of cards
            </label>
          </div>
        </li>
      </ul>
      <h3 className="mb-2 font-semibold text-white">Order by</h3>
      <ul className="mb-4 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <label
              htmlFor="horizontal-list-radio-license"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value="asc"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onClick={(e) => sortBy(e.target.value)}
              />
              Ascending
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <label
              htmlFor="horizontal-list-radio-id"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value="desc"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onClick={(e) => sortBy(e.target.value)}
              />
              Descending
            </label>
          </div>
        </li>
      </ul>

      <label
        htmlFor="countries"
        className="block mb-2 font-semibold text-white"
      >
        Filter by category
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => filteredCategory(e.target.value)}
        >
          {
            // TODO : Get the categories similar to categories used in NavBar
          }
          {categories &&
            categories.map((category) => (
              <option id={Math.random()} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}

export default Filter;
