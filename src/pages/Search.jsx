/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { db } from '../services/firebaseConfig';
import Card from '../components/Card';
import Filter from '../components/filter/Filter';


const Search = () => {
  const { t } = useTranslation();
  const [sortBy, setSortBy] = useState('');
  const [filteredCategory, setFilterCategory] = useState('');
  const [sets, setSets] = useState([]);
  const { key } = useParams();

  const fetchSets = async (title) => {
    const setsRef = collection(db, 'sets');
    const q = title
      ? query(setsRef, where('name', '==', title))
      : query(setsRef);
    const setss = await getDocs(q);
    setss.docs.forEach((set) => {
      setSets((prev) => [...prev, { ...set.data() }]);
    });
  };

  const sortByFunc = (a, b) =>
    sortBy === 'desc'
      ? b.createdAt - a.createdAt
      : sortBy === 'asc'
      ? a.createdAt - b.createdAt
      : sortBy === 'cardsNumber'
      ? b.cards.length - a.cards.length
      : null;

  useEffect(() => {
    setSets([]);
    fetchSets(key);
  }, [key]);

  const sortByHandler = (sort) => {
    setSortBy(sort);
  };

  const filteredCategoryHandler = (category) => {
    setFilterCategory(category);
  };

  return (
    <div className="grid-container grid grid-cols-4">
      <Filter
        title={key}
        sortBy={sortByHandler}
        filteredCategory={filteredCategoryHandler}
      />
      <div className="col-span-3">
        <div className="m-5 grid grid-cols-4 gap-12">
          {sets && sets.length > 0 ? (
            sets
              .filter((set) =>
                filteredCategory ? set.categories === filteredCategory : set
              )
              .sort(sortByFunc && sortByFunc)
              .map((set) => (
                <Card
                  id={Math.random()}
                  title={set.name}
                  description={set.description}
                  coverImage={set.image}
                />
              ))
          ) : (
            <h1>{t("NO DATA FOUND!")}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
